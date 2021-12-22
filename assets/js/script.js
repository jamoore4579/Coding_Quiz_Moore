// set the variable that will start counter
var startButton = document.querySelector("#start-btn");
var timeSecond = questions.length *15;


// create event listener for the click
startButton.addEventListener("click", function(){

    //timer within the function
    const counterEl = document.querySelector("#count");
    counterEl.innerHTML = `00:${timeSecond}`;
    const counter = setInterval (()=>{
        timeSecond--;
        counterEl.innerHTML = `00:${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(counter);
        }
    },1000)
});

