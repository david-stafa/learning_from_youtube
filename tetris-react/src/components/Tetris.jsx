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
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

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
    setDropTime(1000);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // Increase level when player cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // Increase speed
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over
      if (player.pos.y < 1) {
        console.log("Game over");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        console.log("intervall on");
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  const dropPlayer = () => {
    console.log("intervall off");
    setDropTime(null);
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
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    // StyledTetrisWrapper = whole screen -> so the onKeyDown is working everywhere
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={move}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text={"Game Over"} />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callBack={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
}
