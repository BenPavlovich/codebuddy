const toDoItems = document.getElementsByClassName
    ("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function (event) { //allows user to click enter key to add item to list//
    if (event.key === "Enter")
        addItem();
})

function addItem() {
    const divParent = document.createElement("div"); //entire to do box//
    const divChild = document.createElement("div"); // box that holds the two icons on right(check and trash)//
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const starIcon = document.createElement("i"); //create priority button//
    divParent.className = 'item';
    divParent.innerHTML = '<div>' + input.value + '</div>'; // this is where the name of our todo list item will go //

    starIcon.className = "fa-solid fa-star";
    starIcon.style.color = "lightgray";
    starIcon.addEventListener("click", function () {
        starIcon.style.color = "gold"; //change priority button gold upon clicking// 
    })
    divChild.appendChild(starIcon);


    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function () {
        checkIcon.style.color = "limegreen";
        divParent.classList.add("remove");
        this.remove.innerHTML = "&cross";


    })
    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function () {
        divParent.remove();
    })
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);

    input.value = '';



}


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
  }