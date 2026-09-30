function Leaderboard({ data }) {
  return (
    <div className="section-wrap">
      <div className="panel leaderboard-page">
        <div className="game-header">
          <div>
            <p className="eyebrow">Community Rankings</p>
            <h2>Leaderboard</h2>
          </div>
        </div>

        <div className="leaderboard-table">
          <div className="leaderboard-head">
            <span>Rank</span>
            <span>Player</span>
            <span>Wins</span>
            <span>Score</span>
          </div>

          {data.map((player, index) => (
            <div key={player.name} className="leaderboard-row">
              <span>#{index + 1}</span>
              <span>{player.badge} {player.name}</span>
              <span>{player.wins}</span>
              <span>{player.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
