import { Container, Grid, Rating, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const url = `http://localhost:5000/products/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const { name, img, description, price, star } = product;
    console.log(id, product)
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Box>
                        <img style={{ width: '100%' }} src={img} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography sx={{ fontWeight: '600', textTransform: 'capitalize !important' }} variant="body1">
                            <a style={{ color: '#000', textDecoration: 'none' }} href="#">{name}</a>
                        </Typography>

                        <Rating name="half-rating-read" defaultValue={star} precision={0.5} size="small" readOnly />

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'var(--red)' }} variant="h6">
                                Price: ${price}
                            </Typography>
                            <Typography sx={{ ml: 1, fontSize: '18px' }} variant="h6">
                                ${price}
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#a7a7a7', textTransform: 'capitalize' }} variant="body2">
                            {description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Orders;