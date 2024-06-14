let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
//when user wants to add but there is no task written
function Add(){
    if(inputs.value==""){
        alert("Please Enter Task")
    }
    else{//if there is task written, introduce a new elemt 
        let newEle = document.createElement("ul");// new variable newEle , ul?
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;//backtic``use,when we add some value use"$"dollar, icon link
        text.appendChild(newEle);//to add task to body page 
        inputs.value="";//to clear all value of inputs
        newEle.querySelector("i").addEventListener("click",remove);//select i=icon,addevent for click -remove it 
        function remove(){//remove function define
            newEle.remove();//remove
        }
    }
}