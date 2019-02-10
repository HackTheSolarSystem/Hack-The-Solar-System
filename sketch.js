var planets = [];
var stars = [];
var mercuryDia = 10;
var sunDiameter = 300;
var numStars = 1000;
var earthSpeed = 0.02 * -1;

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    createSun();
    createMercury();
    createVenus();
    createEarth();
    createMars();
    createJupiter();
    createSaturn();
    createUranus();
    createNeptune();

    for(var i = 0; i < numStars; i++) {
        this.stars.push(new star());
    };
}

function createSun() {
    var c = color(255,255,102);
    let sun = new planet(c, 0, sunDiameter, 0);
    this.planets.push(sun);
};

function createMercury() {
    let mercuryDiameter = mercuryDia
    var c = color(128,128,128);
    let s = earthSpeed * (12 / 3);
    var mercury = new planet(c, 60, 40/2, s);

    this.planets.push(mercury);
};

function createVenus() {
   let venusDiameter = mercuryDia*2.48
    var c = color(255,179,102);
    let s = earthSpeed * (12 / 7);
    var venus = new planet(c, 90, 100/2, s);

    this.planets.push(venus);
};

function createEarth() {
  let earthDiameter = mercuryDia*2.62
    var c = color(102,179,255);
    let earth = new planet(c, 110, 120/2, earthSpeed);
    earth.addMoon();

    this.planets.push(earth);
}

function createMars() {
  let marsDiameter = mercuryDia*1.39
    var c = color(255,102,102);
    let s = earthSpeed / 2;
    var mars = new planet(c, 130, 65/2, s);
    mars.addMoon();
    mars.addMoon();
    this.planets.push(mars);
}

function createJupiter() {
  let jupiterDiameter = mercuryDia*29.27
    var c = color(204,102,0);
    let s = earthSpeed / 12;
    var jupiter = new planet(c, 160, 230/2, s);

    this.planets.push(jupiter);
}

function createSaturn() {
  let saturnDiameter = mercuryDia*27.73
    var c = color(230, 255, 153);
    let s = earthSpeed / 30;
    var saturn = new planet(c, 190, 200/2, s);

    this.planets.push(saturn);
}

function createUranus() {
  let uranusDiameter = mercuryDia*10.48;
    var c = color(0, 153, 204);
    let s = earthSpeed / 84;
    var uranus = new planet(c, 210, 180/2, s);

    this.planets.push(uranus);
}

function createNeptune() {
  let neptuneDiameter = mercuryDia*10.15;
    var c = color(0, 51, 204);
    let s = earthSpeed / 165;
    var neptune = new planet(c, 240, 202/2, s);

    this.planets.push(neptune);
}

function draw() {
    background(52);
    translate(width/2, height/2);

    for(var i = 0; i < stars.length; i++) {
        this.stars[i].update();
        this.stars[i].show();
    };

    for(var i = 0; i < planets.length; i++) {
        this.planets[i].update();
        this.planets[i].show();
    };

}
