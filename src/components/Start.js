import { useState } from "react";

import PopCard from "./PopCard";
import ChooseDifficulty from "./ChooseDifficulty";
import ChooseSide from "./ChooseSide";

function Start({ setNewGame, gameState, setGameState, createSession }) {

    const [difficulty, setDifficulty] = useState("");
    
    let display;
    switch (gameState) {
        case "start":
            display = <ChooseDifficulty setDifficulty={setDifficulty} setGameState={setGameState}/>
            break;
        case "side":
            display = <ChooseSide difficulty={difficulty} setNewGame={setNewGame} createSession={createSession}/>
            break;
        default:
            break;
    }

    return (
        <PopCard>
            {display}
        </PopCard>
    );
}

export default Start;