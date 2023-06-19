// Pacman player class
class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 12;
    this.radians = 0.75;
    this.openRate = 0.15;
    this.rotation = 0;
  }

  draw() {
    context.save();

    // Rotating pacman
    // # Translate to make sure we are rotation from the center of pacman and not origin
    context.translate(this.position.x, this.position.y);
    context.rotate(this.rotation);
    context.translate(-this.position.x, -this.position.y);

    context.beginPath();

    context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      this.radians,
      Math.PI * 2 - this.radians
    );
    context.lineTo(this.position.x, this.position.y);

    context.fillStyle = "yellow";
    context.fill();
    context.closePath();
    context.restore();
  }

  update() {
    // Move player position on map stepout left
    if (
      this.position.x <= 0 &&
      this.position.y === 285 &&
      this.velocity.x < 0
    ) {
      this.position.x = 570;
    }

    // Move player position on map stepout right
    if (
      this.position.x >= 570 &&
      this.position.y === 285 &&
      this.velocity.x > 0
    ) {
      this.position.x = 0;
    }
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.radians < 0 || this.radians > 0.75) {
      this.openRate = -this.openRate;
    }
    this.radians += this.openRate;
  }
}
