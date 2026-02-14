import { useState } from 'react';
import Activity from './Activity';

export default function WeekModule({ week, progress, onUpdateProgress }) {
  const [expanded, setExpanded] = useState(false);

  const completedCount = week.activities.filter(
    (a) => progress[a.id]?.completed
  ).length;
  const totalCount = week.activities.length;
  const allDone = completedCount === totalCount;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Collapsible header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-3">
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${
              expanded ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{week.title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{week.description}</p>
          </div>
        </div>
        <span
          className={`text-sm font-semibold px-3 py-1 rounded-full ${
            allDone
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {completedCount}/{totalCount}
        </span>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="p-5 pt-0 space-y-4">
          <div className="border-t border-gray-100 pt-4" />
          {week.activities.map((activity) => (
            <Activity
              key={activity.id}
              activity={activity}
              progress={progress[activity.id] || {}}
              onUpdateProgress={onUpdateProgress}
            />
          ))}
        </div>
      )}
    </div>
  );
}
