// not showing the numbered buttons only clear
// const numButtons = document.querySelectorAll('.button');
// console.log("array of buttons", numButtons);


const result = document.querySelector(".result");
console.log('show display', result);

const minus = document.getElementById('minus');
console.log("show minus", minus);
const plus = document.getElementById('plus');
console.log("show plus", plus);
const divide = document.getElementById('divide');
console.log("show divide", divide);
const multiply = document.getElementById('multiply');
console.log("show multiply", multiply);
const equals = document.getElementById('equals');
console.log("show equals", equals);
const clear = document.getElementById('clear');
console.log("show clear", clear);
const decimal = document.getElementById('decimal');
console.log("show decimal", decimal);


let buttons = document.querySelectorAll('.button')
    for (let button of buttons){
        button.addEventListener('click', function (event){
            console.log(event.target.innerText)
            
        });
}

//  // calc functions
//  clear.addEventListener('click',() => clearInput());

//  // // math
//  minus.addEventListener('click',() => operation('-'));
//  plus.addEventListener('click', () => operation('+'));
//  multiply.addEventListener('click', () => operation('x'));
//  divide.addEventListener('click', () => operation('/'));
//  equals.addEventListener('click', () => handleOperation());


    //     if (event.target.id !== "equals") {
    //         display.innerText += event.target.id;
    //         console.log("event object", event.target.id);
    //     }
    //     if (event.target.id === "clear"){
    //         display.innerText = "";
        
    //     }

    //     if (event.target.id === "equals"){
    //         let result = equals(display.innerText)
    //         display.innerText = result;
    //         console.log(result);
    //         console.log('equals clicked')        

