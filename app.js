let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEle = document.getElementById("input-el");
const ulEle = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    })
})

function renderLeads(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'> 
                ${leads[i]}
            </a>
        </li>`
    }
    ulEle.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    // ulEle.innerHTML = ''; --> trigger renderLeads() instead.
    renderLeads(myLeads);
})

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEle.value);
    inputEle.value = '';
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads(myLeads);
})




// alternative
// const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEle.append(li);