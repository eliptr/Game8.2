var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');
var traybut = document.getElementById('traybut');
var huncon = document.getElementById('huncon');
var hunbar = document.getElementById('hunbar');

function onload() {
  document.addEventListener("deviceready", test, false);
}

document.addEventListener("pause", function () {
  localStorage.date = Date();
}, false);

document.addEventListener("resume", onResume, false);

function onResume() {
    test()
}

//variabels
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device
var b = true;
var height = 119.4;
var text;

// load images
var piece = new Image();
var floor = new Image();
var pad = new Image();
var tray = new Image();
var hotdog = new Image();
var hunger = new Image();

piece.src = "images/piece2.png";
floor.src = "images/floor.png";
pad.src = "images/pad.png";
tray.src = "images/tray.png";
hotdog.src = "images/hotdog.png";
hunger.src = "images/hunger.png";

function test() {
  // fixed canvas resolution
  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  fX = -10;
  fY = canvasMain.height - 393;
  paX = canvasMain.width / 2 - 353.5;
  paY = canvasMain.height - 888;
  pX = canvasMain.width / 2 - 166;
  pY = paY - 276;
  tX = canvasMain.width / 128.5714285714286;
  tY = canvasMain.height / 1.160479234943319;
  hX = canvasMain.width / 5.940594059405941;
  hY = canvasMain.height - 514;
  huX = canvasMain.width / 13.91752577319588;
  huY = 64.7;

  if (localStorage.date) {
    text = localStorage.date;
  } else {
    text = "Sorry bro";
  }
  draw()
}


function draw() {

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  traybut.style.bottom = 20 + "px";
  traybut.style.left = 3.5 + "px";

  huncon.style.left = 475 / 3.068669527896996 + "px";
  huncon.style.top = 27 + "px";

  ctx.drawImage(pad, paX, paY);
  ctx.drawImage(piece, pX, pY);
  ctx.drawImage(floor, fX, fY);
  ctx.drawImage(tray, tX, tY);
  ctx.drawImage(hotdog, hX, hY);
  ctx.drawImage(hunger, huX, huY);
  ctx.fillText(text, 10, 50);

  requestAnimationFrame(traychange, 10);
  requestAnimationFrame(draw, 10);
}

function traychange() {
  if (b === true) {
    tray.src = "images/tray.png";
    tY = canvasMain.height / 1.160479234943319;
    hY = canvasMain.height + 100;
  }
  if (b === false) {
    tray.src = "images/trays.png";
    tY = canvasMain.height / 1.160479234943319 - 64;
    hY = canvasMain.height - 514;
  }
}

function trach() {
  b = !b;
}
