import { useState } from 'react';
import { weeks, capstone, getAllActivityIds } from './data/curriculum';
import { useFirebaseSync } from './hooks/useFirebaseSync';
import ProgressBar from './components/ProgressBar';
import WeekModule from './components/WeekModule';
import CapstoneSection from './components/CapstoneSection';
import LoginScreen from './components/LoginScreen';

export default function App() {
  const [userId, setUserId] = useState(
    () => localStorage.getItem('ai-dashboard-userId') || ''
  );

  function handleLogin(passphrase) {
    localStorage.setItem('ai-dashboard-userId', passphrase);
    setUserId(passphrase);
  }

  function handleLogout() {
    localStorage.removeItem('ai-dashboard-userId');
    setUserId('');
  }

  if (!userId) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <Dashboard userId={userId} onLogout={handleLogout} />;
}

function Dashboard({ userId, onLogout }) {
  const { progress, loading, handleUpdateProgress } = useFirebaseSync(userId);

  const allIds = getAllActivityIds();
  const completedCount = allIds.filter((id) => progress[id]?.completed).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading your progress...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              AI Product Design
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Interactive Learning Dashboard
            </p>
          </div>
          <button
            onClick={onLogout}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            Switch device key
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        <ProgressBar completed={completedCount} total={allIds.length} />

        {/* Weekly modules */}
        <div className="space-y-4 mb-8">
          {weeks.map((week) => (
            <WeekModule
              key={week.id}
              week={week}
              progress={progress}
              onUpdateProgress={handleUpdateProgress}
            />
          ))}
        </div>

        {/* Capstone */}
        <CapstoneSection
          capstone={capstone}
          progress={progress}
          onUpdateProgress={handleUpdateProgress}
        />

        {/* Footer spacer */}
        <div className="h-16" />
      </main>
    </div>
  );
}
