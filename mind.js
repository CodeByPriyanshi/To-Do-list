let inputbox=document.getElementById("input");
let listCon=document.getElementById("list-container");
let addbtn=document.getElementById("addtask");
addbtn.addEventListener("click",function(){
    if(inputbox ===""){
        alert("You must write somthing!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listCon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="Delete";
        li.appendChild(span);
    }
    inputbox.value="";
    saveData();
})
listCon.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("data",listCon.innerHTML);
}
function showtask(){
    listCon.innerHTML=localStorage.getItem("data");
}
showtask();