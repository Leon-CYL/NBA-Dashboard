# Docker Setup Guide for NBA Dashboard

## Overview

Your NBA Dashboard is now fully containerized with Docker! This guide explains how to use Docker to run your entire application stack.

## What's Included

### **Services:**

- **PostgreSQL Database**: NBA player statistics database
- **Spring Boot Backend**: REST API server
- **React Frontend**: Web application with Nginx

### **Files Created:**

- `Backend/dashboard/Dockerfile` - Backend container configuration
- `frontend/Dockerfile` - Frontend container configuration
- `frontend/nginx.conf` - Nginx configuration for production
- `.dockerignore` files - Optimize build performance

## How to Use Docker

### **1. Start All Services**

```bash
# From the project root directory
docker-compose up -d
```

### **2. View Logs**

```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs backend
docker-compose logs frontend
docker-compose logs db
```

### **3. Stop Services**

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (WARNING: deletes database data)
docker-compose down -v
```

### **4. Rebuild Services**

```bash
# Rebuild and start
docker-compose up --build

# Rebuild specific service
docker-compose up --build backend
```

## Access Your Application

### **URLs:**

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Database**: localhost:3344

### **API Endpoints:**

- `GET http://localhost:8080/nba` - Player data
- `GET http://localhost:8080/nba/leaderboard/all?season=2024` - Leaderboards

## Development Workflow

### **Option 1: Full Docker (Recommended for Production)**

```bash
# Start everything with Docker
docker-compose up -d

# Your app is ready at localhost:3000
```

### **Option 2: Hybrid Development**

```bash
# Start only database with Docker
docker-compose up -d db

# Run backend locally
cd Backend/dashboard
./mvnw spring-boot:run

# Run frontend locally
cd frontend
npm run dev
```

## Database Management

### **Connect to Database**

```bash
# Using Docker
docker exec -it nba_db psql -U nba_user -d nba

# Using external client
# Host: localhost
# Port: 3344
# Database: nba
# Username: nba_user
# Password: nba_pass
```

### **Import Data**

```bash
# Copy your CSV files to the container
docker cp ./Data/Player_cleaned.csv nba_db:/data/

# Import data (run inside container)
docker exec -it nba_db psql -U nba_user -d nba -c "\copy player_season FROM '/data/Player_cleaned.csv' CSV HEADER;"
```

## Troubleshooting

### **Common Issues:**

#### **1. Port Already in Use**

```bash
# Check what's using the port
lsof -i :3000
lsof -i :8080
lsof -i :3344

# Kill the process or change ports in docker-compose.yaml
```

#### **2. Database Connection Issues**

```bash
# Check if database is healthy
docker-compose ps

# Restart database
docker-compose restart db
```

#### **3. Frontend Build Issues**

```bash
# Clear node_modules and rebuild
docker-compose down
docker-compose up --build frontend
```

#### **4. Backend Build Issues**

```bash
# Clear Maven cache and rebuild
docker-compose down
docker-compose up --build backend
```

## Monitoring

### **Check Service Status**

```bash
# View running containers
docker-compose ps

# Check resource usage
docker stats
```

### **Health Checks**

- **Database**: Automatic health check every 10s
- **Backend**: Health check at `/actuator/health`
- **Frontend**: Nginx health check

## Performance Tips

### **1. Optimize Build Time**

- Use `.dockerignore` files
- Leverage Docker layer caching
- Build services separately when possible

### **2. Resource Management**

```bash
# Limit resources in docker-compose.yaml
services:
  backend:
    deploy:
      resources:
        limits:
          memory: 512M
        reservations:
          memory: 256M
```