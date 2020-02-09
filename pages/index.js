function HomePage() {
  return <form onSubmit={handleSubmit}>
    <h3>Search on documentcloud.org</h3>
    <input type="text" name="lol" />
    <input type="submit" value="Search" />
    <style jsx>{`
      form {
        margin: 20% auto;
        width: 200px;
      }    
      input[type="text"] {
        background-color: #ffffffe3;
        border-radius: 5px;
        color: black;
        width: 150px;
        height: 25px; 
        display: block;
        box-shadow: inset 0 0 2px #000000;
      }
      input[type="submit"] {
        margin-top: 20px;
        background-color: blue;
        border-radius: 5px;
        color: white;
        width: 150px;
        height: 30px; 
        display: block;
        box-shadow: 25px 10px;
      }
`}</style>
  </form>
}

function handleSubmit(evt) {
  evt.preventDefault();
  let data = document.querySelector('input').value;
  let searchTerm = encodeURIComponent(data);
  window.location = `/search/${searchTerm}`;
}

export default HomePage;

