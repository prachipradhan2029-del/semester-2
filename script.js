// **********Listening for input*********
const grandparent= document.querySelector("#Grandparent")
const parent= document.querySelector("#parent")
const child = document.querySelector("#child")
const log = document.querySelector(".Event")
function updateLog(Message){
    const newli =document.createElement('li')
    newli.textContent=Message
    log.appendChild(newli)
}
// bussiness logic
// CAPTURING PHASE:
grandparent.addEventListener('click', () => updateLog('Grandparent--Capturing'), true);
parent.addEventListener('click',  () => updateLog('Parent--Capturing'),      true);

// Target Phase
child.addEventListener("click",(e)=>{
    updateLog("Child -- Handler 1(stopPropagation)");e.stopPropagation();
});
child.addEventListener("click",(e)=>{
    updateLog("Child -- Handler 2(stopImmediatePropagation)");e.stopImmediatePropagation();
});
child.addEventListener("click",(e)=>{
    updateLog("Child -- Handler 3(will not run)");
});
// child.addEventListener('click',  () => updateLog('Child: Capturing'),       true);


// child.addEventListener('click',  () => updateLog('Child: Bubbling'));
parent.addEventListener('click',  () => updateLog('Parent--Bubbling'));
grandparent.addEventListener('click', () => updateLog('Grandparent--Bubbling'));

//
