import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlightSearchForm from './components/FlightSearchForm';
import FlightResults from './components/FlightResults';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import axios from 'axios';

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFlights = async ({ origin, destination, date }) => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',      
        params: {
          originSkyId: origin,
          destinationSkyId: destination,
          originEntityId: '95673498',
          destinationEntityId: '95673320',
          date,        
        },
        headers: {
          'X-RapidAPI-Key': 'API_KEY',
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      console.log("Data :", response.data.data?.itineraries)
      setFlights(response.data.data?.itineraries || []);
    } catch (error) {
      console.error("API error:", error);
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ✈️ Google Flights Clone
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FlightSearchForm onSearch={fetchFlights} />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <FlightResults flights={flights} />
      )}
    </Container>  
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
