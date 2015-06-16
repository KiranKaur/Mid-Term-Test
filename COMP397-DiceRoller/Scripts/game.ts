/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="objects/button.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "plusButton", src: "assets/images/button1.jpg" },
    { id: "diceone", src: "assets/images/Dice1.png" },
    { id: "dicetwo", src: "assets/images/dice2.png" },
    { id: "dicethree", src: "assets/images/dice3.png" },
    { id: "dicefour", src: "assets/images/dice4.png" },
    { id: "dicefive", src: "assets/images/dice5.png" },
    { id: "dicesix", src: "assets/images/dice6.png" }, 
    { id: "clicked", src: "assets/audio/clicked.wav" }
];


// Game Variables

var label1: createjs.Text;
var label2: createjs.Text;

var plusButton: objects.Button;
// dice roller variables
var one: objects.Button;
var two: objects.Button;
var three: objects.Button;
var four: objects.Button;
var five: objects.Button;
var six: objects.Button;


// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps

    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '330px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    stage.update();

    stats.end(); // end measuring
}

// Callback function that allows me to respond to button click events
function pinkButtonClicked(event: createjs.MouseEvent) {
    createjs.Sound.play("clicked");
    // code to run the dices on click of button
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    console.log(dice1);
    console.log(dice2);
    if (dice1 == 1) {
        one = new objects.Button(assets.getResult("diceone"), 90, 185);
        stage.addChild(one);
        stage.removeChild(label1);
        label1 = new createjs.Text(dice1.toString(), "20px Consolas", "#000000");
        label1.regX = label1.getMeasuredWidth() * 0.5;
        label1.regY = label1.getMeasuredHeight() * 0.5;
        label1.x = 80;
        label1.y = 270;
        stage.addChild(label1);

    } if (dice1 == 2) {
        two = new objects.Button(assets.getResult("dicetwo"), 90, 185);
        stage.addChild(two);
        stage.removeChild(label1);
        label1 = new createjs.Text(dice1.toString(), "20px Consolas", "#000000");
        label1.regX = label1.getMeasuredWidth() * 0.5;
        label1.regY = label1.getMeasuredHeight() * 0.5;
        label1.x = 80;
        label1.y = 270;
        stage.addChild(label1);

    } if (dice1 == 3) {
        three = new objects.Button(assets.getResult("dicethree"), 90, 185);
        stage.addChild(three);
        stage.removeChild(label1);
        label1 = new createjs.Text(dice1.toString(), "20px Consolas", "#000000");
        label1.regX = label1.getMeasuredWidth() * 0.5;
        label1.regY = label1.getMeasuredHeight() * 0.5;
        label1.x = 80;
        label1.y = 270;
        stage.addChild(label1);

    } if (dice1 == 4) {
        four = new objects.Button(assets.getResult("dicefour"), 90, 185);
        stage.addChild(four);
        stage.removeChild(label1);
        label1 = new createjs.Text(dice1.toString(), "20px Consolas", "#000000");
        label1.regX = label1.getMeasuredWidth() * 0.5;
        label1.regY = label1.getMeasuredHeight() * 0.5;
        label1.x = 80;
        label1.y = 270;
        stage.addChild(label1);

    }
    if (dice1 == 5) {
        five = new objects.Button(assets.getResult("dicefive"), 90, 185);
        stage.addChild(five);
        stage.removeChild(label1);
        label1 = new createjs.Text(dice1.toString(), "20px Consolas", "#000000");
        label1.regX = label1.getMeasuredWidth() * 0.5;
        label1.regY = label1.getMeasuredHeight() * 0.5;
        label1.x = 80;
        label1.y = 270;
        stage.addChild(label1);

    } if (dice1 == 6) {
        six = new objects.Button(assets.getResult("dicesix"), 90, 185);
        stage.addChild(six);
        stage.removeChild(label1);
        label1 = new createjs.Text(dice1.toString(), "20px Consolas", "#000000");
        label1.regX = label1.getMeasuredWidth() * 0.5;
        label1.regY = label1.getMeasuredHeight() * 0.5;
        label1.x = 80;
        label1.y = 270;
        stage.addChild(label1);
    }

    if (dice2 == 1) {
        one = new objects.Button(assets.getResult("diceone"), 170, 185);
        stage.addChild(one);
        stage.removeChild(label2);
        label2 = new createjs.Text(dice2.toString(), "20px Consolas", "#000000");
        label2.regX = label1.getMeasuredWidth() * 0.5;
        label2.regY = label1.getMeasuredHeight() * 0.5;
        label2.x = 180;
        label2.y = 270;
        stage.addChild(label2);

    } if (dice2 == 2) {
        two = new objects.Button(assets.getResult("dicetwo"), 170, 185);
        stage.addChild(two);
        stage.removeChild(label2);
        label2 = new createjs.Text(dice2.toString(), "20px Consolas", "#000000");
        label2.regX = label1.getMeasuredWidth() * 0.5;
        label2.regY = label1.getMeasuredHeight() * 0.5;
        label2.x = 180;
        label2.y = 270;
        stage.addChild(label2);

    } if (dice2 == 3) {
        three = new objects.Button(assets.getResult("dicethree"), 170, 185);
        stage.addChild(three);
        stage.removeChild(label2);
        label2 = new createjs.Text(dice2.toString(), "20px Consolas", "#000000");
        label2.regX = label1.getMeasuredWidth() * 0.5;
        label2.regY = label1.getMeasuredHeight() * 0.5;
        label2.x = 180;
        label2.y = 270;
        stage.addChild(label2);

    } if (dice2 == 4) {
        four = new objects.Button(assets.getResult("dicefour"), 170, 185);
        stage.addChild(four);
        stage.removeChild(label2);
        label2 = new createjs.Text(dice2.toString(), "20px Consolas", "#000000");
        label2.regX = label1.getMeasuredWidth() * 0.5;
        label2.regY = label1.getMeasuredHeight() * 0.5;
        label2.x = 180;
        label2.y = 270;
        stage.addChild(label2);

    }
    if (dice2 == 5) {
        five = new objects.Button(assets.getResult("dicefive"), 170, 185);
        stage.addChild(five);
        stage.removeChild(label2);
        label2 = new createjs.Text(dice2.toString(), "20px Consolas", "#000000");
        label2.regX = label1.getMeasuredWidth() * 0.5;
        label2.regY = label1.getMeasuredHeight() * 0.5;
        label2.x = 180;
        label2.y = 270;
        stage.addChild(label2);

    } if (dice2 == 6) {
        six = new objects.Button(assets.getResult("dicesix"), 170, 185);
        stage.addChild(six);
        stage.removeChild(label2);
        label2 = new createjs.Text(dice2.toString(), "20px Consolas", "#000000");
        label2.regX = label1.getMeasuredWidth() * 0.5;
        label2.regY = label1.getMeasuredHeight() * 0.5;
        label2.x = 180;
        label2.y = 270;
        stage.addChild(label2);
    }

}

// Callback functions that change the alpha transparency of the button


// Our Main Game Function
function main() {
    console.log("Game is Running");

    plusButton = new objects.Button(assets.getResult("plusButton"), 160, 340);
    stage.addChild(plusButton);
    plusButton.on("click", pinkButtonClicked);

}