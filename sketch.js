var planets = [];
var stars = [];
var sunDiameter = 200;
var scalePlanets = 3;
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
    let mercuryDiameter = sunDiameter*.0035
    var c = color(128,128,128);
    let s = earthSpeed * (12 / 3);
    var mercury = new planet(c, 60, mercuryDiameter*scalePlanets, s);

    this.planets.push(mercury);
};

function createVenus() {
   let venusDiameter = sunDiameter*0.0087
    var c = color(255,179,102);
    let s = earthSpeed * (12 / 7);
    var venus = new planet(c, 90, venusDiameter*scalePlanets, s);

    this.planets.push(venus);
};

function createEarth() {
  let earthDiameter = sunDiameter*.0092
    var c = color(102,179,255);
    let earth = new planet(c, 110, earthDiameter*scalePlanets, earthSpeed);
    earth.addMoon();

    this.planets.push(earth);
}

function createMars() {
  let marsDiameter = sunDiameter*.005
    var c = color(255,102,102);
    let s = earthSpeed / 2;
    var mars = new planet(c, 130, marsDiameter*scalePlanets, s);
    mars.addMoon();
    mars.addMoon();
    this.planets.push(mars);
}

function createJupiter() {
  let jupiterDiameter = sunDiameter*.103;
    var c = color(204,102,0);
    let s = earthSpeed / 12;
    var jupiter = new planet(c, 160, jupiterDiameter*scalePlanets, s);

    this.planets.push(jupiter);
}

function createSaturn() {
  let saturnDiameter = sunDiameter*0.087
    var c = color(230, 255, 153);
    let s = earthSpeed / 30;
    var saturn = new planet(c, 190, saturnDiameter*scalePlanets, s);

    this.planets.push(saturn);
}

function createUranus() {
  let uranusDiameter = sunDiameter*0.036;
    var c = color(0, 153, 204);
    let s = earthSpeed / 84;
    var uranus = new planet(c, 210, uranusDiameter*scalePlanets, s);

    this.planets.push(uranus);
}

function createNeptune() {
  let neptuneDiameter = sunDiameter*0.035;
    var c = color(0, 51, 204);
    let s = earthSpeed / 165;
    var neptune = new planet(c, 240, neptuneDiameter*scalePlanets, s);

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
