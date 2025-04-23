import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Stack,
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function FlightResults({  flights  }) {
    if (!flights?.length) return <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>No flights to show</Typography></Box>;
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>✈️ Available Flights</Typography>
      <Grid container spacing={3}>
        {flights?.map((flight, index) => (
          <Grid item size={6} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 4,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': { transform: 'scale(1.02)' },
                cursor: 'pointer'
              }}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Typography variant="h6" fontWeight={600}>{flight?.legs?.[0]?.segments?.[0]?.operatingCarrier?.name}</Typography>
                  <Chip
                    icon={<AttachMoneyIcon />}
                    label={`${flight.price?.raw}`}
                    color="success"
                    size="medium"
                    sx={{ fontWeight: 500 }}
                  />
                </Stack>
                <Stack spacing={1} mt={2}>
                  <Typography>
                    <FlightTakeoffIcon fontSize="small" sx={{ mr: 1 }} />
                    From: <strong>{flight?.legs?.[0]?.origin?.city}({flight?.legs?.[0]?.origin?.displayCode})</strong>
                  </Typography>
                  <Typography>
                    <FlightLandIcon fontSize="small" sx={{ mr: 1 }} />
                    To: <strong>{flight?.legs?.[0]?.destination?.city}({flight?.legs?.[0]?.destination?.displayCode})</strong>
                  </Typography>
                  <Typography>
                    🕒 Departure: <strong>{flight?.legs?.[0]?.departure}</strong>
                  </Typography>
                  <Typography>
                    🕒 Arrival: <strong>{flight?.legs?.[0]?.arrival}</strong>
                  </Typography>
                </Stack>
                {/* <Typography>From: {flight?.legs?.[0]?.origin?.city}({flight?.legs?.[0]?.origin?.displayCode}) → To: {flight?.legs?.[0]?.destination?.city}({flight?.legs?.[0]?.destination?.displayCode})</Typography>
                <Typography>Departure: {flight?.legs?.[0]?.departure}</Typography>
                <Typography>Arrival: {flight?.legs?.[0]?.arrival}</Typography>
                <Typography>Price: {flight.price?.formatted}</Typography> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    // <div className="space-y-4 mt-4">
    //     {flights?.map((flight, index) => (
    //         <div key={index} className="border p-4 rounded shadow bg-white">
    //         <p><strong>Airline:</strong> {flight.airline_name}</p>
    //         <p><strong>Price:</strong> {flight.price}</p>
    //         <p><strong>From:</strong> {flight.origin?.name} → <strong>To:</strong> {flight.destination?.name}</p>
    //       </div>
    //     ))}
    // </div>
  )
}

export default FlightResults