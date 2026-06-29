#!/bin/bash

# Start the FastAPI backend on port 8080 in the background
echo "Starting FastAPI backend on port 8080..."
PORT=8080 python app/main.py &

# Start the Next.js frontend on the port provided by Railway
echo "Starting Next.js frontend on port $PORT..."
cd frontend
exec npm run start -- -p $PORT
