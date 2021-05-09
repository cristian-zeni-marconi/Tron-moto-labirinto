var canvas = document.getElementById("tron");
var contex = canvas.getContext("2d");

function drawMoto(){
    contex.beginPath();
    contex.rect(10, 10, 10, 10);
    contex.fillStyle = "blue";
    contex.fill();
    contex.closePath();
}

function draw(){
    contex.clearRect(0, 0, canvas.width, canvas.height);
    drawMoto();
}

draw();