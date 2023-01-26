import { useEffect, useState } from "react";

import GameResult from "./GameResult";
import Start from "./Start";
import Cell from "./Cell";
import PointsBoard from "./pointsBoard";



function Board() {
    
    const [board, setBoard] = useState([0,1,2,3,4,5,6,7,8]);
    const [turn, setTurn] = useState("");
    const [firstTurn, setFirstTurn] = useState("");
    const [player_x, setPlayer_x] = useState("");
    const [player_x_points, setPlayer_x_points] = useState(0);
    const [draws, setDraws] = useState(0);
    const [player_o_points, setPlayer_o_points] = useState(0);
    const [player_o, setPlayer_o] = useState("");
    const [result, setResult] = useState("");
    const [sessionId, setSessionID] = useState("");
    const [gameState, setGameState] = useState("start");
    const [roundsCounter, setRoundsCounter] = useState(0);
    const [human, setHuman] = useState("");

    // Creates a Session on API
    const createSession = () => {
        fetch('http://alkindi.pythonanywhere.com/session',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                player_x: player_x,
                player_o: player_o,
                start: firstTurn
            })
        })
        .then(response => response.json())
        .then(response => {
                setBoard(response.game_board);
                setSessionID(response.id)
                setResult("");
                setTurn(response.next_turn);
                setGameState("game");
            })
        .catch(err => console.log(err))
    }

    // Set states to create new game
    const setNewGame = (chosen_difficulty, chosen_side) => {
        setFirstTurn(chosen_side);
        if (chosen_side === "x") {
            setPlayer_x("human");
            setPlayer_o(chosen_difficulty);
            if (chosen_difficulty != "human") {
                setHuman("x")
            } else {
                setHuman("")
            }
        } else {
            setPlayer_x(chosen_difficulty);
            setPlayer_o("human");
            if (chosen_difficulty != "human") {
                setHuman("o")
            } else {
                setHuman("")
            }
        }
        setRoundsCounter(roundsCounter+1)
    }
    // firstTurn state is only changed when new game is created
    // therefore it is used as an effect to run createSession()
    useEffect(() => {
        if (firstTurn) {createSession()}
    },[roundsCounter])


    // whenever a cell is clicked, run API to play
    const clickCell = (event) => {
        const cellID = parseInt(event.target.id[5]);

        if (human) {
            board[cellID]=human;
        } else {
            board[cellID]=turn;
        }
        

        fetch('http://alkindi.pythonanywhere.com/session/play',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: sessionId,
                cell: cellID,
            })
        })
            .then((response) => response.json())
            .then(response => {
                setBoard(response.board);
                if (response.result) {
                    setResult(response.result);
                    switch (response.result) {
                        case "x":
                            setPlayer_x_points(player_x_points+1);
                            break;
                        case "o":
                            setPlayer_o_points(player_o_points+1);
                            break;
                        default:
                            setDraws(draws+1);
                            break;
                    }

                    setGameState("end");
                }
            })
        
        if (turn === "x") {
            setTurn("o")
        } else {
            setTurn("x")
        }
        
    }

    const nextRound = () => {
        setBoard([0,1,2,3,4,5,6,7,8])
        if (firstTurn === "x") {
            setFirstTurn("o")
        } else {
            setFirstTurn("x")
        }
        setRoundsCounter(roundsCounter+1)
    }

    const Exit = () => {
        setBoard([0,1,2,3,4,5,6,7,8])
        setGameState("start")
        setPlayer_x_points(0)
        setPlayer_o_points(0)
        setDraws(0)
    }

    // show accurate popcard
    let popcard;
    switch (gameState) {
        case "start":
            popcard = <Start setNewGame={setNewGame} createSession={createSession} gameState={gameState} setGameState={setGameState}/>;
            break;
        case "side":
            popcard = <Start setNewGame={setNewGame} createSession={createSession} gameState={gameState} setGameState={setGameState}/>;
            break;
        case "end":
            popcard = <GameResult result={result} nextRound={nextRound} Exit={Exit}/>;
            break;
        default:
            popcard = "";
            break;
    }

    // loop through cells to display 9 cells
    let cells = []
    for (let i = 0; i < 9; i++) {
        cells.push(<Cell key={i} id={"cell_"+i} letter={board[i]} gameState={gameState} clickCell={clickCell}/>)
    }

    return (
        <>  
            <div className="flex flex-col gap-10 w-10/12 w-sm:6-12 md:w-5/12 xl:w-4/12 justify-center">
            <PointsBoard player_x_points={player_x_points} player_o_points={player_o_points} draws={draws}/>
            <div className="flex justify-center">
                {popcard}
                <div className="grid grid-cols-3 gap-3 aspect-square w-full auto-cols-fr auto-rows-fr">
                    {cells}
                </div>
            </div>
            </div>
        </>
    );
}

export default Board;