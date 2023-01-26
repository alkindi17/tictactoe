import PopCard from "./PopCard";

function GameResult({result, nextRound, Exit}) {

    let resultMessage

    if (result) {
        if (result === "draw") {
            resultMessage = result.toUpperCase()
        } else {
            resultMessage = result.toUpperCase() + " is the winner"
        }
        return (
            <PopCard>
                <h1 className="text-xl font-bold ">{resultMessage}</h1>
                <h3 className="text-sm">Let's play again</h3>
                <div className="flex flex-col mt-7 gap-3">
                <button className="bg-blue-300 px-4 py-2 drop-shadow-lg rounded-md hover:bg-blue-400 active:bg-blue-500" onClick={nextRound}>Play Again</button>
                <button className="bg-red-600 px-4 py-2 drop-shadow-lg text-white rounded-md hover:bg-red-700 active:bg-red-800" onClick={Exit}>Exit</button>
                </div>
            </PopCard>
        );
    }

    
}

export default GameResult;