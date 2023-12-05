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
