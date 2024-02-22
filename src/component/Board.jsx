import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null))
    console.log("State", state)

    const [isXTurn, setIsXTurn] = useState(true)

    const handelClicked = (index) => {
        console.log("Clicked on index", index);
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState)
        setIsXTurn(!isXTurn)

    }

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]
            }
        }
        return false
    }

    const isWinner = checkWinner();

    const handelReset =()=>{
        setState(Array(9).fill(null));
    }
    return (
        <>


            <div className="board-container">
                {isWinner ? (
                    <>
                    <h1>{isWinner} won the game</h1>
                    <button onClick={handelReset}>Play Again</button>
                    </>
                    
                ) : (
                    <>
                        <div className="board-row">
                            <Square onClick={() => handelClicked(0)} value={state[0]} />
                            <Square onClick={() => handelClicked(1)} value={state[1]} />
                            <Square onClick={() => handelClicked(2)} value={state[2]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handelClicked(3)} value={state[3]} />
                            <Square onClick={() => handelClicked(4)} value={state[4]} />
                            <Square onClick={() => handelClicked(5)} value={state[5]} />
                        </div>
                        <div className="board-row">
                            <Square onClick={() => handelClicked(6)} value={state[6]} />
                            <Square onClick={() => handelClicked(7)} value={state[7]} />
                            <Square onClick={() => handelClicked(8)} value={state[8]} />
                        </div>
                    </>
                )}
            </div>

        </>
    )
}

export default Board