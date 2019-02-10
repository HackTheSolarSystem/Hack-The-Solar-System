var planets = [];
var stars = [];
var mercuryDia = 10;
var sunDiameter = 150;
var numStars = 1000;
var earthSpeed = 0.02 * -1;
let asteroids = [];

function setup() {
    createCanvas(window.innerWidth,window.innerHeight)
    createPlanets()
    createAsteroidBelt()

    for(var i = 0; i < numStars; i++) {
        this.stars.push(new star());
    };
}

function createAsteroidBelt() {
    for (var i = 0; i < 500; i++) {
        let asteroidBelt = new Astro({
            name: `Asteroid ${i+1}`,
            distance: random(250, 275),
            radius: random(1, 1.5),
            color: [255, 255, 255],
            period: random(-.01, .01)
        })
        asteroids.push(asteroidBelt)
    }
}

function createPlanets() {
  createSun();
  createMercury();
  createVenus();
  createEarth();
  createMars();
  createJupiter();
  createSaturn();
  createUranus();
  createNeptune();
}

function createSun() {
    var c = color(255,255,102);
    let sun = new planet(c, 0, sunDiameter, 0);
    this.planets.push(sun);
};

function createMercury() {
    let distance = 140
    let diameter = 20
    var c = color(128,128,128);
    let s = earthSpeed * (12 / 3);
    var mercury = new planet(c, distance, diameter, s);

    this.planets.push(mercury);
};

function createVenus() {
   let distance = 170
   let diameter = 25
    var c = color(255,179,102);
    let s = earthSpeed * (12 / 7);
    var venus = new planet(c, distance, diameter, s);

    this.planets.push(venus);
};

function createEarth() {
    let distance = 200
    let diameter = 30
    var c = color(102,179,255);
    let earth = new planet(c, distance, diameter, earthSpeed*2);
    earth.addMediumMoon();

    this.planets.push(earth);
}

function createMars() {
    let distance = 230
    let diameter = 16.25
    var c = color(255,102,102);
    let s = earthSpeed / 2;
    var mars = new planet(c, distance, diameter, s);
    mars.addMediumMoon();
    mars.addMediumMoon();
    this.planets.push(mars);
}

function createJupiter() {
    let distance = 320
    let diameter = 71.66
    var c = color(204,102,0);
    let s = earthSpeed / 12*3;
    var jupiter = new planet(c, distance, diameter, s);
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    this.planets.push(jupiter);
}

function createSaturn() {
    let distance = 370
    let diameter = 51
    var c = color(230, 255, 153);
    let s = earthSpeed / 30*3;
    var saturn = new planet(c, distance, diameter, s);
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    this.planets.push(saturn);
}

function createUranus() {
    let distance = 420
    let diameter = 38
    var c = color(0, 153, 204);
    let s = earthSpeed / 84*3;
    var uranus = new planet(c, distance, diameter, s);
    uranus.addSmallMoon();
    uranus.addSmallMoon();
    uranus.addSmallMoon();
    uranus.addSmallMoon();
    this.planets.push(uranus);
}

function createNeptune() {
    let distance = 470
    let diameter = 33.66
    var c = color(0, 51, 204);
    let s = earthSpeed / 165*3;
    var neptune = new planet(c, distance, diameter, s);
    neptune.addSmallMoon();
    neptune.addSmallMoon();
    neptune.addSmallMoon();
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


    asteroids.forEach(a => {
        a.show()
        a.orbit()
    })

}
