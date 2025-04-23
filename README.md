
# ✈️ Flight Finder App

A simple React-based application for searching and displaying flight results. Built with [Vite](https://vitejs.dev/) for fast development and optimized builds.

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FlightSearchForm.jsx
│   │   └── FlightResults.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

This will start the development server, typically on `http://localhost:5173`.

### Building for Production

```bash
npm run build
# or
yarn build
```

## 🛠 Features

- Responsive form for entering flight search criteria
- Dynamic flight results component
- Fast development experience with Vite

## 🌐 API Details

The app is designed to fetch flight data from an external API. Replace the placeholder with your actual flight API endpoint in the relevant component or configuration file.

### Example API Usage

```
GET https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights?originSkyId=NYC&destinationSkyId=LAX&originEntityId=1452&destinationEntityId=1452&date=2025-05-01
```

**Query Parameters:**

- `originSkyId`: Airport code for departure (e.g., `NYC`)
- `destinationSkyId`: Airport code for arrival (e.g., `LAX`)
- `date`: Flight date in `YYYY-MM-DD` format

**Response Example:**

```json
[
  {
    "flightNumber": "AB123",
    "airline": "AirSample",
    "departureTime": "10:00 AM",
    "arrivalTime": "1:00 PM",
    "price": "$250"
  }
]
```

## 📦 Dependencies

- React
- React DOM
- Vite

## 🧪 Linting

This project uses ESLint. Run:

```bash
npm run lint
```

## 📄 License

MIT
