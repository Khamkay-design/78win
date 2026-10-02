function Analytics({ history, stats }) {
  const maxValue = Math.max(...history.map((item) => item.value), 1);

  return (
    <div className="section-wrap analytics-page">
      <div className="panel analytics-card-panel">
        <div className="game-header">
          <div>
            <p className="eyebrow">Performance Overview</p>
            <h2>Analytics</h2>
          </div>
        </div>

        <div className="analytics-grid">
          <div className="card stat-box">
            <span className="label">Total Games</span>
            <strong>{stats.totalGames}</strong>
          </div>
          <div className="card stat-box">
            <span className="label">Wins</span>
            <strong>{stats.wins}</strong>
          </div>
          <div className="card stat-box">
            <span className="label">Losses</span>
            <strong>{stats.losses}</strong>
          </div>
          <div className="card stat-box">
            <span className="label">Win Rate</span>
            <strong>{stats.winRate}%</strong>
          </div>
        </div>

        <div className="history-list">
          {history.map((item) => (
            <div key={item.label} className="history-row">
              <div className="history-meta">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
              <div className="history-bar">
                <div
                  className="history-fill"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
