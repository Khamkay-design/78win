import { useMemo, useState } from 'react';

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function TicTacToe({ user, onBack }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const isDraw = useMemo(() => board.every(Boolean) && !winner, [board, winner]);

  const checkWinner = (nextBoard) => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (nextBoard[a] && nextBoard[a] === nextBoard[b] && nextBoard[a] === nextBoard[c]) {
        return nextBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const nextBoard = [...board];
    nextBoard[index] = turn;
    const nextWinner = checkWinner(nextBoard);

    setBoard(nextBoard);
    setWinner(nextWinner);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setTurn('X');
  };

  const statusText = winner
    ? `Winner: ${winner}`
    : isDraw
      ? 'Draw game!'
      : `Current turn: ${turn}`;

  return (
    <div className="section-wrap game-page">
      <div className="panel game-header">
        <div>
          <p className="eyebrow">Game Room</p>
          <h2>Tic-Tac-Toe</h2>
        </div>
        <div className="header-actions">
          <button className="ghost-btn" onClick={onBack}>Back to Lobby</button>
          <button className="secondary-btn" onClick={resetBoard}>Reset</button>
        </div>
      </div>

      <div className="game-layout">
        <div className="panel game-panel">
          <div className="board" role="grid">
            {board.map((cell, index) => (
              <button
                key={index}
                className="cell"
                onClick={() => handleClick(index)}
                aria-label={`Cell ${index + 1}`}
              >
                {cell}
              </button>
            ))}
          </div>
        </div>

        <aside className="panel side-panel">
          <h3>{user.name}</h3>
          <p className="muted">Match status</p>
          <div className="status-box">{statusText}</div>
          <ul className="rules-list">
            <li>First to connect 3 wins</li>
            <li>Alternate turns between X and O</li>
            <li>Use smart placement to block your rival</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default TicTacToe;
