const inputBtn = document.getElementById("input-btn");
const inputEle = document.getElementById("input-el");
const ulEle = document.getElementById("ul-el");
let myLeads = ["www.awesomelead.com","www.epiclead.com", "www.greatlead.com"];
let listItems = "";

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEle.value);
    // console.log(myLeads);
})

for(let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
    // alternative
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEle.append(li);
}

ulEle.innerHTML = listItems;


// www.awesomelead.com
// www.epiclead.com
// www.greatlead.com
