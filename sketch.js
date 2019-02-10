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
    let mercuryDiameter = mercuryDia
    var c = color(128,128,128);
    let s = earthSpeed * (12 / 3);
    var mercury = new planet(c, 140, 40/2, s);

    this.planets.push(mercury);
};

function createVenus() {
   let venusDiameter = mercuryDia*2.48
    var c = color(255,179,102);
    let s = earthSpeed * (12 / 7);
    var venus = new planet(c, 170, 100/4, s);

    this.planets.push(venus);
};

function createEarth() {
  let earthDiameter = mercuryDia*2.62
    var c = color(102,179,255);
    let earth = new planet(c, 200, 120/4, earthSpeed*2);
    earth.addMoon();

    this.planets.push(earth);
}

function createMars() {
    let marsDiameter = mercuryDia*1.39
    var c = color(255,102,102);
    let s = earthSpeed / 2;
    var mars = new planet(c, 230, 65/4, s);
    mars.addMoon();
    mars.addMoon();
    this.planets.push(mars);
}

function createJupiter() {
  let jupiterDiameter = mercuryDia*29.27

    var c = color(204,102,0);
    let s = earthSpeed / 12*3;
    var jupiter = new planet(c, 320, 230/6, s);
    let txt="lssdjfljsdlf"
    this.planets.push(jupiter);
}

function createSaturn() {
  let saturnDiameter = mercuryDia*27.73
    var c = color(230, 255, 153);
    let s = earthSpeed / 30*3;
    var saturn = new planet(c, 370, 200/6, s);

    this.planets.push(saturn);
}

function createUranus() {
  let uranusDiameter = mercuryDia*10.48;
    var c = color(0, 153, 204);
    let s = earthSpeed / 84*3;
    var uranus = new planet(c, 420, 180/6, s);

    this.planets.push(uranus);
}

function createNeptune() {
  let neptuneDiameter = mercuryDia*10.15;
    var c = color(0, 51, 204);
    let s = earthSpeed / 165*3;
    var neptune = new planet(c, 470, 202/6, s);

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


// mercury
// 57.9 million km        200
// venus
// 108.2 million km       230
// earth
// 149.6 million km       260
// mars
// 227.9 million km       330
// jupiter
// 778.3 million km       410
// saturn
// 1,427.0 million km     490
// uranus
// 2,871.0 million km     580
// neptune
// 4,497.1 million km     700
//
