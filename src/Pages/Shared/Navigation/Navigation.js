import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Button } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link as NavLink } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const handleMyCartOpen = () => {
        document.querySelector('#cart').classList.add('display')
    };

    const [saveProduct, setSaveProduct] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:5000/saveProduct')
            .then(res => res.json())
            .then(data => setSaveProduct(data))
    }, [])

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={saveProduct.length} color="error">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Card</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <FavoriteBorderOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem sx={{ textAlign: 'center' }}>
                <NavLink className="nav_link" to="/home">Home</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink className="nav_link" to="/about">About</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink className="nav_link" to="/home">Shop</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink className="nav_link" to="/home">More</NavLink>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{ background: '#1976d2 !important' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar sx={{ background: 'transparent !important', boxShadow: 'none !important' }} position="static">
                        <Toolbar className="tool_bar" sx={{ justifyContent: 'center' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                Forxd Shop
                            </Typography>
                            <Search sx={{ position: 'absolute', width: '50% !important' }}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    className="search_input"
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    sx={{ width: '100%' }}
                                />
                            </Search>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton onClick={handleMyCartOpen} size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge className='shoppingIcon' badgeContent={saveProduct.length}
                                        color="error">
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </IconButton>

                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <FavoriteBorderOutlinedIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative', top: '30px' }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar sx={{ background: 'transparent !important', boxShadow: 'none !important' }} position="static">
                        <Toolbar sx={{ justifyContent: 'space-between' }}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <Button sx={{ bckground: 'red !important' }} variant="contained" {...bindTrigger(popupState)}>
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="open drawer"
                                                sx={{ mr: 2 }}
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                            All Departments
                                        </Button>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>Desktop</MenuItem>
                                            <MenuItem onClick={popupState.close}>Laptop</MenuItem>
                                            <MenuItem onClick={popupState.close}>Cell Phones</MenuItem>
                                            <MenuItem onClick={popupState.close}>Headphones</MenuItem>
                                            <MenuItem onClick={popupState.close}>Camera</MenuItem>
                                            <MenuItem onClick={popupState.close}>Smartwatches</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Box className="main_menu" sx={{ textAlign: 'center', margin: 'auto' }}>
                                    <NavLink className="nav_link" to="/home">Home</NavLink>
                                    <NavLink className="nav_link" to="/products">Products</NavLink>
                                    <NavLink className="nav_link" to="/shop">Shop</NavLink>
                                    <NavLink className="nav_link" to="/more">More</NavLink>
                                </Box>
                            </Box>
                            <Box>
                                <NavLink className="nav_link" to="/more">Special Offer</NavLink>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        </>
    );
}