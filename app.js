const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");


const api_url = "http://api.quotable.io/random";

btn1.addEventListener("click", getquote(api_url));
btn2.addEventListener("click", tweet());

async function getquote(url) {
   const response = await fetch(url);
   var data = await response.json();
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
}

function tweet(){
   window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --- By " + author.innerHTML , "Tweet Window" , "width=500, height=320");
}


