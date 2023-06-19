// player collision detection funtion
const circleCollidesWithWall = ({ circle, wall }) => {
  const padding = Boundary.width / 2 - circle.radius - 1;

  var topCollision =
    circle.position.y - circle.radius + circle.velocity.y <=
    wall.position.y + wall.height + padding;

  var rightCollision =
    circle.position.x + circle.radius + circle.velocity.x >=
    wall.position.x - padding;

  var bottomCollision =
    circle.position.y + circle.radius + circle.velocity.y >=
    wall.position.y - padding;

  var leftCollision =
    circle.position.x - circle.radius + circle.velocity.x <=
    wall.position.x + wall.width + padding;

  return topCollision && rightCollision && bottomCollision && leftCollision;
};

const circleCollidesWithCircle = ({ circle, pellet }) => {
  var distanceBetween = Math.hypot(
    pellet.position.x - circle.position.x,
    pellet.position.y - circle.position.y
  );
  var combinedRadius = pellet.radius + circle.radius;

  return distanceBetween < combinedRadius;
};

// prevent halt on collision with wall
const preventCollissionHalt = ({ movement }) => {
  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i];

    if (
      circleCollidesWithWall({
        circle: { ...player, velocity: { x: movement.x, y: movement.y } },
        wall: boundary,
      })
    ) {
      if (movement.dir === "up" || movement.dir === "down") {
        player.velocity.y = 0;
      } else if (movement.dir === "left" || movement.dir === "right") {
        player.velocity.x = 0;
      }
      break;
    } else {
      if (movement.dir === "up") {
        player.velocity.y = -3;
      } else if (movement.dir === "down") {
        player.velocity.y = 3;
      } else if (movement.dir === "left") {
        player.velocity.x = -3;
      } else if (movement.dir === "right") {
        player.velocity.x = 3;
      }
    }
  }
};
