import { StyledStartButton } from "./styles/StyledStartButton"

export default function StartButton({ callBack }){

    return(
        <StyledStartButton onClick={callBack}>Start Game</StyledStartButton>
    )
}