let sun
let asteroids = []

function generateAsteroidBelt() {
    let n = 500
    for (var i = 0; i < n; i++) {
        let a = new Astro({
            name: `Asteroid ${i+1}`,
            distance: random(175, 200),
            radius: random(1, 1.5),
            color: [255, 255, 255],
            period: random(-.01, .01)
        })
        asteroids.push(a)
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    sun = new Astro(data.sun)
    sun.spawnSatellites()
    generateAsteroidBelt()
}

function draw() {
    background(0)
    translate(width/2, height/2)
    sun.show()
    sun.orbit()

    asteroids.forEach(a => {
        a.show()
        a.orbit()
    })
}
