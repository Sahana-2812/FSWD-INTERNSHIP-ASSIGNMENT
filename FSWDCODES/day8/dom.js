/*
DOM - Document Object Model

documnet->
html->
body->
h1->
p

1.access elemnets
2.change content
3.change styles
4.creates new element
5.remove

*/
let heading = document.getElementById("title");
console.log(heading);
let paragraph=document.getElementsByClassName("desc");
console.log(paragraph);

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
