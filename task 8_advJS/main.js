//currying by  bind

let mutiply = function (x,y) {
    console.log(x * y);
}
 let mutiplyByTwo= mutiply.bind(this,2); // x is set to 2 by passing thid argument
mutiplyByTwo(5)// 5 refers to the y 
let mutiplyByThree= mutiply.bind(this,3);// x is set to 2 by passing thid argument
mutiplyByThree(5)

let mutiplyBy= mutiply.bind(this,2,3);// x is set to 2 by passing thid argument
mutiplyBy(5) // ignores 5  

//currying by closures

let multiply = function (x){
    return function(y) {
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(3);




