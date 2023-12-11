import { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

// Styled components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Custom hooks
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log("re-render");

  //* This function moves the player left and right
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    //reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if(!checkCollision(player, stage, {x: 0, y: 1})){
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else{
      // Game over
      if (player.pos.y < 1){
        console.log('Game over')
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPos({ x: 0, y: 0, collided: true})
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = (e) => {
    // console.log(e);
    const { keyCode } = e;
    if (!gameOver) {
      // left arrow
      if (keyCode === 37) {
        movePlayer(-1);
      }
      //right arrow
      else if (keyCode === 39) {
        movePlayer(1);
      }
      //down arrow
      else if (keyCode === 40) {
        dropPlayer();
      }
      else if (keyCode === 38){
        playerRotate(stage, 1)
      }
    }
  };

  return (
    // StyledTetrisWrapper = whole scree -> so the onKeyDown is working everywhere
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={move}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"} />
          ) : (
            <div>
              <Display text={"Score"} />
              <Display text={"Rows"} />
              <Display text={"Level"} />
            </div>
          )}
          <StartButton callBack={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
