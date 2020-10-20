//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//grab the value for each button + event listener 
btns.forEach(function(btn){
 btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    //if the user click on decrease, it will decrease by one and turn red
    if(styles.contains('decrease')){
        count--;
        value.style.color ='red';
    }
    //if the user click on increase, it will increase by one and turn green
    else if(styles.contains('increase')){
        count++;
        value.style.color ='green';
    }
    //reset button
    else {
        count = 0;
    }
    //if the value turn 0, the color reset to black 
    if (count === 0){
        value.style.color ='black';
    }
    value.textContent = count;
 })
})