// Boundary class
class Boundary {
  static width = SIZE;
  static height = SIZE;
  constructor({ position, image }) {
    this.position = position;
    this.width = SIZE;
    this.height = SIZE;
    this.image = image;
  }

  draw() {
    context.drawImage(this.image, this.position.x, this.position.y, SIZE, SIZE);
    this.#drawGhostLayerExit();
  }

  // Draw the ghost layer door
  #drawGhostLayerExit() {
    const image = new Image();
    image.src = "../images/ghostLayerDoor.jpeg";

    map.forEach((row, i) => {
      row.forEach((sym, j) => {
        if (sym === "d") {
          context.drawImage(image, j * this.width, i * this.height, SIZE, SIZE);
        }
      });
    });
  }
}
