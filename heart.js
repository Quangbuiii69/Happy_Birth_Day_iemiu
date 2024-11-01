class Heart {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(2, 5));
    this.alpha = 255;
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= 5;
  }

  done() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(255, 0, 150, this.alpha);
    beginShape();
    vertex(this.pos.x, this.pos.y);
    bezierVertex(
      this.pos.x - 10, this.pos.y - 10,
      this.pos.x - 20, this.pos.y + 10,
      this.pos.x, this.pos.y + 20
    );
    bezierVertex(
      this.pos.x + 20, this.pos.y + 10,
      this.pos.x + 10, this.pos.y - 10,
      this.pos.x, this.pos.y
    );
    endShape(CLOSE);
  }
}
