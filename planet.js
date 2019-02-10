function planet(c, d, r, s) {
    var colour = c;
    var distance = d;
    var radius = r;

    var angle = TWO_PI;
    var x = cos(0)
    var y = sin(0)
    var speed = s;

    var moons = [];

    this.addMoon = function() {
        var md = distance / random(8,6);
        var mr = radius / random(9,3);
        var ms = speed * random(1, 4);
        var moon = new planet(250, md+4, mr, ms*2);
        moons.push(moon);
    };

    this.addSmallMoon = function() {
        var md = distance / random(6,4);
        var mr = radius / random(9,3);
        var ms = speed * random(6, 14);
        var moon = new planet(250, md/2, mr, ms*2);
        moons.push(moon);
    };

    this.addMediumMoon = function() {
        var md = distance / random(8,6);
        var mr = radius / random(9,3);
        var ms = speed * random(1, 4);
        var moon = new planet(250, md+4, mr, ms);
        moons.push(moon);
    };

    this.update = function() {
        angle += speed;
    }

    this.show = function() {
        push();

        fill(colour);
        rotate(angle);
        translate(distance, 0);

        ellipse(0,0,radius,radius);

        for(var m = 0; m < moons.length; m++) {
            moons[m].update();
            moons[m].show();
        };

        pop();
    };

    this.showDetails = function() {
      var mouseDistance = dist(mouseX, mouseY, this.x, this.y)
      if (mouseDistance < d) {
        console.log("Inside")
      }
    }
};
