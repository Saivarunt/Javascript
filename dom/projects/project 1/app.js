let btn = document.querySelector("#new-quote")
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")

const quotes = [{
    quote:"A rose by any other name would smell as sweet.", 
    person:"William Shakespeare"
},{
    quote:"Ask not what your country can do for you; ask what you can do for your country.", 
    person:"John Kennedy"
},{
    quote:"Elementary, my dear Watson.", 
    person:"Sherlock Holmes"
},{
    quote:"Genius is one percent inspiration and ninety-nine percent perspiration.", 
    person:"Thomas Edison"
},{
    quote:"If you are going through hell, keep going.", 
    person:"Winston Churchill"
},{
    quote:"You must be the change you wish to see in the world.", 
    person:"Mahatma Ghandi"
}];

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})