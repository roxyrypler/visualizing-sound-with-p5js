

let song;
let sliderVolume;
let sliderRate;
let sliderPan;
let buttonOne;
let buttonTwo;

let fft;
let bandW;



function preload() {
    song = loadSound("Sounds/Maxo-Treeknot.mp3", loaded);
}

function setup() {
    createCanvas(400, 400);
    sliderVolume = createSlider(0, 1, 1, 0.01);
    sliderRate = createSlider(0, 3, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);
    colorMode(HSB);
    angleMode(DEGREES);
    
    fft = new p5.FFT(0.3, 256);
    //bandW = width / 64;
    
}

function loaded() {
    buttonOne = createButton("play");
    buttonTwo = createButton("stop");
    buttonOne.mousePressed(togglePlaying);
    buttonTwo.mousePressed(stopPlayback);
    console.log("Song Loaded");
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


function draw() {
    background(0);
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());
    let spectrum = fft.analyze();
    
    translate(width / 2, height / 2);
    beginShape();
    stroke(255);
    for (let i = 0; i < spectrum.length; i++) {
        let angle = map(i, 0, spectrum.length, 0, 360);
        let amp = spectrum[i];
        let r = map(amp, 0, 256, 20, 100);
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x, y);
        //let y = map(amp, 0 , 256, height, 0);
        //fill(i, 255, 255, 255);
        //rect(i * bandW, y, bandW, height - y);
    }
    endShape();

}





