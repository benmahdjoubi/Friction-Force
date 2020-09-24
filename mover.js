class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }

  friction() {
    let diff = height - (this.pos.y + this.r);
    if (diff < 1) {
      // shorcut to friction!
      // this.vel.mult(0.95);

      // Direction of Friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // chained version
      // let friction = this.vel.copy().normalize().mult(-1);

      // Magnitude of Friction
      let normal = this.mass;
      friction.setMag(mu * normal);
      this.applyForce(friction);
    }
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -2;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -2;
    }
    else if (this.pos.x < width /2) {
      this.pos.x -= 2;
    }
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    if (this.pos.x >= width / 2) {
      this.pos.x += 4;
    }
    
    this.pos.y -= 4;
    if (this.pos.y === height / 2) {
      this.pos.y += 3;
    }
  }

  show() {
    stroke(10, 10, 100);
    strokeWeight(10);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 4);
  }
}