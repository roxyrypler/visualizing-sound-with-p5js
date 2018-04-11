

let song;
let sliderVolume;
let sliderRate;
let sliderPan;
let buttonOne;
let buttonTwo;

let amp;
let volhistory = [];
let defultArrayValue = 0;


function preload() {
    song = loadSound("Sounds/Maxo-Treeknot.mp3", loaded);
}

function setup() {
    createCanvas(500, 500);
    sliderVolume = createSlider(0, 1, 1, 0.01);
    
    
    angleMode(DEGREES);
    amp = new p5.Amplitude();
    
    for (let j = 0; j < 360; j++) {
        volhistory.push(defultArrayValue);
    }
    
    
}

function loaded() {
    buttonOne = createButton("play");
    buttonTwo = createButton("stop");
    buttonOne.mousePressed(togglePlaying);
    buttonTwo.mousePressed(stopPlayback);
    console.log("Song Loaded");
     
}

function draw() {
    backgroundColors();
    song.setVolume(sliderVolume.value());
    
    circleOne();
    circleTwo();
    circleThree();
    circleFour();
    console.log(amp.volume);
}

function backgroundColors() {
    if (amp.volume > 0.35) {
            background(253, 121, 168);
            stroke(108, 92, 231);
            noFill();
        }else {
            background(108, 92, 231);
            stroke(253, 121, 168);
            noFill();
        }
}

function circleOne() {
    let vol = amp.getLevel();
    volhistory.push(vol);
    
    translate(width / 2, height / 2);
      beginShape();
      for (var i = 0; i < 360; i++) {
        var r = map(volhistory[i], 0, 1, 10, 400);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
      }
      endShape();
    
    if (volhistory.length > 360) {
        volhistory.splice(0, 1);
    }

}

function circleTwo() {
    let vol = amp.getLevel();
    volhistory.push(vol);
    
      beginShape();
      for (var i = 0; i < 360; i++) {
        var r = map(volhistory[i], 0, 1, 20, 400);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
      }
      endShape();
    
    if (volhistory.length > 360) {
        volhistory.splice(0, 1);
    }

}

function circleThree() {
    let vol = amp.getLevel();
    volhistory.push(vol);
    
      beginShape();
      for (var i = 0; i < 360; i++) {
        var r = map(volhistory[i], 0, 1, 30, 400);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
      }
      endShape();
    
    if (volhistory.length > 360) {
        volhistory.splice(0, 1);
    }

}

function circleFour() {
    let vol = amp.getLevel();
    volhistory.push(vol);
    
      beginShape();
      for (var i = 0; i < 360; i++) {
        var r = map(volhistory[i], 0, 1, 40, 400);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
      }
      endShape();
    
    if (volhistory.length > 360) {
        volhistory.splice(0, 1);
    }

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


