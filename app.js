const quote = document.getElementById("quote");
const author = document.getElementById("author");

document.addEventListener('keydown', event =>{
  if (event.keyCode === 32) {
      quote.classList.add("reset");
      quote.classList.remove("executed");
      author.classList.toggle("fade");
      setTimeout(function(){ 
        fetch("https://type.fit/api/quotes")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            let randomNum = getRandomInt(1644);
            quote.textContent = data[randomNum].text;
            author.textContent = data[randomNum].author;
            quote.classList.add("executed");
            quote.classList.remove("reset");
            author.classList.toggle("fade");
          });
      }, 1000);
    }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}