var result = document.querySelector("#result");

function calculate(m){
    result.value += m.innerHTML;             //putting values in result variable(or screen) 
}

function allClear(){
    result.value ="";            //result value will be empty
}

function deleteBtn(){
    result.value = result.value.slice(0,-1);     // remove items from index 0 to -1
}

function algebra(){
    alert("Work in progress.........")
}

function calculateBtn(n){
    result.value = eval(result.value);
}

