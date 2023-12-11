export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  //Array.from -> creates new array from
  //Array(20) -> array with length of 20
  // () => new Array(12).fill([0, clear]) -> array with length of 12 and its filled with values 0 and 'clear'
  // basicallu it creates a field 20 x 12 - every block in the field has description 0 and 'clear'
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

// Outcome for demonstration
// console.log(Array.from(Array(20), () => new Array(12).fill([0, "clear"])));

// Collison detection
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      // 1. check that we are on actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is insidde the game area height (y)
          // We should not go through the bottom of the play arena
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check if the cell we are moving to is not clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
