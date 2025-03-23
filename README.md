# Traffic Data App

## Overview

The Traffic Data App is a full-stack web application that visualizes traffic data using interactive graphs. It consists of two main components:

- **Backend**: A Node.js and Express server that provides traffic data through an API.
- **Frontend**: A React + Vite + Typescript based single-page application (SPA)

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v20+ recommended)
- **npm** (v10+ recommended)

## Setup Instructions

1. **Install dependencies**

   ```sh
   npm install
   ```

   This installs dependencies for both `backend` and `frontend` since the project uses npm workspaces.

2. **Setup environment variables**
   - Create a `.env` file inside the `frontend` directory:
     ```sh
     cd frontend
     touch .env
     ```
   - Add the following to `.env`:
     ```sh
     VITE_API_URL=http://localhost:4000
     ```

## Running the Application

1. **Start both frontend and backend**

   ```sh
   npm start
   ```

   This will concurrently run:

   - Backend server on **http://localhost:4000**
   - Frontend app on **http://localhost:5173**

2. **Run backend only**

   ```sh
   npm run backend
   ```

3. **Run frontend only**
   ```sh
   npm run frontend
   ```

## System Architecture

### Backend

- Built with **Node.js + Express**.
- Provides REST API endpoints to fetch traffic data.
- Uses TypeScript for type safety.

### Frontend

- Built with **React + Vite**.
- Uses **Recharts** for traffic data visualization.
- Styled using **Tailwind CSS**.
- Fetches traffic data from the backend API.

## Future Enhancements

- Add database integration to store and retrieve historical traffic data.
- Improve UI/UX with additional filters and controls.

## License

This project is licensed under the ISC License.
