const myHeading = document.querySelector("h1"); 
const myButton = document.querySelector("button"); 

function setName() {
const myName = prompt("Select a new name"); 
localStorage.setItem("name", myName); 
myHeading.textContent = `Welcome, ${myName}`; 
}

if(!localStorage.getItem){
    setName();
} else {
    const name = localStorage.setItem("name"); 
    myHeading.textContent = name;
}

myButton.onclick(() => {
    setName();
})
