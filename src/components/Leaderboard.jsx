import { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];

const getWinner = (playerChoice, aiChoice) => {
  if (playerChoice === aiChoice) return 'draw';
  if (
    (playerChoice === 'Rock' && aiChoice === 'Scissors') ||
    (playerChoice === 'Paper' && aiChoice === 'Rock') ||
    (playerChoice === 'Scissors' && aiChoice === 'Paper')
  ) {
    return 'player';
  }
  return 'ai';
};

function RockPaperScissors({ user, onBack }) {
  const [playerChoice, setPlayerChoice] = useState('');
  const [aiChoice, setAiChoice] = useState('');
  const [result, setResult] = useState('Choose a move to begin');
  const [score, setScore] = useState({ player: 0, ai: 0 });

  const playRound = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    const roundResult = getWinner(choice, randomChoice);

    setPlayerChoice(choice);
    setAiChoice(randomChoice);

    if (roundResult === 'draw') {
      setResult('Draw! No one gets a point.');
      return;
    }

    if (roundResult === 'player') {
      setResult(`You win! ${choice} beats ${randomChoice}.`);
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
      return;
    }

    setResult(`You lose! ${randomChoice} beats ${choice}.`);
    setScore((prev) => ({ ...prev, ai: prev.ai + 1 }));
  };

  return (
    <div className="section-wrap game-page">
      <div className="panel game-header">
        <div>
          <p className="eyebrow">Game Room</p>
          <h2>Rock Paper Scissors</h2>
        </div>
        <button className="ghost-btn" onClick={onBack}>Back to Lobby</button>
      </div>

      <div className="game-layout">
        <div className="panel game-panel rps-panel">
          <div className="score-row">
            <div>
              <span className="label">You</span>
              <strong>{score.player}</strong>
            </div>
            <div>
              <span className="label">AI</span>
              <strong>{score.ai}</strong>
            </div>
          </div>

          <div className="choices-row">
            {choices.map((choice) => (
              <button key={choice} className="choice-btn" onClick={() => playRound(choice)}>
                {choice}
              </button>
            ))}
          </div>

          <div className="rps-result">
            <p>{result}</p>
            {playerChoice && aiChoice && (
              <strong>
                You picked {playerChoice} • AI picked {aiChoice}
              </strong>
            )}
          </div>
        </div>

        <aside className="panel side-panel">
          <h3>{user.name}</h3>
          <p className="muted">Rules</p>
          <ul className="rules-list">
            <li>Rock beats Scissors</li>
            <li>Paper beats Rock</li>
            <li>Scissors beats Paper</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default RockPaperScissors;
