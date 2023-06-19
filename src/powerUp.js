// pellet class
class PowerUp {
  constructor({ position }) {
    this.position = position;
    this.radius = 7;
  }

  draw() {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = "grey";
    context.fill();
    context.closePath();
  }
}
