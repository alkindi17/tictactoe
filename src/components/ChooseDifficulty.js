import { DifficultyButtons } from './DifficultyButtons';

function ChooseDifficulty({setDifficulty, setGameState}) {

    return (
        <>
            <h1 className="text-xl font-bold">TIC-TAC-TOE</h1>
            <h3>Let's Start</h3>
            <DifficultyButtons setDifficulty={setDifficulty} setGameState={setGameState}  />
        </>
    );
    

    
}

export default ChooseDifficulty;