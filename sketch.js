var Player;
var fondo,cohete,meteorito;
function preload(){
fondo = loadImage("ESPACIO.jpg");
cohete = loadImage("OIP.jpg");
meteorito = loadImage("OIP1.jpg");
cohete2 = loadImage("descarga1.jpg");
}
function setup(){
createCanvas(windowWidth,windowHeight);
Player = createSprite(displayWidth/2,displayHeight/2,300,200);
Player.addImage("nave",cohete);
Player.scale = 0.3;


obstaculo = createSprite(50,50,700,400);
obstaculo.addImage("meteoro",meteorito);
obstaculo.scale = 0.3;

}
function draw(){
background(0);
if(keyWentDown("D")){
    Player.addImage(cohete2);
}
drawSprites();
}