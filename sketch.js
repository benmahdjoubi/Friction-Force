// This is my modified version from The Coding Train by Daniel Shiffman

let movers = [];
let mu = 0.1;

function setup() {
  createCanvas(400, 400);

  // Create 5 movers
  for (let i = 0; i < 5; i++) {
    movers[i] = new Mover(random(width), 200, random(1, 8));
  }
}

function draw() {
  background(20, 50, 100);

  for (let mover of movers) {
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover.applyForce(wind);
    }
    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover.mass);
    mover.applyForce(weight);
    mover.friction();
    mover.update();
    mover.edges();
    mover.show();
  }
}