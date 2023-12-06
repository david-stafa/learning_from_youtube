import { StyledDisplay } from "./styles/StyledDisplay"

export default function Display({gameOver, text}){

    return(
        <StyledDisplay gameover={gameOver}>{text}</StyledDisplay>
    )
}