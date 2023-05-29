'use client'
import React from 'react'
import { Logo } from '../Logo/Logo'
import styles from './navbar.module.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge, useMediaQuery, useTheme, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = (): JSX.Element => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <a href="">Marque de véhicules</a>
            </MenuItem>
            <MenuItem>
                <a href="">Pièces détachées</a>
            </MenuItem>
            <MenuItem>
                <a href="">Assistance</a>
            </MenuItem>
            <MenuItem>
                <a href="">Recyclages</a>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={`${styles.navbar}`} style={{position: 'fixed', width: '100%', top: 0, zIndex: 1000}}>
            <div className={`${styles.wrapper}`}>
                <Logo />

                {isMobile ? (
                    <>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuOpen}>
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        {renderMobileMenu}
                    </>
                ) : (
                    <ul className={`${styles.ul}`}>
                        <li>
                            <a href="">Marque de véhicules</a>
                        </li>
                        <li>
                            <a href="">Pièces détachées</a>
                        </li>
                        <li>
                            <a href="">Assistance</a>
                        </li>
                        <li>
                            <a href="">Recyclages</a>
                        </li>
                    </ul>
                )}

                <div>
                    <div className={styles['input-wrapper']}>
                        <input placeholder='Search' className={`${styles.input}`} type="text" />
                    </div>
                </div>

                <ul className={`${styles.ulright}`}>
                    <li>
                        <a href="">
                            <AccountCircle />
                        </a>
                    </li>
                    <li>
                        <a href="">
                        
                            <Badge color='primary' badgeContent={1} anchorOrigin={{vertical: 'top', horizontal:'right',}}>
                            <ShoppingCart />
                            </Badge>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
)
}
                           
