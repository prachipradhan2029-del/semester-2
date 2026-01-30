// ========== taking input =========
const inputElem = document.querySelector('input');
const buttonElem = document.getElementById('search');
buttonElem.addEventListener("click",()=>{
    const location=inputElem.value.trim();
    console.log("loc",location);

    inputElem.value="";
})