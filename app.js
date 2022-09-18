// variables declaration
let myLeads = [];

// target elements
const inputBtn = document.getElementById("input-btn");
const inputEle = document.getElementById("input-el");
const ulEle = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// render existing leads
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

// save the current tab url
tabBtn.addEventListener("click", function() {
    // Using Chrome API
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // tabs format - [{url: ".."}]
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    })
})

// render leads on screen
function renderLeads(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        // add an li element
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'> 
                ${leads[i]}
            </a>
        </li>`
    }
    ulEle.innerHTML = listItems;
}

// delete existing leads from screen and local storage
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    // ulEle.innerHTML = ''; --> trigger renderLeads() instead.
    renderLeads(myLeads);
})

// save manual inputs & render them 
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