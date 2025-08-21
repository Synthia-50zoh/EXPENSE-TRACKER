 function localStorageData( data , key) {
    localStorage.setItem(key ="expenseData", JSON.stringify(data));
}
 export default localStorageData;