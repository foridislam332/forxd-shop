import { Container, Grid, Typography } from '@material-ui/core';
import { Box, typography } from '@material-ui/system';
import React, { useEffect, useState } from 'react';

const TopCategory = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('./topcategory.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    console.log(categorys)
    return (
        <Box sx={{ m: 6 }}>
            <Grid container spacing={4}>
                {
                    categorys.map(category =>
                        <Grid item xs={12} md={4} key={category.id}>
                            <Box className="product_box" sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #000' }}>
                                <Box sx={{ width: '9.375rem' }}>
                                    <img style={{ maxWidth: '100%', ml: 0 }} src={category.img} alt="" />
                                </Box>
                                <Box>
                                    <Typography variant="h6">
                                        {category.category}
                                    </Typography>
                                    <Box className="list" sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <a href="#">{category.list1}</a>
                                        <a href="#">{category.list2}</a>
                                        <a href="#">{category.list3}</a>
                                        <a href="#">{category.list4}</a>
                                    </Box>
                                    <Typography variant="h6">
                                        <a href="#">All {category.category}</a>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
};

export default TopCategory;