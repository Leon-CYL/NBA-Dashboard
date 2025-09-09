# NBA Dashboard - FullStack Basketball Analytics Platform

## Project Overview

A comprehensive fullstack web application that provides NBA player statistics and team analysis. Built with React frontend and Spring Boot backend, this dashboard offers interactive data visualization and filtering capabilities for basketball enthusiasts, analysts, and team management.

## NBA Dashboard Visuallization

- Home page
  ![Home](image/home.png)

- Team page
  ![Team](image/team.png)

- Leaderboard Page
  ![Leaderboard](image/leaderboard.png)

- Position Page
  ![Position](image/position.png)

## API Endpoints

### **Player Data**

- `GET /nba` - Retrieve players with optional filters (team, season, position)
- `GET /nba/leaderboard/points` - Top scorers by season
- `GET /nba/leaderboard/assists` - Top assist leaders
- `GET /nba/leaderboard/rebounds` - Top rebounders
- `GET /nba/leaderboard/steals` - Top steal leaders
- `GET /nba/leaderboard/blocks` - Top shot blockers
- `GET /nba/leaderboard/threepoints` - Top 3-point shooters
- `GET /nba/leaderboard/all` - Complete leaderboard data

## Development Setup

### **Prerequisites**

- Docker and Docker Compose
- Git

### **Docker Setup (Recommended)**

The easiest way to run the NBA Dashboard is using Docker containers. This ensures consistent environments across different machines.

#### **Start the Application**

```bash
# Clone the repository
git clone <repository-url>
cd NBA-Dashboard

# Start all services (database, backend, frontend)
docker compose up -d

# Check if all containers are running
docker compose ps
```

#### **Access the Application**

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Database**: localhost:3344

#### **Stop the Application**

```bash
# Stop all services
docker compose down

# Stop and remove volumes (clears database data)
docker compose down -v
```

#### **View Logs**

```bash
# View all logs
docker compose logs

# View specific service logs
docker compose logs backend
docker compose logs frontend
docker compose logs db

# Follow logs in real-time
docker compose logs -f backend
```

#### **Rebuild Services**

```bash
# Rebuild and restart all services
docker compose up --build -d

# Rebuild specific service
docker compose up --build -d backend
```

### **Manual Setup**

If you prefer to run without Docker:

#### **Prerequisites**

- Java 21+
- Node.js 18+
- PostgreSQL 17+
- Maven 3.6+

#### **Backend Setup**

```bash
cd Backend/dashboard
./mvnw spring-boot:run
```

#### **Frontend Setup**

```bash
cd frontend
npm install
npm run dev
```

---

**Technologies Used**: Docker, React, Spring Boot, PostgreSQL, JavaScript, Java, Tailwind CSS, Python, Data Analysis
