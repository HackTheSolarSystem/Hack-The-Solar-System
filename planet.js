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
        var moon = new planet(250, md+4, mr, ms*2, '');
        moons.push(moon);
    };

    this.addSmallMoon = function() {
        var md = distance / random(6,4);
        var mr = radius / random(9,3);
        var ms = speed * random(6, 14);
        var moon = new planet(250, md/2, mr, ms*2, '');
        moons.push(moon);
    };

    this.addMediumMoon = function() {
        var md = distance / random(8,6);
        var mr = radius / random(9,3);
        var ms = speed * random(1, 4);
        var moon = new planet(250, md+4, mr, ms, '');
        moons.push(moon);

    };

    this.update = function() {
        angle += speed;
    }

    this.getName = () => name;

    this.show = function() {
        push();

        fill(colour);
        rotate(angle);
        translate(distance, 0);


        ellipse(0,0,radius,radius);
        textLeading(20);
        if (name === "Sun") {
          fill(0)
          textSize(24);
          text(name, -20, 5);
        } else if (name === "Jupiter") {
          fill(255)
          text(name, -25, -40);
        } else if (name === "Saturn") {
          fill(255)
          text(name, -25, -35);
        } else if (name === "Mars") {
          fill(255)
          text(name, -15, -20);
        } else if (name === "Mercury") {
          fill(255)
          text(name, -25, -25);
        } else if (name === "Earth") {
          fill(255)
          text(name, -20, -25);
        } else if (name === "Venus") {
          fill(255)
          text(name, -25, -25);
        } else if (name === "Uranus") {
          fill(255)
          text(name, -25, -25);
        } else if (name === "Neptune") {
          fill(255);
          text(name, -25, -25);
        }


        for(var m = 0; m < moons.length; m++) {
            moons[m].update();
            moons[m].show();
        };



        pop();
    };


};
