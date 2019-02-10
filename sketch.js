var planets = [];
var stars = [];
var mercuryDia = 10;
var sunDiameter = 150;
var numStars = 1000;
var mercurySpeed =  (0.02 * -1) * (12 / 8);
var venousSpeed = (0.02 * -1) * (12 / 7);
var earthSpeed = (0.02 * -1)
var marsSpeed = (0.02 * -1)/2
var jupiterSpeed = (0.02 * -1) / (12*3);
var saturnSpeed = (0.02 * -1) / 30*3;
var uranusSpeed = (0.02 * -1) / 84*3;
var neptuneSpeed = (0.02 * -1) / 165*3;
let asteroids = [];
let ee = document.getElementById("distance")
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
    let s = mercurySpeed
    var mercury = new planet(c, distance, diameter, s, "Mercury");

    this.planets.push(mercury);
};

function createVenus() {
   let distance = 170
   let diameter = 25
    var c = color(255,179,102);
    let s = venousSpeed
    var venus = new planet(c, distance, diameter, s, "Venus");

    this.planets.push(venus);
};

function createEarth() {
    let distance = 200
    let diameter = 30
    var c = color(102,179,255);
    let earth = new planet(c, distance, diameter, earthSpeed, "Earth");
    earth.addMediumMoon();

    this.planets.push(earth);
}

function createMars() {
    let distance = 230
    let diameter = 16.25
    var c = color(255,102,102);
    let s = marsSpeed
    var mars = new planet(c, distance, diameter, s, "Mars");
    mars.addMediumMoon();
    mars.addMediumMoon();
    this.planets.push(mars);
}

function createJupiter() {
    let distance = 320
    let diameter = 71.66
    var c = color(204,102,0);
    let s = jupiterSpeed;
    var jupiter = new planet(c, distance, diameter, s, "Jupiter");
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
    let s = saturnSpeed
    var saturn = new planet(c, distance, diameter, s, "Saturn");
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
    let s = uranusSpeed;
    var uranus = new planet(c, distance, diameter, s, "Uranus");
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
    let s = neptuneSpeed;
    var neptune = new planet(c, distance, diameter, s, "Neptune");
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


document.addEventListener("DOMContentLoaded", function(event) {
      let planetsSelect = document.getElementById('planets')
      let mass = document.getElementById('mass')
      let distance = document.getElementById('distance')

      let submitButton = document.getElementById('mass-form')
      //function to take in planet selected for mass change
      function planetForm(e){
          // console.log(e.target.value)

      }
      //mass change form
      function massForm(e){
          // console.log(e.target.value)

      }
      function distanceForm(e){
          // console.log(e.target.value)

      }

      function submitMassForm(e){
          e.preventDefault()
          let planetValues = planetsSelect.value
          let planetMass = mass.value

          let planetDist = distance.value
          if(planetMass > 1000){
            alert("The mass must be under 1000")
            document.getElementById('mass').value = ""
          }

          // debugger
          console.log(planetMass,planet,planetDist)
      }



      function submitDistanceForm(){
          console.log(e.target.value)
      }

      // planetsSelect.addEventListener('change',planetForm)
      // mass.addEventListener('change',massForm)
      // distance.addEventListener('change',distanceForm)
      submitButton.addEventListener('submit',submitMassForm)
})

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
