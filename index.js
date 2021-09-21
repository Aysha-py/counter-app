let countEl = document.getElementById("count");



let counter = 0;

function increament(){
    counter +=1;

    countEl.innerText = counter;

}

function reset(){
    document.getElementById("reset");
    countEl.innerText = 0;
    counter = 0;
  
}

function save(){
    document.getElementById("save-btn");
    message=("Your count has been saved!");
    countEl.innerText= message;
  
}