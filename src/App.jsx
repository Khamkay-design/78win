import { useState } from 'react';
import GameLobby from './components/GameLobby';
import TicTacToe from './components/TicTacToe';
import RockPaperScissors from './components/RockPaperScissors';
import Leaderboard from './components/Leaderboard';
import UserProfile from './components/UserProfile';
import Analytics from './components/Analytics';

const user = {
  id: 'u_001',
  name: 'Khamkay',
  avatar: '',
  level: 18,
  rank: 'Diamond',
  xp: 2840,
  streak: 12,
  favoriteGame: 'Tic Tac Toe'
};

const stats = {
  totalGames: 128,
  wins: 82,
  losses: 46,
  winRate: 64
};

const leaderboardData = [
  { name: 'Pro Player', score: 9850, wins: 102, badge: '🏆' },
  { name: 'Master Gamer', score: 9200, wins: 94, badge: '🥇' },
  { name: 'Elite Champion', score: 8950, wins: 88, badge: '🥈' },
  { name: 'Gaming Star', score: 8500, wins: 81, badge: '🥉' },
  { name: 'Khamkay', score: 8240, wins: 76, badge: '🎖️' }
];

const gameplayHistory = [
  { label: 'Tic Tac Toe', value: 45 },
  { label: 'Rock Paper Scissors', value: 38 },
  { label: 'Matches Won', value: 82 },
  { label: 'Matches Lost', value: 46 }
];

function App() {
  const [currentView, setCurrentView] = useState('lobby');
  const [activeGame, setActiveGame] = useState('tictactoe');

  const handleSelectGame = (gameName) => {
    setActiveGame(gameName);
    setCurrentView('game');
  };

  const renderContent = () => {
    if (currentView === 'game') {
      if (activeGame === 'tictactoe') {
        return <TicTacToe user={user} onBack={() => setCurrentView('lobby')} />;
      }
      if (activeGame === 'rockpaperscissors') {
        return <RockPaperScissors user={user} onBack={() => setCurrentView('lobby')} />;
      }
    }

    if (currentView === 'leaderboard') {
      return <Leaderboard data={leaderboardData} />;
    }

    if (currentView === 'profile') {
      return <UserProfile user={user} stats={stats} />;
    }

    if (currentView === 'analytics') {
      return <Analytics history={gameplayHistory} stats={stats} />;
    }

    return <GameLobby user={user} stats={stats} onSelectGame={handleSelectGame} />;
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="brand-icon">🎮</span>
          <div>
            <h1>78WIN</h1>
            <small>Gaming Platform</small>
          </div>
        </div>

        <nav className="nav-menu">
          <button className="nav-btn" onClick={() => setCurrentView('lobby')}>Lobby</button>
          <button className="nav-btn" onClick={() => setCurrentView('leaderboard')}>Leaderboard</button>
          <button className="nav-btn" onClick={() => setCurrentView('profile')}>Profile</button>
          <button className="nav-btn" onClick={() => setCurrentView('analytics')}>Analytics</button>
        </nav>
      </header>

      <main className="page-content">{renderContent()}</main>
    </div>
  );
}

export default App;
