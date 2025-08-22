const input = document.querySelectorAll("input");
const form = document.querySelector("form"); 

let userData = [];

form.addEventListener("submit", (events) => {
    Userdata();
});

function Userdata() {
    userData = []; // Clear before pushing
    input.forEach((inputField) => {
        userData.push(inputField.value);
    });
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);
    return userData;
}

export function UserlocalStorageData() {
    return JSON.parse(localStorage.getItem("userData")) || [];
}

 console.log(UserlocalStorageData());
if (
  UserlocalStorageData().length > 0 &&
  !window.location.pathname.endsWith("budget.html")
) {
    window.location.href = "budget.html";
}