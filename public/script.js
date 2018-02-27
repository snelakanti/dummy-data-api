// get Generate Button
var btnGenerate = document.getElementById('generateBtn');
// get outout div
var output = document.getElementsByClassName("output")[0];

//add Click Listener
btnGenerate.addEventListener("click",()=>{
  var quote = getRandomQuote(quotes.lenght);
  output.innerHTML = '<p>' + quote.quote + '</p>' + '<p class="w"> - ' + quote.name + '</p>';
});

//function for Random Quote Generator
var getRandomQuote = ()=> {
  var rnumber = Math.floor(Math.random() * quotes.length);
  console.log(rnumber);
  return quotes[rnumber];
}
