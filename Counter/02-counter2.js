const value = document.getElementById('value');
const increaseBtn = document.querySelector('.increase');
const resetBtn = document.querySelector('.reset');
const decreaseBtn = document.querySelector('.decrease');


let count = 0;

increaseBtn.addEventListener('click', () => {
    count ++;
    value.innerText = count;
    colorChange();
})


decreaseBtn.addEventListener('click', () => {
    count --;
    value.innerText = count;
    colorChange();
})


resetBtn.addEventListener('click', () => {
    count = 0;
    value.innerText = 0;
    colorChange();
});


function colorChange(){
    if(count > 0)
    {
        value.style.color = 'green';
    } 
    else if (count < 0)
    {
        value.style.color = 'red';
    }
    else if (count == 0)
    {
        value.style.color = 'black';
    }
}


