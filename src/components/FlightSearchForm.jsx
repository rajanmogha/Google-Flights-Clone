import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function FlightSearchForm({ onSearch }) {

    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({origin, destination, date: date?.format('YYYY-MM-DD')});
    }


    return (
        <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>Search Flights</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                <TextField
                    fullWidth
                    size='small'
                    label="Origin"
                    placeholder='New Delhi'
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} md={4}>
                <TextField
                    fullWidth
                    size='small'
                    label="Destination"
                    placeholder='Mumbai'
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                </Grid>
                <Grid item xs={12} md={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Departure Date"
                            value={dayjs(date)}
                            onChange={(newDate) => setDate(newDate)}
                            slotProps={{
                                textField: {
                                  size: 'small', // ← This makes the input small
                                  fullWidth: true, // Optional: makes it stretch to parent width
                                },
                            }}                            
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" size='small' fullWidth onClick={handleSubmit}>
                    Search
                </Button>
                </Grid>
            </Grid>
        </Box>
        // <form onSubmit={handleSubmit} className='space-y-4 p-4 bg-white shadow rounded'>
        //     <div>
        //         <label>Origin</label>
        //         <input className='input' value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder='LON' />
        //     </div>
        //     <div>
        //         <label>Destination</label>
        //         <input className='input' value={destination} onChange={(e) => setDestination(e.target.value)} placeholder='NYC' />
        //     </div>
        //     <div>
        //         <label>Date</label>
        //         <input className='input' type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='LON' />
        //     </div>
        //     <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
        // </form>
    )
}

export default FlightSearchForm