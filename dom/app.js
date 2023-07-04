//selecting element
//GetElementById()
// const title=document.getElementById("main-heading");
// console.log(title)

//GetElementByClassName()
// const listitem= document.getElementsByClassName("list-items")
// console.log(listitem)

//getElementsByTagName() //similar to getelementbyclassname
// const listitem= document.getElementsByTagName("li")
// console.log(listitem)

//querySelector()
// const container=document.querySelector('div')
// console.log(container)

//querySelectorAll()
// const container=document.querySelectorAll('div')
// console.log(container)


//styling an element
// const title=document.querySelector('#main-heading')
// title.style.color='red'//inline styling

// const listitem=document.querySelectorAll('.list-items');
// //cannot apply inline styling directly for list of items
// for (var i=0;i<listitem.length;i++){
//     listitem[i].style.fontSize='2rem';
// }
// console.log(listitem)


//creating elements
// const ul= document.querySelector('ul');
// const li=document.createElement('li')

//adding elements
// ul.append(li)

//modifying text
// const firstlistitem=document.querySelector('.list-items');

// console.log(firstlistitem.innerText);
// console.log(firstlistitem.textContent);
// console.log(firstlistitem.innerHTML);

// li.innerText="X-men";

//modify atttributes and classes
// li.setAttribute('id','main-heading');

//removing an attribute
// li.removeAttribute('id');

// accessing
// li.classList.add('list-items')

// li.classList.remove('list-items')

// console.log(li.classList.contains('list-items'));

// const title=document.querySelector("#main-heading");
// console.log(title.getAttribute('id'))

//remove elements from dom
// li.remove();

//Traverse the DOM

//Parent node Traversal
// let ul=document.querySelector('ul');

// console.log(ul.parentNode);// parent node
// console.log(ul.parentElement);

// console.log(ul.parentNode.parentNode);// grandparent node
// console.log(ul.parentElement.parentElement);

// const html=document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

//child node traversal
// let ul=document.querySelector('ul');

// console.log(ul.childNodes)//indentations are counted as text nodes when traversing the dom tree
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// ul.childNodes[1].style.backgroundColor='blue'//this is because first node is a text node aka indentation

// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

//sibling
//comments are also considered sibiling on same level
// let ul=document.querySelector('ul');
// const div = document.querySelector('div')
// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);


// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

//Event listener

//element.addEventListner("click",function)
// const buttonTwo = document.querySelector('.btn-2');

// function alertBtn()
// {
//     alert('I also love JS');
// }

// buttonTwo.addEventListener("click",alertBtn);

// //Mouseover
// const newbgcolor= document.querySelector(".box-3")

// function changebg(){
//     newbgcolor.style.backgroundColor = "blue"
// }

// newbgcolor.addEventListener("mouseover",changebg)

//Reveal Event
// const revealBtn= document.querySelector(".reveal-btn");

// const hiddenContent =document.querySelector(".hidden-content");

// function revealContent(){
//     if(hiddenContent.classList.contains("reveal-btn"))
//     {
//         hiddenContent.classList.remove('reveal-btn');
//     }
//     else
//     {
//         hiddenContent.classList.add('reveal-btn');
//     }
// }

// revealBtn.addEventListener("click",revealContent);

//Event Propagation
//Event capturing
// window.addEventListener("click",function(){
//     console.log("Window");
// },true);

// document.addEventListener("click",function(){
//     console.log("Document");
// },true);

// document.querySelector(".div1").addEventListener
// ("click",function(){
//     console.log("DIV 1");
// },true);

// document.querySelector(".div2").addEventListener
// ("click",function(e){
//     e.stopPropagation();//stopping propagation
//     console.log("DIV 2");
// },true);

// document.querySelector("button").addEventListener
// ("click",function(e){
//     console.log(e);
// },true);

// document.querySelector("button").addEventListener
// ("click",function(e){
//     console.log(e.target.innerText="clicked");
// },true);

//Event bubbling
// window.addEventListener("click",function(){
//     console.log("Window");
// },false);

// document.addEventListener("click",function(){
//     console.log("Document");
// },false);

// document.querySelector(".div1").addEventListener
// ("click",function(){
//     console.log("DIV 1");
// },false);

// // document.querySelector(".div2").addEventListener
// // ("click",function(e){
// //     e.stopPropagation(); //stopping propagation at this level
// //     console.log("DIV 2");
// // },false);

// document.querySelector(".div2").addEventListener
// ("click",function(e){
//     // e.stopPropagation(); //stopping propagation at this level
//     console.log("DIV 2");
// },{once:true});

// // document.querySelector("button").addEventListener
// // ("click",function(e){
// //     console.log(e.target.innerText="clicked");
// // },false);

// //anchor tag
// document.querySelector(".button").addEventListener
// ("click",function(e){
//     e.preventDefault();
//     console.log(e.target.innerText="clicked");
// },false);


// Event Delegation
//It allows users to append a single event listener
// to a parent element that adds it to all of its 
// present and future descendants that match a selector.

// document.querySelector("#football").addEventListener(
//     "click",function(e){
//         console.log("football is clicked");
//         const target=e.target;
//         if (target.matches("li")){
//             target.style.backgroundColor="lightgrey"
//         }
// })


// document.querySelector("#basketball").addEventListener(
//     "click",function(e){
//         console.log("basketball is clicked");
//         const target=e.target;
//         if (target.matches("li")){
//             target.style.backgroundColor="lightgrey"
//         }
// })


// document.querySelector("#boxing").addEventListener(
//     "click",function(e){
//         console.log("boxing is clicked");
//         const target=e.target;
//         if (target.matches("li")){
//             target.style.backgroundColor="lightgrey"
//         }
// })


// document.querySelector("#tennis").addEventListener(
//     "click",function(e){
//         console.log("tennis is clicked");
//         const target=e.target;
//         if (target.matches("li")){
//             target.style.backgroundColor="lightgrey"
//         }
// })


// document.querySelector("#golf").addEventListener(
//     "click",function(e){
//         console.log("golf is clicked");
//         const target=e.target;
//         if (target.matches("li")){
//             target.style.backgroundColor="lightgrey"
//         }
// })


document.querySelector("#sports").addEventListener(
    "click",function(e){
        console.log(e.target.getAttribute('id') +" is clicked");
        const target=e.target;
        if (target.matches("li")){
            target.style.backgroundColor="lightgrey"
        }
})

//testing event delegation by adding new attribute
const sports=document.querySelector("#sports");
const newsports=document.createElement("li");
newsports.innerText="Rugby";
newsports.setAttribute("id","rugby");
sports.appendChild(newsports);