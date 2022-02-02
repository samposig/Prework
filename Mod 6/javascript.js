function growpicture(){
    document.getElementById("box").style.height = "250px";
}
function changeColor(){
    document.getElementById("box").style.background = "blue";
}
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "white";
})
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.background = "orange";
})
document.getElementById("button4").addEventListener("click", function (){
    document.getElementById("box").style.height = "150px";
})