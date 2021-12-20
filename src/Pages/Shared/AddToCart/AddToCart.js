import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React, { useEffect, useState } from 'react';

const AddToCart = () => {
    const handleMyCartClose = () => {
        document.querySelector('#cart').classList.remove('display')
    };
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-chamber-25113.herokuapp.com/saveProduct')
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])


    const handleCartDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Cancel this Order?')
        if (proceed) {
            const url = `https://safe-chamber-25113.herokuapp.com/saveProduct/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancel Successfully')
                        const remainingOrder = cartProducts.filter(order => order._id != id)
                        setCartProducts(remainingOrder)
                    }
                })
        }

    }
    return (
        <Box id="cart" className='my_cart'>
            <Box className='cart_content'>
                <Box className='top_Box'>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h5">My Cart</Typography>
                        <Button onClick={handleMyCartClose} variant='contained'>Close</Button>
                    </Box>
                    <hr />
                    <Box>
                        {
                            cartProducts.map(product =>
                                <Box key={product._id}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} md={4}>
                                            <img style={{ width: '100%' }} src={product.img} alt="" />
                                        </Grid>
                                        <Grid item xs={7} md={7}>
                                            <Typography sx={{ textTransform: 'capitalize !important', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} variant="body1">{product.name}</Typography>

                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <span>${product.price}</span>
                                                <Button onClick={() => handleCartDelete(product._id)}>X</Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <hr />
                                </Box>
                            )
                        }
                    </Box>
                </Box>

                <Box className='bottom_Box'>
                    <Button variant="contained">
                        View Cart
                    </Button>
                    <Button variant="contained">
                        Checkout
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AddToCart;