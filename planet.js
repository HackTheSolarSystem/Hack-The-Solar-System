function planet(c, d, r, s, n) {
    var colour = c;
    var distance = d;
    var radius = r;
    var name = n;
    var angle = TWO_PI;
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

    this.getName = function() {
      return name;
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
};
