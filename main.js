const displayNumber = document.getElementById('demo');
const displayTemp = document.getElementById('hours-mins');
const rangeBar = document.getElementById('myRange');
const toggleBtn = document.getElementById('toggle-btn');
const onOffBtn = document.getElementById('onoff-btn');
const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');

let number = 0;
let hours = "hrs";
let minutes = "mins";
var clicked = false;

//Adding
addBtn.addEventListener('click', () => {
    number++;
    rangeBar.value = number;
    displayNumber.textContent = number.toFixed(2);
    
}); 

//Subtracting
subtractBtn.addEventListener('click', () => {
    if(number >= 1 )
    {
        number--;
    }
    else
    {
        number;
    }
    rangeBar.value = number;
    displayNumber.textContent = number.toFixed(2);
}); 

//Linking Range Bar
rangeBar.addEventListener('input', () => {
    number = rangeBar.value;
    displayNumber.textContent = number;
    rangeBar.value = number;
});


//Converting hours into minutes and forth

//Minutes
function expand(){
    displayTemp.textContent = minutes;
    number = number * 60;
    rangeBar.setAttribute('max', '600');
    rangeBar.value = number;
    displayNumber.textContent = number.toFixed(2);
    
}

//Hours
function contract(){
    displayTemp.textContent = hours;
    rangeBar.setAttribute('max', '10')
    number = number / 60;
    rangeBar.value = number;
    displayNumber.textContent = number.toFixed(2);
}


//Back and forth
toggleBtn.addEventListener('click', () =>{
    if(toggleBtn.checked)
    expand()
    else
    contract()
});

//On Off

//Setting up the buttons
addBtn.disabled = true;
subtractBtn.disabled = true;
rangeBar.disabled = true;
toggleBtn.disabled = true;


var state = 1;
var activate = false;

//Reset the device
function reset() {
    number = 0;
    displayNumber.textContent = number;
    rangeBar.value = number;
}


//Making the on and Off button work

function unlock() {
    addBtn.disabled = activate;
    subtractBtn.disabled = activate;
    rangeBar.disabled = activate;
    toggleBtn.disabled = activate;        
}

function lock() {
    addBtn.disabled = true;
    subtractBtn.disabled = true;
    rangeBar.disabled = true;
    toggleBtn.disabled = true;
}

function switchonoff() {
    if (state == 1) {
        document.getElementById('img').src = './imgs/blue-on.png';
        unlock();
        document.getElementById('mainwidget').style.boxShadow = "1px 1px 25px 1px #2196F3";
        state = 0;        
    } else {
        document.getElementById('img').src = './imgs/white-off.png';
        document.getElementById('mainwidget').style.boxShadow = "1px 1px 25px 1px rgba(255, 205, 205, 2)";
        lock();
        state = 1;
    }
}

onOffBtn.addEventListener('click', () =>{
    switchonoff();    
    reset();

})