import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css'
import './index.css'

const TicToe = () => {

    const [turn, setTurn] = useState('X');

    const [board, setBoard] = useState(Array(9).fill(''));

    const handleClick = (index) => {
        if (board[index] === '') {
            const newBoard = [...board];
            newBoard[index] = turn;
            setBoard(newBoard);
            checkWinner(newBoard);
            setTurn(turn === 'X' ? 'O' : 'X');
        }
    };

    const checkWinner = (board) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of winConditions) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                Swal.fire({
                    title: `${board[a]} Wins!`,
                    text: 'Congratulations!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                return;
            }
        }

        if (board.every(cell => cell !== '')) {
            Swal.fire({
                title: 'It\'s a Draw!',
                text: 'No more moves left.',
                icon: 'info',
                confirmButtonText: 'OK'
            });
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setTurn('X');
    };

    return (
        <div className="container-fluid pt-5 pb-5">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://img.freepik.com/free-vector/hands-holding-pencils-play-tic-tac-toe-people-drawing-crosses-noughts-simple-game-children-flat-vector-illustration-strategy-concept-banner-website-design-landing-web-page_74855-24786.jpg?uid=R158472509&ga=GA1.1.1326292532.1723205622" alt="Tic Tac Toe" />
                    </div>
                    <div className="col-md-6 text-center align-content-center">
                        <p className="title p-2">Tic-tac-toe</p>
                        <div className="board">
                            {board.map((cell, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className={`tic-tak-toe ${cell === 'X' ? 'x-color' : 'o-color'}`}
                                    value={cell}
                                    onClick={() => handleClick(index)}
                                    readOnly={cell !== ''}
                                />
                            ))}
                        </div>
                        <br />
                        <button className="reset-butn p-2 ps-5 pe-5 border-0 fw-bolder" onClick={resetGame}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicToe;