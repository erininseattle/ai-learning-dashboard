#!/bin/bash
cd "$(dirname "$0")"
echo "Starting AI Learning Dashboard..."
echo "Opening in your browser at http://localhost:5173"
echo "To stop the server, close this window."
echo ""
open http://localhost:5173
npx vite --port 5173
