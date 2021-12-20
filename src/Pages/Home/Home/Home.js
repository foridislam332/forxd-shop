import { Box } from '@material-ui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import TopCategory from '../TopCategory/TopCategory';
import Offers from '../Offers/Offers';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import AddToCart from '../../Shared/AddToCart/AddToCart';

const Home = () => {
    return (
        <Box>
            <AddToCart></AddToCart>
            <Banner></Banner>
            <TopCategory></TopCategory>
            <TrendingProducts></TrendingProducts>
            <Offers></Offers>
            <Products></Products>
        </Box>
    );
};

export default Home;