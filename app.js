function getPin(){
    const pin = Math.ceil(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin()
    }
}

function generatePin(){
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('display-calc');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
    
})

// submit button & error
function pinMatch(){
    const pin = document.getElementById('display-pin').value;
    const number = document.getElementById('display-calc').value;
    const errorMassage = document.getElementById('error-massage');
    const successMassage = document.getElementById('success-massage');
    if(pin == number){
        successMassage.style.display = 'block'
        errorMassage.style.display = 'none';
    }
    else{
        errorMassage.style.display = 'block';
        successMassage.style.display = 'none';
    }
}