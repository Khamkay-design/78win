import React from 'react';

const GameLobby = ({ user, stats, onSelectGame }) => {
  const leaderboardPreview = [
    { rank: 1, name: 'Pro Player', score: '9,850 pts' },
    { rank: 2, name: 'Master Gamer', score: '9,200 pts' },
    { rank: 3, name: 'Elite Champion', score: '8,950 pts' },
    { rank: 4, name: 'Gaming Star', score: '8,500 pts' },
    { rank: 5, name: 'Quick Win', score: '8,100 pts' }
  ];

  return (
    <div className="section-wrap lobby-shell">
      <header className="lobby-header panel">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h2>78WIN Gaming Platform</h2>
        </div>
        <button className="primary-btn" onClick={() => onSelectGame('tictactoe')}>Play Now</button>
      </header>

      <section className="player-overview">
        <div className="profile-box panel">
          <div className="avatar-circle">{user.name.charAt(0).toUpperCase()}</div>
          <div>
            <h3>{user.name}</h3>
            <p className="muted">Level {user.level} • {user.rank}</p>
            <p className="muted">Favorite: {user.favoriteGame}</p>
          </div>
        </div>

        <div className="stats-grid panel">
          <div className="mini-stat">
            <span>Total</span>
            <strong>{stats.totalGames}</strong>
          </div>
          <div className="mini-stat win">
            <span>Wins</span>
            <strong>{stats.wins}</strong>
          </div>
          <div className="mini-stat loss">
            <span>Losses</span>
            <strong>{stats.losses}</strong>
          </div>
          <div className="mini-stat">
            <span>Win Rate</span>
            <strong>{stats.winRate}%</strong>
          </div>
        </div>
      </section>

      <section className="game-selection">
        <div className="section-title-row">
          <h3>Choose Your Game</h3>
        </div>

        <div className="game-grid">
          <article className="game-card panel" onClick={() => onSelectGame('tictactoe')}>
            <div className="game-icon">⭕</div>
            <h4>Tic-Tac-Toe</h4>
            <p>Classic game with fast rounds and strategic moves.</p>
            <button className="secondary-btn">Play Tic-Tac-Toe</button>
          </article>

          <article className="game-card panel" onClick={() => onSelectGame('rockpaperscissors')}>
            <div className="game-icon">✂️</div>
            <h4>Rock Paper Scissors</h4>
            <p>Quick matches against AI and test your luck.</p>
            <button className="secondary-btn">Play RPS</button>
          </article>
        </div>
      </section>

      <section className="leaderboard-preview">
        <div className="section-title-row">
          <h3>Leaderboard Top 5</h3>
          <button className="ghost-btn">View All</button>
        </div>

        <div className="board-list panel">
          {leaderboardPreview.map((item) => (
            <div key={item.rank} className="leader-row">
              <span className="rank">#{item.rank}</span>
              <span className="player-name">{item.name}</span>
              <span className="player-score">{item.score}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameLobby;
