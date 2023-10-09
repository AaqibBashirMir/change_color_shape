let colors=["red","yellow","brown","pink","cyan","orange","green","purple","maroon","aqua","navy","bisque"];
var index=0;
var isTriangle=false;

let cColor=document.getElementById("change_color");
cColor.addEventListener("click",changeColor);
function changeColor(){

    if(index===colors.length){
        index=0;
    }
    let c=document.getElementById("circle");
    c.style.backgroundColor=colors[index];
    index++;

}
let cShape=document.getElementById("change_shape");
cShape.addEventListener('click',changeShape);
function changeShape() {
   if(!isTriangle){
    let i=document.getElementsByClassName("inner")[0];
    i.className="triangle";
    isTriangle=true;
    }
    else{
        let j=document.getElementsByClassName("triangle")[0];
        j.className="inner";
        isTriangle=false;

    }

}