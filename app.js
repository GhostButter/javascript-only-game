var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d"); 
canvas.width=window.innerWidth;	
canvas.height=window.innerHeight;
canvas.style.width = canvas.width+"px";
canvas.style.height = canvas.height+"px"
document.body.appendChild(canvas)
var bgReady = false
var bgImage =document.createElement("img")
bgImage.onload=function () {
	bgReady = true;
}; 
bgImage.src= "https://raw.github.com/lostdecade/simple_canvas_game/master/images/background.png"

var heroReady = false
var heroImage =document.createElement("img")
heroImage.onload=function () {
	heroReady = true;
}; 
heroImage.src="https://raw.github.com/lostdecade/simple_canvas_game/master/images/hero.png"

var monsterReady = false
var monsterImage =document.createElement("img")
monsterImage.onload=function () {
	monsterReady = true;
}; 
monsterImage.src="https://raw.github.com/lostdecade/simple_canvas_game/master/images/monster.png"

function render(){
	 if (bgReady) {
	 	ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
	 }
	 if (heroReady) {
	 	ctx.drawImage(heroImage, hero.x, hero.y);
	 }
	 if (monsterReady) {
	 	ctx.drawImage(monsterImage,monster.x monster.y);
	 }
}

var then = Date.now();
function main(){
	var now = Date.now();
	var delta = then - now;
	update(delta/1000);
	render();
	then = now
}

setInterval(main,1)
function reset(){
	hero.x=canvas.width/2;
	hero.y=canvas.height/2;
	monster.x=32+(Math.random()*canvas.width -64);
	monster.y=32+(Math.random()*canvas.height -64);

}