let screen = document.getElementById(`screen`);
let screenValue = "";
button.addEventListener(`click` , (e) =>  {
    console.log(`ok`)
    value = e.target.innerText;
    if (value == 'AC'){
        screenValue = ''
        screen.value = screenValue
    }
    else if(value == 'x'){
        value = '*';
        screenValue += value;
        screen.value = screenValue;
    }
    else if(value == '='){
        screen.value = eval(screenValue);
    }
    else{
        screenValue += value;
        screen.value = screenValue;
    }
})