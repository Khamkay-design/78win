/* Lobby styles */

.lobby-shell {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.lobby-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(168, 85, 247, 0.18));
}

.eyebrow {
  margin: 0 0 0.25rem;
  color: #c4b5fd;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72rem;
}

.lobby-header h2 {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
}

.player-overview {
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(320px, 1.5fr);
  gap: 1.5rem;
}

.profile-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.2rem;
}

.avatar-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
}

.profile-box h3 {
  margin: 0 0 0.35rem;
  font-size: 1.5rem;
}

.profile-box p {
  margin: 0.1rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  gap: 1rem;
  padding: 1.2rem;
}

.mini-stat {
  background: rgba(148, 163, 184, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  padding: 1rem 0.8rem;
  text-align: center;
}

.mini-stat span {
  display: block;
  color: #cbd5e1;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.mini-stat strong {
  display: block;
  margin-top: 0.35rem;
  font-size: 1.6rem;
}

.mini-stat.win strong {
  color: #34d399;
}

.mini-stat.loss strong {
  color: #f87171;
}

.game-selection,
.leaderboard-preview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title-row h3 {
  margin: 0;
  font-size: 1.8rem;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 1.5rem;
}

.game-card {
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.game-card:hover {
  transform: translateY(-4px);
  border-color: rgba(96, 165, 250, 0.8);
}

.game-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.game-card h4 {
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
}

.game-card p {
  color: #cbd5e1;
  margin: 0 0 1rem;
  min-height: 60px;
}

.board-list {
  overflow: hidden;
}

.leader-row {
  display: grid;
  grid-template-columns: 70px 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.2rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
}

.leader-row:last-child {
  border-bottom: none;
}

.rank {
  font-weight: 800;
  color: #c4b5fd;
}

.player-name {
  font-weight: 700;
}

.player-score {
  color: #93c5fd;
  font-weight: 700;
}

@media (max-width: 768px) {
  .player-overview,
  .game-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
  }

  .lobby-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
