( function main(){
    try {
        var calculator = document.querySelector(".calculator-container");
                                         
        var input = document.querySelector(".input-area");
        input.value = 0;
        //make a variable called result to keep track of the value
        var result = 0;
        var n1 , n2 , operation;

        calculator.addEventListener('click' , function handleClick(event) {
            //make sure that the clicked element is a button 

            if(event.target.tagName === 'BUTTON') {

            

            //if reset button was clicked return the input value to 0 and the result value to 0
            if(event.target.classList.value.split(" ")[1] === "btn-reset"){
                        input.value = 0;
                        result = 0;
                        n1 =0;
                        n2=0;
                        operation = '';
                    }

            //if the equal button was clicked just return the result value
            else if(event.target.classList.value.split(" ")[1] === "btn-equal"){
                n2 = Number(input.value);

                switch(operation){
                    case '+':
                        result = add(n1,n2);
                    break;
                    case '-':
                        result = minus(n1,n2);
                    break;
                    case '*':
                        result = multiply(n1,n2);
                    break;
                    case '/':
                        result = divide(n1 , n2);
                }


               
                
                input.value = result;
            }
              

            //if the add button was clicked just add the new value to the result 
            else if(event.target.classList.value.split(" ")[1] === "btn-add"){
                n1 = Number(input.value);
                input.value = 0;
                operation = '+';

            }

            //if the divide button was clicked just divide the new value at the result 
            else if(event.target.classList.value.split(" ")[1] === "btn-divide"){
                
                n1 = Number(input.value);
                input.value = 0;
                operation = '/';
            }

            //if the multiply button was clicked just multiply the new value by the result 
            else if(event.target.classList.value.split(" ")[1] === "btn-multiply"){
                
                n1 = Number(input.value);
                input.value = 0;
                operation = '*';            
            }

            //if the minus button 
            else if(event.target.classList.value.split(" ")[1] === "btn-minus"){
                
                n1 = Number(input.value);
                input.value = 0;
                operation = '-';
            }

            //if any other button just keep it's value in the input area
            else {
                if(input.value == 0){
                    input.value = event.target.innerText;
                }
                else {
                input.value += event.target.innerText;
                }
                
            }

            
            }
            
        }
    )
    } catch (e) {
        console.log(e);
    }
})()

function add(n1 , n2){
    return n1 + n2;
}

function multiply(n1 ,n2){
   return n1 * n2;
}

function divide(n1 , n2){
    return n1 / n2 ;
}

function minus(n1 , n2){
    return n1 - n2;
}

























   // if(event.target.tagName === 'BUTTON') {
            //     if(event.target.classList.value.split(" ")[1] === "btn-equal"){
            //         console.log( parseInt(input.value, 10))
            //         input.value =  parseInt(input.value , 10)  ;
            //     } else{
            //         input.value += parseInt(event.target.innerText , 10);
            //     }

            // }