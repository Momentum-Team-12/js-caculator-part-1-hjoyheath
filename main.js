const minus = document.querySelector('.oppminus');
const plus = document.querySelector('.oppadd');
const divide = document.querySelector('.oppdivide');
const multiply = document.querySelector('.oppmultiply');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clearbutton');


let buttons = document.querySelectorAll('.button')
    for (let button of buttons){
        button.addEventListener('click', function (event){
            console.log(event)
            console.log(event.target.innerText)
            event.target.innerText = "clicked"
        })
    }

    // calc functions
    clear.addEventListener('click',() => clearInput());

    // math
    minus.addEventListener('click',() => operation('-'));
    plus.addEventListener('click', () => operation('+'));
    multiply.addEventListener('click', () => operation('x'));
    divide.addEventListener('click', () => operation('/'));
    equals.addEventListener('click', () => handleOperation());

