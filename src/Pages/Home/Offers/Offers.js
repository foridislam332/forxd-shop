import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';

const Offers = () => {
    return (
        <Container sx={{ my: 10 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }}>
                        <img style={{ maxWidth: '100%' }} src="https://i.ibb.co/sttW1d5/offer1.png" alt="" />
                        <Box sx={{ position: 'absolute', top: '20%', left: '50px', textAlign: 'center' }} className="offer_content">
                            <Typography variant="h6">
                                Mac Book
                            </Typography>
                            <Typography sx={{ mb: 2, fontWeight: 'bold' }} variant="h5">
                                UP to 30% OFF
                            </Typography>
                            <Button variant="contained"> Shop Now</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ position: 'relative' }}>
                        <img style={{ maxWidth: '100%' }} src="https://i.ibb.co/x3HvFyD/offer2.png" alt="" />
                        <Box sx={{ position: 'absolute', top: '20%', right: '50px', textAlign: 'center' }} className="offer_content">
                            <Typography variant="h6">
                                Xiaoyi YI 1080p
                            </Typography>
                            <Typography sx={{ mb: 2, fontWeight: 'bold' }} variant="h5">
                                UP to 45% OFF
                            </Typography>
                            <Button variant="contained"> Shop Now</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Offers;