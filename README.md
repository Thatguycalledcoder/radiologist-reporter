# Project Documentation Guide

## Project Overview

This project is a modern web application leveraging the following technologies:

- **Backend**: Python, FastAPI
- **Frontend**: React (using Vite)
- **Database**: PostgreSQL (via Docker container)
- **Environment Management**: Python `venv`
- **Build Tools**: Node.js, npm

This guide provides step-by-step instructions to clone, set up, and run the project on your local machine.

---

## Prerequisites

Before getting started, ensure you have the following installed:

1. [Python](https://www.python.org/downloads/) (>= 3.8)
2. [Node.js](https://nodejs.org/) (>= 14.x) and npm
3. [Docker Desktop](https://www.docker.com/products/docker-desktop)
4. Git

---

## Cloning the Project

1. Open your terminal or command prompt.
2. Clone the repository:
   ```bash
   git clone https://github.com/Thatguycalledcoder/radiologist-reporter.git
   ```
3. Navigate into the project directory:
   ```bash
   cd radiologist-reporter
   ```

---

## Backend Setup

1. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

2. **Start the PostgreSQL Database in Docker**

   Run the following command to start the PostgreSQL database container:

   ```bash
   docker-compose up -d
   ```

3. **Set Up the Python Virtual Environment**

   Create a virtual environment:

   ```bash
   python -m venv venv
   ```

4. **Activate the Virtual Environment**

   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

5. **Install Python Dependencies**

   Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

6. **Run the Backend Development Server**

   Start the FastAPI backend server:

   ```bash
   uvicorn app.main:app
   ```

7. **Verify the Backend**

   Open your browser and navigate to:

   ```
   http://127.0.0.1:8000/docs
   ```

   OR

   ```
   http://127.0.0.1:8000/redoc
   ```

   This will display the auto-generated FastAPI documentation.

---

## Frontend Setup

**Navigate to the Project Root**

1. Open another terminal or command prompt.

2. **Navigate to the Frontend Directory**

   ```bash
   cd frontend
   ```

3. **Install Node.js Dependencies**

   Run the following command to install required npm packages:

   ```bash
   npm install
   ```

4. **Start the Frontend Development Server**

   Start the Vite development server:

   ```bash
   npm run dev
   ```

5. **Access the Frontend**

   The development server URL will be printed in the terminal, typically:

   ```
   http://127.0.0.1:5173
   ```

---

## Integration Testing

Ensure both the backend and frontend are running, then test the full application by accessing the frontend URL. Interact with the application to confirm API functionality.

---

## Troubleshooting

### Common Issues

1. **Docker Database Container Fails to Start**

   - Verify Docker Desktop is running.
   - Check for port conflicts with the `docker-compose.yml` file.

2. **Backend Fails to Connect to Database**

   - Confirm the database is running using:
     ```bash
     docker ps
     ```
   - Check the database connection string in the backend configuration.

3. **Frontend Fails to Start**

   - Ensure Node.js and npm are installed and functioning.
   - Clear npm cache and reinstall dependencies:
     ```bash
     npm cache clean --force
     npm install
     ```

---

## Additional Commands

### Stop Docker Container

```bash
docker-compose down
```

### Clear Docker Data (Caution: This removes all Docker volumes)

```bash
docker system prune -a --volumes
```

---
