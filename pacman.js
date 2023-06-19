const canvas = document.querySelector("canvas");
const scoreCount = document.querySelector("#scoreCount");
const context = canvas.getContext("2d");
const endOfGame = document.querySelector(".gameOver");
const winGame = document.querySelector(".wonGame");

canvas.width = SIZE * map[0].length;
canvas.height = SIZE * map.length;
canvas.style.background = "black";

const pellets = [];
const boundaries = [];
const powerUps = [];

const ghosts = [
  new Ghost({
    // pinky
    position: {
      x: SIZE * 8 + SIZE / 2,
      y: SIZE * 9 + SIZE / 2,
    },
    velocity: {
      x: Ghost.speed,
      y: 0,
    },
    color: "pink",
  }),
  new Ghost({
    // blinky
    position: {
      x: SIZE * 9 + SIZE / 2,
      y: SIZE * 9 + SIZE / 2,
    },
    velocity: {
      x: 0,
      y: -Ghost.speed,
    },
    color: "red",
  }),
  new Ghost({
    // inky
    position: {
      x: SIZE * 10 + SIZE / 2,
      y: SIZE * 9 + SIZE / 2,
    },
    velocity: {
      x: -Ghost.speed,
      y: 0,
    },
    color: "cyan",
  }),
  new Ghost({
    // clyde
    position: {
      x: SIZE * 9 + SIZE / 2,
      y: SIZE * 8 + SIZE / 2,
    },
    velocity: {
      x: 0,
      y: -Ghost.speed,
    },
    color: "orange",
  }),
];

const player = new Player({
  position: {
    x: SIZE * 9 + SIZE / 2,
    y: SIZE * 11 + SIZE / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

// create image for boundary
const createImage = (src) => {
  const image = new Image();
  image.src = src;
  return image;
};

// map creation statement
map.forEach((row, i) => {
  row.forEach((sym, j) => {
    switch (sym) {
      case "_":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeHorizontal.png"),
          })
        );
        break;
      case "|":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeVertical.png"),
          })
        );
        break;
      case "b":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/block.png"),
          })
        );
        break;
      case "[":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/capLeft.png"),
          })
        );
        break;
      case "]":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/capRight.png"),
          })
        );
        break;
      case "n":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/capTop.png"),
          })
        );
        break;
      case "u":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/capBottom.png"),
          })
        );
        break;
      case "1":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner1.png"),
          })
        );
        break;
      case "2":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner2.png"),
          })
        );
        break;
      case "3":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner3.png"),
          })
        );
        break;
      case "4":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner4.png"),
          })
        );
        break;
      case "^":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeConnectorBottom.png"),
          })
        );
        break;
      case "<":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeConnectorRight.png"),
          })
        );
        break;
      case ">":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeConnectorLeft.png"),
          })
        );
        break;
      case "v":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeConnectorTop.png"),
          })
        );
        break;
      case "5":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner1.png"),
          })
        );
        break;
      case "6":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner2.png"),
          })
        );
        break;
      case "7":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner3.png"),
          })
        );
        break;
      case "8":
        boundaries.push(
          new Boundary({
            position: {
              x: j * SIZE,
              y: i * SIZE,
            },
            image: createImage("./images/pipeCorner4.png"),
          })
        );
        break;
      case ".":
        pellets.push(
          new Pellet({
            position: {
              x: SIZE * j + SIZE / 2,
              y: SIZE * i + SIZE / 2,
            },
          })
        );
        break;
      case "p":
        powerUps.push(
          new PowerUp({
            position: {
              x: SIZE * j + SIZE / 2,
              y: SIZE * i + SIZE / 2,
            },
          })
        );
        break;
      default:
    }
  });
});

let animationId;

const animate = () => {
  animationId = requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Player movement on key press
  if (keys.w.pressed && lastKey === "w") {
    preventCollissionHalt({
      movement: {
        x: 0,
        y: -3,
        dir: "up",
      },
    });
  } else if (keys.a.pressed && lastKey === "a") {
    preventCollissionHalt({
      movement: {
        x: -3,
        y: 0,
        dir: "left",
      },
    });
  } else if (keys.s.pressed && lastKey === "s") {
    preventCollissionHalt({
      movement: {
        x: 0,
        y: 3,
        dir: "down",
      },
    });
  } else if (keys.d.pressed && lastKey === "d") {
    preventCollissionHalt({
      movement: {
        x: 3,
        y: 0,
        dir: "right",
      },
    });
  }

  // pellets render loop
  for (let i = pellets.length - 1; i >= 0; --i) {
    const pellet = pellets[i];

    pellet.draw();

    if (circleCollidesWithCircle({ circle: player, pellet: pellet })) {
      const eaten = new Audio("./sounds/dot_eaten.wav");

      pellets.splice(i, 1);
      eaten.play();
      score += 10;
    }
  }

  // boundary collision detection
  boundaries.forEach((boundary) => {
    boundary.draw();

    if (circleCollidesWithWall({ circle: player, wall: boundary })) {
      player.velocity.y = 0;
      player.velocity.x = 0;
    }
  });

  player.update();

  // Power up render loop
  for (let i = powerUps.length - 1; i >= 0; i--) {
    const powerUp = powerUps[i];

    powerUp.draw();

    if (circleCollidesWithCircle({ circle: player, pellet: powerUp })) {
      const eaten = new Audio("./sounds/power_dot.wav");

      powerUps.splice(i, 1);
      eaten.play();
      score += 50;

      ghosts.forEach((ghost) => {
        ghost.scared = true;

        setTimeout(() => {
          ghost.scared = false;
        }, 5000);
      });
    }
  }

  // Ghots render loop
  for (let i = ghosts.length - 1; i >= 0; i--) {
    const ghost = ghosts[i];

    ghost.update();

    // Ghost collides with player
    if (circleCollidesWithCircle({ circle: player, pellet: ghost })) {
      if (ghost.scared) {
        const eaten = new Audio("./sounds/eat_ghost.wav");

        ghosts.splice(i, 1);
        eaten.play();
        score += 100;
      } else {
        const gameOver = new Audio("./sounds/gameOver.wav");
        cancelAnimationFrame(animationId);

        gameOver.play();
        endOfGame.style.display = "block";
      }
    }

    const collisions = [];

    // Ghosts and wall collision detection
    boundaries.forEach((boundary) => {
      if (
        !collisions.includes("right") &&
        circleCollidesWithWall({
          circle: { ...ghost, velocity: { x: ghost.speed, y: 0 } },
          wall: boundary,
        })
      ) {
        collisions.push("right");
      }

      if (
        !collisions.includes("left") &&
        circleCollidesWithWall({
          circle: { ...ghost, velocity: { x: -ghost.speed, y: 0 } },
          wall: boundary,
        })
      ) {
        collisions.push("left");
      }

      if (
        !collisions.includes("up") &&
        circleCollidesWithWall({
          circle: { ...ghost, velocity: { x: 0, y: -ghost.speed } },
          wall: boundary,
        })
      ) {
        collisions.push("up");
      }

      if (
        !collisions.includes("down") &&
        circleCollidesWithWall({
          circle: { ...ghost, velocity: { x: 0, y: ghost.speed } },
          wall: boundary,
        })
      ) {
        collisions.push("down");
      }
    });

    // add to previos collisions if new collision is detected
    if (collisions.length > ghost.prevCollisions.length) {
      ghost.prevCollisions = collisions;
    }

    // ghost movements setting
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      if (ghost.velocity.x > 0) ghost.prevCollisions.push("right");
      if (ghost.velocity.x < 0) ghost.prevCollisions.push("left");
      if (ghost.velocity.y < 0) ghost.prevCollisions.push("up");
      if (ghost.velocity.y > 0) ghost.prevCollisions.push("down");

      // add to pathways if new direction is detected
      const pathways = ghost.prevCollisions.filter((collision) => {
        return !collisions.includes(collision);
      });

      // random pathway set
      const direction = pathways[Math.floor(Math.random() * pathways.length)];

      // Ghost direction velocity set
      switch (direction) {
        case "down":
          ghost.velocity.y = ghost.speed;
          ghost.velocity.x = 0;
          break;
        case "up":
          ghost.velocity.y = -ghost.speed;
          ghost.velocity.x = 0;
          break;
        case "left":
          ghost.velocity.y = 0;
          ghost.velocity.x = -ghost.speed;
          break;
        case "right":
          ghost.velocity.y = 0;
          ghost.velocity.x = ghost.speed;
          break;
        default:
      }

      // empty previos collisions
      ghost.prevCollisions = [];
    }
  }

  // win condition
  if (powerUps.length === 0 && pellets.length === 0) {
    const winSound = new Audio("./sounds/gameWin.wav");
    cancelAnimationFrame(animationId);

    winSound.play();
    winGame.style.display = "block";
  }

  // player rotation functions
  if (player.velocity.x > 0) player.rotation = 0;
  else if (player.velocity.x < 0) player.rotation = Math.PI;
  else if (player.velocity.y < 0) player.rotation = -Math.PI / 2;
  else if (player.velocity.y > 0) player.rotation = Math.PI / 2;

  // Score update display
  scoreCount.innerHTML = score;
}; //End of animation loop

animate();

// on keypress down
addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;

    // left
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;

    // down
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;

    // right
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

// on key release
addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
});
