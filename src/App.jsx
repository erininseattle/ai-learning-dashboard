import { useCallback } from 'react';
import { weeks, capstone, getAllActivityIds } from './data/curriculum';
import { useLocalStorage } from './hooks/useLocalStorage';
import ProgressBar from './components/ProgressBar';
import WeekModule from './components/WeekModule';
import CapstoneSection from './components/CapstoneSection';

export default function App() {
  // progress is an object keyed by activity id:
  // { "w1-a1": { completed: true, chatLink: "...", notes: "..." }, ... }
  const [progress, setProgress] = useLocalStorage('ai-dashboard-progress', {});

  const handleUpdateProgress = useCallback(
    (activityId, updates) => {
      setProgress((prev) => ({
        ...prev,
        [activityId]: { ...prev[activityId], ...updates },
      }));
    },
    [setProgress]
  );

  const allIds = getAllActivityIds();
  const completedCount = allIds.filter((id) => progress[id]?.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">
            AI Product Design
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Interactive Learning Dashboard
          </p>
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
