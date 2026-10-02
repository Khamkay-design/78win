function UserProfile({ user, stats }) {
  return (
    <div className="section-wrap profile-page">
      <div className="panel profile-card">
        <div className="profile-hero">
          <div className="avatar-circle large">{user.name.charAt(0).toUpperCase()}</div>
          <div>
            <p className="eyebrow">Player Profile</p>
            <h2>{user.name}</h2>
            <p className="muted">{user.rank} tier • Level {user.level}</p>
          </div>
        </div>

        <div className="profile-grid">
          <div className="card info-box">
            <h3>Overview</h3>
            <p><strong>XP:</strong> {user.xp}</p>
            <p><strong>Streak:</strong> {user.streak} wins</p>
            <p><strong>Favorite Game:</strong> {user.favoriteGame}</p>
          </div>

          <div className="card info-box">
            <h3>Performance</h3>
            <p><strong>Wins:</strong> {stats.wins}</p>
            <p><strong>Losses:</strong> {stats.losses}</p>
            <p><strong>Win Rate:</strong> {stats.winRate}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
