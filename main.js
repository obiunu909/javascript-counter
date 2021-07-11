const counterVal = document.getElementById("counter-val");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
		
    var counter = 0;
increment.addEventListener("click", () => {
    if(counter <= 49){
    counter += 1;
    counterVal.innerHTML = counter;
    } 
});

decrement.addEventListener("click", () => {
    if(counter >= 1){
    counter -= 1;
    counterVal.innerHTML = counter;
    }
});
