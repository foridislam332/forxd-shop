import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{ py: 8, background: '#b1e0ee' }}>
            <Container>
                <Grid container spacing="4">
                    <Grid sx={{ display: 'flex', alignItems: 'center' }} item xs={12} md={6}>
                        <Box>
                            <Typography sx={{ textTransform: 'capitalize', fontWeight: 'bold', color: 'var(--red)' }} variant="h4">
                                New arrival
                            </Typography>
                            <Typography sx={{ textTransform: 'capitalize', fontWeight: 'bold', mt: 2 }} variant="h2">
                                stylish headphone
                            </Typography>
                            <Typography sx={{ color: '#777', my: 4 }} variant="body1">
                                The Pampas Wireless Over-Ear Headphones from Urbanears feature rich sound reproduction through its 40mm drivers, and a robust built-in battery that can deliver up to 30 hours of playback.
                            </Typography>
                            <Button variant="contained">Shop Now</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img style={{ width: '80%' }} src="https://i.ibb.co/KV3SsxH/headphone.png" alt="" sizes="" srcset="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;