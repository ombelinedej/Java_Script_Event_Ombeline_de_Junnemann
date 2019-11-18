//_______________________________Fonctionnalité 1 :_______________________________


let FooterClick = document.getElementsByTagName("footer")[0];

FooterClick.addEventListener("click",function(){
console.log("clique");}
);



//_____________________________Fonctionnalité 1-bis :______________________________

let FClick = document.getElementsByTagName("footer")[0];
let count = 0;

FClick.addEventListener("click",function(){
  count ++;
  console.log("clic numéro " + count);}
);


// ___________________________Fonctionnalité 2:___________________________


let HamburgerMenu = document.getElementsByClassName("navbar-toggler")[0];

HamburgerMenu.addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");}
);


// ___________________________Fonctionnalité 3:___________________________


let EditClick = document.getElementsByClassName("card-text")[0];
let onEditClick = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

onEditClick.addEventListener("click", function(){
  EditClick.style.color = "red" ;}
);


// ___________________________Fonctionnalité 4:___________________________


let EditClick2 = document.getElementsByClassName("card-text")[1];
let onEditClick2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

onEditClick2.addEventListener("click", function(){
  if (EditClick2.style.color === "green"){
    EditClick2.style.color = "black" ;
  } else {
     EditClick2.style.color = "green" ;
  }
}
);


// ___________________________Fonctionnalité 5:___________________________


let navbar = document.getElementsByTagName("header")[0];
let link = document.getElementsByTagName("link")[0];
let body = document.getElementsByTagName("body")[0];

navbar.addEventListener("dblclick",function(){
  link.disabled = true;}
);

body.addEventListener("click",function(){
  link.disabled = false;}
);



