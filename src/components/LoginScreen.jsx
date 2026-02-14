import { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [passphrase, setPassphrase] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (passphrase.trim()) {
      onLogin(passphrase.trim());
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          AI Product Design
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Interactive Learning Dashboard
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your passphrase to sync progress across devices
          </label>
          <input
            type="text"
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="e.g. erin2026"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none mb-4"
            autoFocus
          />
          <button
            type="submit"
            disabled={!passphrase.trim()}
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            Open Dashboard
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Use the same passphrase on any device to keep your progress in sync.
          No account needed.
        </p>
      </div>
    </div>
  );
}
