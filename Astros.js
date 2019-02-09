class Astro {

    constructor({name, distance, radius, color, satellites, period}) {
        this.name = name
        this.distance = distance
        this.radius = radius
        this.color = color
        this.period = period

        this.angle = 0
        this.satellites = {
            instances: [],
            data: satellites
        }
    }

    spawnSatellites() {
        if (this.satellites.data != null) {
            this.satellites.data.forEach(s => {
                let satellite = new Astro(s)
                this.satellites.instances.push(satellite)
                satellite.show()
                satellite.spawnSatellites()
            })
        }
    }

    orbit() {
        this.angle += this.period
        this.satellites.instances.forEach(s => s.orbit())
    }

    show() {
        push() // Start new drawing state

        noStroke()
        fill(this.color)

        rotate(this.angle)
        translate(this.distance, 0)

        ellipse(0, 0, this.radius*2, this.radius*2)

        if (this.satellites.instances.length > 0) {
            this.satellites.instances.forEach(s => s.show())
        }

        pop() // Restore original drawing space
    }

}
