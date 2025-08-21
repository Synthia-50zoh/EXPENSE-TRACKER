const form = document.querySelector("form");
const AddExpense = document.querySelector(".AddExpence ");
const AddExpenceNav= document.querySelector(".AddExpenceData");
const exitIcons = document.querySelector(".exit-icons");
const actions = document.querySelector(".actions");
const resetButton = document.querySelector(".UserButtonsReset")
const input  = document.querySelectorAll("input")
const expenseContainer = document.querySelector(".Add_expense");
const ExpenseData = document.querySelector(".ExpenseData");
 let expenseData = [];

 /* || data display  */
function datas(){
    let datas = "";
  expenseData = localStorage.getItem("expenseData") ? JSON.parse(localStorage.getItem("expenseData")) :[]
  expenseData.map((data) => {
    datas +=`  
    <div class ="dataContainer" onclick="ClickExpense(${expenseData.indexOf(data)})"> 
     <div class="Date" id="${expenseData.indexOf(data)}" data-id="${expenseData.indexOf(data)}">
      <div class="dataInfo">
        <img src="/src/icons/food.png" alt="" data-id="${expenseData.indexOf(data)+1}">
        <div >
          <h1>${data.name}</h1>
          <p>Date: ${data.date}</p>
        </div>
      
    </div>
      <div class="amount">${data.amount}$</div>
      </div class ="dataContainer">
        <div class="actions" id ="actions${expenseData.indexOf(data)}">
        <div class="edit" onclick="EditExpense(${expenseData.indexOf(data)})"> Edit </div>
         <div class="delete" onclick="DeleteExpense(${expenseData.indexOf(data)})"> Delete</div>
         </div>

      </div>`
  
  });
     ExpenseData.innerHTML = datas;

    }
    /* Array check if it's emty or not  */
   if(expenseData.length >= 1){
   datas();

   }
/* | delet expense function  */
function DeleteExpense(id) {
     let NewArray =[]
    expenseData.forEach((item) => {
        if (expenseData.indexOf(item) !== id) {
            NewArray.push(item)
        }
    });
    expenseData = NewArray;
    localStorageData(expenseData)
    datas();
}
window.DeleteExpense = DeleteExpense

/* || reset expenses function */
 resetButton.addEventListener("click", () => {
    localStorage.removeItem("expenseData");
 if(expenseData.length >=1){
    ExpenseData.innerHTML = ` <p class="budget">Your data have been <span class="expens">Reset.</span></p>
     ` } 
     else{
   alert("No data to reset, please add some data first." )
     }
      expenseData = [];
});

/* || call to action to diplay the container of the edit and delete buttom */
function ClickExpense(id){
document.querySelector(`#actions${id}`).classList.toggle("activeflex");

}
window.ClickExpense = ClickExpense;
/* || editing expenses function */
function EditExpense(id){
    const data = expenseData[id];
    input[0].value = data.name;
    input[1].value = data.amount;
    input[2].value = data.date;
    expenseContainer.classList.add("active");
    DeleteExpense(id);
}
window.EditExpense = EditExpense;
 /* || form submision of user expenses */
form.addEventListener("submit", (e) => {
    e.preventDefault();
     expenseContainer.classList.remove("active");
     let objects = {
            name: input[0].value,
            amount: input[1].value,
            date:   input[2].value,
        };
          input[0].value = "";
          input[1].value = "";
          input[2].value = "";
          expenseData.push(objects);
        localStorageData(expenseData);
        datas();
      
});

 function localStorageData( data , key) {
    localStorage.setItem(key ="expenseData", JSON.stringify(data));
}
/* ||Add expenses using the navbar  */
AddExpenceNav.addEventListener("click" , (callBack))

/* Add expense button */
AddExpense.addEventListener("click", (callBack) )

/* Exit icons */
exitIcons.addEventListener("click", (callBack))
   
function callBack(){
     console.log("clicked")
      expenseContainer.classList.toggle("active");
}
