// Pacman Ghost class
class Ghost {
  static speed = 1;
  constructor({ position, velocity, color }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 12;
    this.scared = false;
    this.color = color;
    this.prevCollisions = [];
    this.speed = 1;
  }

  draw() {
    this.#drawBlinky();
    this.#drawPinky();
    this.#drawInky();
    this.#drawClyde();
  }

  #drawImage(src) {
    const image = new Image();
    image.src = src;

    return image;
  }

  // blinky
  #drawBlinky() {
    if (this.color === "red") {
      if (this.velocity.y > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/blinky-down.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.y < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/blinky-up.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/blinky-right.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/blinky-right.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      }
    }
  }

  // pinky
  #drawPinky() {
    if (this.color === "pink") {
      if (this.velocity.y > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/pinky-down.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.y < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/pinky-up.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/pinky-right.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/pinky-left.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      }
    }
  }

  // inky
  #drawInky() {
    if (this.color === "cyan") {
      if (this.velocity.y > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/inky-down.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.y < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/inky-up.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/inky-right.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/inky-left.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      }
    }
  }

  // Clyde
  #drawClyde() {
    if (this.color === "orange") {
      if (this.velocity.y > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/clyde-down.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.y < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/clyde-up.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x > 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/clyde-right.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      } else if (this.velocity.x < 0) {
        context.drawImage(
          this.#drawImage(
            this.scared
              ? "../images/Ghosts/scared.png"
              : "../images/Ghosts/clyde-left.png"
          ),
          this.position.x - 14,
          this.position.y - 14,
          SIZE - 1,
          SIZE - 1
        );
      }
    }
  }

  update() {
    // Move ghost position on map stepout left
    if (
      this.position.x <= 0 &&
      this.position.y === 285 &&
      this.velocity.x < 0
    ) {
      this.position.x = 570;
    }

    // Move ghost position on map stepout right
    if (
      this.position.x >= 570 &&
      this.position.y === 285 &&
      this.velocity.x > 0
    ) {
      this.position.x = 0;
    }

    // when ghost hits a dead end
    // Left dead end in ghost layer
    if (
      this.position.y === 285 &&
      this.position.x === 255 &&
      this.velocity.x < 0
    ) {
      this.velocity.x = Math.abs(this.velocity.x);
    }

    // Right dead end in ghost layer
    if (
      this.position.y === 285 &&
      this.position.x === 315 &&
      this.velocity.x > 0
    ) {
      this.velocity.x = -this.velocity.x;
    }

    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
