//function declaration

//1) Using arguments
// function greet(a){
//     console.log("hello",arguments);
// }
// greet(1,2,3,4,"ABC",true,11);

// function noOfArg(){
//     console.log(arguments.length);
// }
// noOfArg();
// // 2)  using Rest operator

// function findArg(...a){
//     console.log("hello",a);

// }
// findArg(1,2);

//......practice

// function business(a){
//     let x=500;
//     let realprice=a*x;
//     // console.log(realprice);
//     if(a>=10){
//         realprice=realprice*90/100
//     }
//     let tax = 18*realprice/100
//     console.log(tax);
// }
// business(5);


// This keyword

// const x={
//     name: "Ash ketchan",
//     role: "Js developer",
//     exp:30,
//     show: function(){
//         console.log("hi I am ",this.number)
    
// }

// nested function

// function outer(){
//     console.log("outer called")
//     function inner(){
//         console.log("innercalled")
//     }
//     inner();
// }
// outer();


// q1)...

var x=10;
function outer(){
    let x=20;
    function inner(){
        console.log(x);
    }
    inner();
}
outer();