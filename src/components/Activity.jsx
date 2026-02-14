import { useState } from 'react';

export default function Activity({ activity, progress, onUpdateProgress }) {
  const [promptExpanded, setPromptExpanded] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const isComplete = progress?.completed || false;
  const chatLink = progress?.chatLink || '';
  const notes = progress?.notes || '';

  function handleCopyPrompt() {
    navigator.clipboard.writeText(activity.prompt).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    });
  }

  function handleToggleComplete() {
    onUpdateProgress(activity.id, { completed: !isComplete });
  }

  function handleChatLinkChange(e) {
    onUpdateProgress(activity.id, { chatLink: e.target.value });
  }

  function handleNotesChange(e) {
    onUpdateProgress(activity.id, { notes: e.target.value });
  }

  return (
    <div
      className={`border rounded-lg p-4 transition-colors ${
        isComplete
          ? 'bg-green-50 border-green-200'
          : 'bg-white border-gray-200'
      }`}
    >
      {/* Header row */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={isComplete}
          onChange={handleToggleComplete}
          className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <h4
            className={`font-semibold text-gray-900 ${
              isComplete ? 'line-through text-gray-500' : ''
            }`}
          >
            {activity.title}
          </h4>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Goal:</span> {activity.learningGoal}
          </p>
        </div>
      </div>

      {/* Prompt section */}
      <div className="mt-3 ml-8">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPromptExpanded(!promptExpanded)}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 cursor-pointer"
          >
            <svg
              className={`w-4 h-4 transition-transform ${
                promptExpanded ? 'rotate-90' : ''
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
            {promptExpanded ? 'Hide prompt' : 'Show prompt'}
          </button>
          <button
            onClick={handleCopyPrompt}
            className="text-sm bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-3 py-1 rounded-md font-medium transition-colors cursor-pointer"
          >
            {copyFeedback ? 'Copied!' : 'Copy prompt'}
          </button>
        </div>

        {promptExpanded && (
          <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-md">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans leading-relaxed">
              {activity.prompt}
            </pre>
          </div>
        )}

        {/* Input fields */}
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Chat Link
            </label>
            <input
              type="url"
              value={chatLink}
              onChange={handleChatLinkChange}
              placeholder="Paste your chat URL here..."
              className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              Notes
            </label>
            <input
              type="text"
              value={notes}
              onChange={handleNotesChange}
              placeholder="Your reflections or notes..."
              className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
