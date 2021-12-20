import { Button, Container, Grid, Modal, Paper, Rating, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 'auto',
    bgcolor: '#fff',
    border: '1px solid red !important',
    boxShadow: 24,
    py: 4,
    pl: 0,
    pr: 4,
};

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (product) => {
        axios.post('http://localhost:5000/addtocard', product)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Bike added successfully');
                }
            });
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container className="primary_bg" id="services">
            <Box>
                <Typography sx={{ textAlign: 'center', p: 3 }} variant="h4">
                    Featured Products
                </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Grid container spacing={3}>
                    {
                        products.map(product =>
                            <Grid item xs={12} sm={4} md={3}>
                                <Paper sx={{ pb: 1, pt: 3 }} className="product_box">
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="product_img">
                                        <img style={{ width: '50%' }} src={product.img} alt="" />
                                    </Box>
                                    <Box sx={{ mx: 2 }}>
                                        <Rating name="half-rating-read" defaultValue={product.star} precision={0.5} size="small" readOnly />
                                        <Typography sx={{ fontWeight: '600', textTransform: 'capitalize !important', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} variant="body1">
                                            <a style={{ color: '#000', textDecoration: 'none' }} href="#">{product.name}</a>
                                        </Typography>
                                        <Typography sx={{ color: '#a7a7a7', textTransform: 'uppercase' }} variant="body2">
                                            {product.category}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 3 }}>
                                            <Typography sx={{ color: '#ef262c' }} variant="h6">
                                                ${product.price}
                                            </Typography>
                                            <Button onClick={() => handleAddToCart(product)} className="add_btn">Add To Card</Button>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 3 }}>
                                            <Link to={`/order/${product._id}`}>
                                                <Button className="btn_simple">Buy Now</Button>
                                            </Link>
                                            <Button className="btn_simple" onClick={handleOpen}>Quick View</Button>
                                        </Box>
                                    </Box>
                                </Paper>
                                <Modal
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="keep-mounted-modal-title"
                                    aria-describedby="keep-mounted-modal-description"
                                >
                                    <Box sx={style}>
                                        <Grid container>
                                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={12} md={4}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="product_img">
                                                    <img style={{ width: '80%' }} src={product.img} alt="" />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={8}>
                                                <Typography sx={{ fontWeight: '600', textTransform: 'capitalize !important' }} variant="body1">
                                                    <a style={{ color: '#000', textDecoration: 'none' }} href="#">{product.name}</a>
                                                </Typography>

                                                <Rating name="half-rating-read" defaultValue={product.star} precision={0.5} size="small" readOnly />

                                                <Typography sx={{ color: '#a7a7a7', textTransform: 'capitalize' }} variant="body2">
                                                    {product.description}
                                                </Typography>

                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 3 }}>
                                                    <Typography variant="h6">
                                                        ${product.price}
                                                    </Typography>
                                                    <Button className="buy_btn">Add To Card</Button>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Modal>
                            </Grid>)
                    }
                </Grid>
            </Box>
        </Container >
    );
};

export default Products;