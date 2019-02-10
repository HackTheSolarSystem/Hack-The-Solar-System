var planets = [];
var stars = [];
var mercuryDia = 10;
var sunDiameter = 150;
var numStars = 1000;
var marsDistance = 230;
var jupiterDistance = 320;
var mercuryDistance=140;
var venusDistance= 170;
var earthDistance=200;
var uranusDistance=420
var neptuneDistance=470
var saturnDistance=370
var mercurySpeed =  (0.02 * -1) * (12 / 8);
var venousSpeed = (0.02 * -1) * (12 / 7);
var earthSpeed = (0.02 * -1)
var marsSpeed = (0.02 * -1)/2
var jupiterSpeed = (0.02 * -1) / (12*3);
var saturnSpeed = (0.02 * -1) / 30*3;
var uranusSpeed = (0.02 * -1) / 84*3;
var neptuneSpeed = (0.02 * -1) / 165*3;

var mercuryMass = .330
var venusMass = 4.87
var earthMass = 5.97
var marsMass = 0.073
var jupiterMass = .642
var saturnMass = 568
var uranusMass = 86.8
var neputuneMass = 102

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
    let diameter = 20
    var c = color(128,128,128);
    let s = mercurySpeed
    var mercury = new planet(c, mercuryDistance, diameter, s, "Mercury");

    this.planets.push(mercury);
};

function createVenus() {

   let diameter = 25
    var c = color(255,179,102);
    let s = venousSpeed
    var venus = new planet(c, venusDistance, diameter, s, "Venus");

    this.planets.push(venus);
};

function createEarth() {
    let diameter = 30
    var c = color(102,179,255);
    let earth = new planet(c, earthDistance, diameter, earthSpeed, "Earth");
    earth.addMediumMoon();

    this.planets.push(earth);
}

function createMars() {
    let diameter = 16.25
    var c = color(255,102,102);
    let s = marsSpeed
    var mars = new planet(c, marsDistance, diameter, s, "Mars");
    mars.addMediumMoon();
    mars.addMediumMoon();
    this.planets.push(mars);
}

function createJupiter() {
    let diameter = 71.66
    var c = color(204,102,0);
    let s = jupiterSpeed;
    var jupiter = new planet(c,jupiterDistance, diameter, s, "Jupiter");
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    jupiter.addMoon();
    this.planets.push(jupiter);
}

function createSaturn() {
    let diameter = 51
    var c = color(230, 255, 153);
    let s = saturnSpeed
    var saturn = new planet(c, saturnDistance, diameter, s, "Saturn");
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    saturn.addSmallMoon();
    this.planets.push(saturn);
}

function createUranus() {
    let diameter = 38
    var c = color(0, 153, 204);
    let s = uranusSpeed;
    var uranus = new planet(c, uranusDistance, diameter, s, "Uranus");
    uranus.addSmallMoon();
    uranus.addSmallMoon();
    uranus.addSmallMoon();
    uranus.addSmallMoon();
    this.planets.push(uranus);
}

function createNeptune() {

    let diameter = 33.66
    var c = color(0, 51, 204);
    let s = neptuneSpeed;
    var neptune = new planet(c, neptuneDistance, diameter, s, "Neptune");
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

function switchStatement(givenValue){

}


document.addEventListener("DOMContentLoaded", function(event) {
      let planetsSelect = document.getElementById('planets')
      let mass = document.getElementById('mass')
      let distance = document.getElementById('distance')

      let submitButton = document.getElementById('mass-form')
      //function to take in planet selected for mass change
      document.getElementById('planets').addEventListener("change",function(e) {
          switch(e.target.value){
            case "Earth":
                distance.value = earthDistance
                mass.value = earthMass
              break;
            case "Mercury":
              distance.value = mercuryDistance
              mass.value = mercuryMass
              break;
            case "Venus":
              distance.value = venusDistance
              mass.value = venusMass
              break;
            case "Mars":
              distance.value = marsDistance
              mass.value = marsMass
              break;
            case "Neptune":
                distance.value = neptuneDistance
                mass.value = neptuneMass
              break;
            case "Jupiter":
              distance.value = jupiterDistance
              mass.value = jupiterMass
              break;
            case "Uranus":
              distance.value = uranusDistance
              mass.value = uranusMass
              break;
            case "Saturn":
              distance.value = saturnDistance
              mass.value = saturnMass
              break;
            default:
              distance.value = 0
              break;
          }



      })
      function submitMassForm(e){
          e.preventDefault()
          let planetValues = planetsSelect.value
          let planetMass = mass.value
          let planetDist = distance.value

          if(planetMass > 1000 || planetMass < 0){
            alert("Please enter a Mass between 0 and 1000")
            document.getElementById('mass').value = ""

          }else if(planetValues === "Select Planet"){
            alert("Please select a planet")
          }else if(planetDist < 0 || planetDist > 500){
            alert("Please enter a distance between 0 and 500")
          }else{
          let planetName = planetValues
          switch(planetName){
            case "Earth":
                console.log(planetName)
              break;
            case "Mercury":
              console.log(planetName)
              break;
            case "Venus":
              console.log(planetName)
              break;
            case "Mars":
              console.log(planetName)
              break;
            case "Neptune":
              console.log(planetName)
              break;
            case "Jupiter":
              console.log(planetName)
              break;
            case "Uranus":
              console.log(planetName)
              break;
            case "Saturn":
              console.log(planetName)
              break;
            default:
              console.log("Default")
              break;
          }
        }
      }



      function submitDistanceForm(){
          console.log(e.target.value)
      }

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
