import { useState } from 'react';
import Activity from './Activity';

export default function CapstoneSection({ capstone, progress, onUpdateProgress }) {
  const [expanded, setExpanded] = useState(false);

  const allActivities = capstone.phases.flatMap((p) => p.activities);
  const completedCount = allActivities.filter(
    (a) => progress[a.id]?.completed
  ).length;
  const totalCount = allActivities.length;
  const allDone = completedCount === totalCount;

  return (
    <div className="border-2 border-indigo-200 rounded-xl overflow-hidden shadow-sm bg-indigo-50/30">
      {/* Collapsible header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 hover:bg-indigo-50/50 transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-3">
          <svg
            className={`w-5 h-5 text-indigo-400 transition-transform ${
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
            <h3 className="text-xl font-bold text-indigo-900">
              {capstone.title}
            </h3>
            <p className="text-sm text-indigo-600 mt-0.5">
              {capstone.description}
            </p>
          </div>
        </div>
        <span
          className={`text-sm font-semibold px-3 py-1 rounded-full ${
            allDone
              ? 'bg-green-100 text-green-700'
              : 'bg-indigo-100 text-indigo-700'
          }`}
        >
          {completedCount}/{totalCount}
        </span>
      </button>

      {/* Expanded content with phases */}
      {expanded && (
        <div className="p-5 pt-0 space-y-6">
          <div className="border-t border-indigo-100 pt-4" />
          {capstone.phases.map((phase) => (
            <Phase
              key={phase.id}
              phase={phase}
              progress={progress}
              onUpdateProgress={onUpdateProgress}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Phase({ phase, progress, onUpdateProgress }) {
  const [expanded, setExpanded] = useState(false);

  const completedCount = phase.activities.filter(
    (a) => progress[a.id]?.completed
  ).length;
  const totalCount = phase.activities.length;

  return (
    <div className="bg-white border border-indigo-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-2">
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${
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
            <h4 className="font-semibold text-gray-900">{phase.title}</h4>
            <p className="text-sm text-gray-500">{phase.description}</p>
          </div>
        </div>
        <span className="text-xs font-medium text-gray-500">
          {completedCount}/{totalCount}
        </span>
      </button>

      {expanded && (
        <div className="p-4 pt-0 space-y-4">
          <div className="border-t border-gray-100 pt-3" />
          {phase.activities.map((activity) => (
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
