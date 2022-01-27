'use strict';
const cvs=document.getElementById('canvas');
const ctx=cvs.getContext('2d');
cvs.height=window.innerHeight*0.9;
cvs.width=window.innerWidth*0.986;
function clearScreen(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
let painting=false;
function startPosition(e){
	painting=true;
	paint(e);
}
function endPosition(){
	painting=false;
	ctx.beginPath();
}
function paint(e){
	if(!painting) return;
	ctx.lineWidth=8;
	ctx.lineCap="round";

	ctx.lineTo(e.clientX-10,e.clientY-55);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(e.clientX-10,e.clientY-55);
}
document.addEventListener('mousedown',startPosition);
document.addEventListener('mouseup',endPosition);
document.addEventListener('mousemove',paint)