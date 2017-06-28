var stage = document.createElement("canvas");
stage.width = "200";
stage.height = "200";
stage.style.background = "rgba(0,0,0,.5)";
document.body.appendChild(stage);

var cnv = stage.getContext("2d");
var w = stage.width; 
var h = stage.height;
var r = 30;
var angle = 50;
var limitOpen = 500;
var colorPacMan = "yellow";
var opening = true;
var interval = 10;

function draw(){
cnv.fillStyle = "white";
cnv.strokeStyle = "blue";
cnv.lineWidth = 200;
cnv.arc(w/2, h/2, r, 0, Math.PI*2)
cnv.stroke();
cnv.fill();
  
ang = (Math.PI/180)*angle;  
cnv.beginPath();  
cnv.fillStyle = colorPacMan;
cnv.strokeStyle = colorPacMan;
cnv.lineWidth = 40;
cnv.arc(w/2, h/2, r-10, ang, -ang);
cnv.stroke();
  
}

function animate(){
  setInterval(function(){
  draw();
    if(opening)
      ++angle;
    else
      --angle;
    if(angle <= 1 || angle >= limitOpen)
      opening = angle <= 1 ? true : false;
  }, interval);
}

animate();
