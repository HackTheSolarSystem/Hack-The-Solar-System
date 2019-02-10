function planetNames(name) {
  this.update = function () {
    angle += speed;
  }

  this.show = function () {
    push();
    fill(0);
    text(name)
    rotate(angle);
    translate(distance, 0);
    ellipse(0,0,radius,radius);
    pop();
  }

}
