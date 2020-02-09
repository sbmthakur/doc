import fetch from 'isomorphic-unfetch'

function HomePage({ documents }) {
  return <ul>
    {documents.map(document => (
      <li key={document.id}><a href={document.resources.pdf}>{document.title}</a></li> 
    ))}
  <style jsx>{`
      a {
        margin: 0 auto;
      }    
    
`}</style>
</ul>
}

HomePage.getInitialProps = async ({ req }) => {
  let searchUrl = req.url.split('/');
  let searchTerm = searchUrl[searchUrl.length - 1];
  const res = await fetch(`https://www.documentcloud.org/api/search?q=${searchTerm}&per_page=100`, {
      "credentials": "include",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:73.0) Gecko/20100101 Firefox/73.0",
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "Accept-Language": "en-US,en;q=0.5",
          "X-Requested-With": "XMLHttpRequest",
          "Pragma": "no-cache",
          "Cache-Control": "no-cache"
      },
      "referrer": "https://www.documentcloud.org/help/api",
      "method": "GET",
      "mode": "cors"
  });
  const json = await res.json()
  return { documents: json.documents }
}

export default HomePage
