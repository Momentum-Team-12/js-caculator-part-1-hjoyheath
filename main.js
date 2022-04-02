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
    
    if (event.target.id !== "result") {
        result.innerText += event.target.id;
        console.log("event object", event.target.id);
    }

    if (event.target.id ==="clear"){
        result.innerText = "";
        console.log("event object", event.target.id);

    }

    if (event.target.id === "result"){
        let result = result(result.innerText)
        result.innerText = result
        
    }
            

        });
}