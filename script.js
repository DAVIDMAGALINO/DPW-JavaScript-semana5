let title = document.getElementById("title");
console.log(title);

let mainDiv = document.querySelector(".main-div");
console.log(mainDiv);

let listItems = document.querySelectorAll("ul.list > li");
console.log(listItems);

title.innerText = "Desarrollo de Aplicaciones Web Semana 5";
title.innerHTML = "<em>Desarrollo de Aplicaciones Web Semana 5</em>"

let image = document.querySelector("img"); 
image.setAttribute("src", "naranja.jpg");
image.classList.add("img-fluid");
mainDiv.style.backgroundColor = "lightblue";

let oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);

let newDiv = document.createElement("div");
newDiv.innerText = "Soy nuevo div";
document.body.appendChild(newDiv);

let button = document.querySelector("button");
button.addEventListener("click", function() {
    alert("Botón presionado");
});

function showmessage(message) {
    alert("message");
}

button.addEventListener ("click", showmessage.bind (null, "Aqui mensaje")
);

let input = document.querySelector("#itemInput");
let addbutton = document.querySelector("#addItemButton");
let list = document.querySelector("#dynamicList");

addbutton.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        let newItem = document.createElement("li");
        newItem.innerText = input.value;
        list.appendChild(newItem);
        input.value = "";
    }
});

const filterInput = document.querySelector("#filterInput");
const itemsList = document.querySelector(".list");

filterInput.addEventListener("keyup", function() {
    const filterValue = filterInput.value.toLowerCase();
    const items = itemsList.getElementByTagName("li");

    Array.from(items).forEach(function(item) {
        if (item.textContent.toLowerCase().indexOf(filterValue) !== -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";            
        }
    });
});
