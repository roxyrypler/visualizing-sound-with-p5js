

let song;
let sliderVolume;
let sliderRate;
let sliderPan;
let buttonOne;
let buttonTwo;

let amp;


function preload() {
    song = loadSound("Sounds/Blues_Infusion.mp3", loaded);
}

function setup() {
    createCanvas(400, 400);
    sliderVolume = createSlider(0, 1, 0.4, 0.01);
    sliderRate = createSlider(0, 3, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);
    
    amp = new p5.Amplitude();
}

function loaded() {
    buttonOne = createButton("play");
    buttonTwo = createButton("stop");
    buttonOne.mousePressed(togglePlaying);
    buttonTwo.mousePressed(stopPlayback);
    console.log("Song Loaded");
}

function draw() {
    background(0);
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());
    
    let vol = amp.getLevel();
    let diam = map(vol, 0, 1, 50, 400);
    
    fill(255, 0, 255);
    ellipse(width / 2, height / 2, diam, diam);
}



function togglePlaying() {
    if (!song.isPlaying()) {
        song.play(); 
        buttonOne.html("pause");
    }else {
        song.pause();
        buttonOne.html("play");
    }
}

function stopPlayback() {
    song.stop();
    buttonOne.html("play");
}


