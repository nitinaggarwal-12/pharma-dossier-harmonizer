FROM python:3.10-slim

# Install Node.js, curl, and build tools
RUN apt-get update && apt-get install -y curl gnupg build-essential \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python dependencies
COPY app/requirements.txt ./app_requirements.txt
RUN pip install --no-cache-dir -r app_requirements.txt

# Install Frontend dependencies
COPY frontend/package.json frontend/package-lock.json* ./frontend/
RUN cd frontend && npm install

# Copy the rest of the application
COPY . .

# Build the frontend
RUN cd frontend && npm run build

# Make the start script executable
RUN chmod +x /app/scripts/start_production.sh

# Expose the port
EXPOSE 3000

CMD ["/app/scripts/start_production.sh"]
