 import { calculateTotal } from "./utility/caculater.js";
 import { UserlocalStorageData } from "./utility/glabal.js";
 const spents = document.querySelector(".spents");
const form = document.querySelector("form");
const AddExpense = document.querySelector(".AddExpence ");
const AddExpenceNav= document.querySelector(".AddExpenceData");
const selectButton = document.querySelectorAll(".selectButton");
const exitIcons = document.querySelector(".exit-icons");
const UserName = document.querySelector(".UserName");
const incomeAmount = document.querySelector(".incomeAmount");
const goal = document.querySelector(".goal");
const actions = document.querySelector(".actions");
const resetButton = document.querySelector(".UserButtonsReset")
const input  = document.querySelectorAll("input")
const expenseContainer = document.querySelector(".Add_expense");
const ExpenseData = document.querySelector(".ExpenseData");
 let totalexpense = 0;
 let expenseData = []
  let optionData = ['Select', 'Select', 'Select', 'Select', 'Select'];



   
    /* User information function */
   function UserInformation(user) {
       const userData = UserlocalStorageData(user);

       if (userData.length > 0) {
           UserName.innerHTML = `Welcome ${userData[1]}`;
           incomeAmount.innerHTML = `£${userData[0]}.00`;
           goal.innerHTML = userData[2];
       }
       return userData[0];
   }
UserInformation();
   /* || shecking if there is a selection option in the local starage */
   if (localStorage.getItem("option")) optionData = JSON.parse(localStorage.getItem("option"));
    selectButton.forEach((selected, index) => {
         selected.innerHTML = optionData[index];

    })

 function count(){
   let amount = 25;
   let count = 0;
   /* || looping through the option button to check if it's selected */
   selectButton.forEach(option => {
      if (option.innerHTML === "Selected") {
        count +=  amount
     }
       ;
   });
   return count;
 }

   selectButton.forEach(option => {
     option.addEventListener("click", () => {
       option.innerHTML = option.innerHTML === "Selected" ? "Select" : "Selected";
       localStorage.removeItem("option");
       optionData = [];
       datas();
      selectButton.forEach(btn => {
       optionData.push(btn.innerHTML);
       localStorage.setItem("option", JSON.stringify(optionData));
     

     });
   });
   
})
/* || data display  */
  expenseData = localStorage.getItem("expenseData") ? JSON.parse(localStorage.getItem("expenseData")) :[]
function datas(){
       let datas = "";
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

    totalexpense +=  eval(data.amount);




  });
  
      let totalExpenseOption = totalexpense + count();
      spents.innerHTML = `£${totalExpenseOption}.00`;
      totalexpense=0;
      console.log(totalExpenseOption);
     ExpenseData.innerHTML = datas;

    }
    /* Array check if it's emty or not  */
   if(expenseData.length >= 1){
   datas();

   }
/* | delet expense function  */
function DeleteExpense(id) {
     let NewArray =[]
    expenseData.forEach((item , index) => {
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
     datas();
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
 function localStorageData( data ) {
    localStorage.setItem("expenseData", JSON.stringify(data));
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
 console.log(calculateTotal( UserInformation() , count ));