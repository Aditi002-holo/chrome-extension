const inputBtn = document.getElementById("input-btn");
const inputEle = document.getElementById("input-el");
const ulEle = document.getElementById("ul-el");
let myLeads = [];


inputBtn.addEventListener("click",function() {
    myLeads.push(inputEle.value);
    inputEle.value = '';
    renderLeads();

})

function renderLeads() {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEle.innerHTML = listItems;
}


// alternative
// const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEle.append(li);