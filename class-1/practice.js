// .....####>> Q1 <<<###.....//
// var x = 10;
// function outer(){
//     let x = 20;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();

// ......####>>> Q2 <<<<###...//
// function multiply(a,b){
//     console.log(a,b);
// }
// multiply(4,5);


// >> Q1>> Function Declaration

function BusinessRules(x){
  let Priceperitem = 500;
  if(x >= 10){
     Priceperitem = 90*Priceperitem/100;
  }
     Priceperitem = 82*Priceperitem/100;

     return Priceperitem;
}
console.log(BusinessRules(20));
