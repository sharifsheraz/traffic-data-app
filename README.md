# Traffic Data App

## Overview

The Traffic Data App is a full-stack web application that visualizes traffic data using interactive graphs. It consists of two main components:

- **Backend**: A Node.js and Express server that provides traffic data through an API, using **TypeORM with PostgreSQL** as the database.
- **Frontend**: A React + Vite + TypeScript-based single-page application (SPA).

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v20+ recommended)
- **npm** (v10+ recommended)
- **PostgreSQL**

## Setup Instructions

### 1. Install dependencies

```sh
npm install
```

This installs dependencies for both `backend` and `frontend` since the project uses npm workspaces.

### 2. Setup environment variables

#### Frontend

- Create a `.env` file inside the `frontend` directory:
  ```sh
  cd frontend
  touch .env
  ```
- Add the following to `.env`:
  ```sh
  VITE_API_URL=http://localhost:4000
  ```

#### Backend

- Create a `.env` file inside the `backend` directory:
  ```sh
  cd backend
  cp .env.sample .env
  ```
- Update the `.env` file with your database credentials:
  ```sh
  DATABASE_URL=postgres://user:password@localhost:5432/traffic_db
  ```

## Running the Application

### 1. Start both frontend and backend

```sh
npm start
```

This will concurrently run:

- Backend server on **http://localhost:4000**
- Frontend app on **http://localhost:5173**

### 2. Run backend only

```sh
npm run backend
```

### 3. Run frontend only

```sh
npm run frontend
```

## System Architecture

### Backend

- Built with **Node.js + Express**.
- Uses **TypeORM** to interact with a **PostgreSQL** database.
- Provides REST API endpoints to fetch and store traffic data.
- Uses TypeScript for type safety.

### Frontend

- Built with **React + Vite**.
- Uses **Recharts** for traffic data visualization.
- Styled using **Tailwind CSS**.
- Fetches traffic data from the backend API.

## API Endpoints

The backend exposes the following endpoints:

### Traffic Data Endpoints

| Method | Endpoint               | Description                                               |
| ------ | ---------------------- | --------------------------------------------------------- |
| GET    | `/api/traffic/grouped` | Returns traffic data grouped by country and vehicle type. |
| GET    | `/api/traffic`         | Retrieves all traffic events (paginated).                 |
| POST   | `/api/traffic`         | Creates a new traffic event.                              |

## Future Enhancements

- **Proper input validation** to ensure API requests are well-formed.
- **Improve UI/UX** with additional filters and controls (e.g., duration, country).
- **env** variables validation
