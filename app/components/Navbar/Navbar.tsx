'use client'
import React from 'react'
import { Logo } from '../Logo/Logo'
import styles from './navbar.module.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge, useMediaQuery, useTheme, AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountMenu } from '../Dropdown/DropdownUser/AccountMenu';
import { NavMenu } from '../Dropdown/DropdownMenu/NavMenu';

type NavbarProps = {
    cartCount: number;
}

export const Navbar = ({cartCount}: NavbarProps): JSX.Element => {
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
            <NavMenu title="Marques">
                                <MenuItem>Toyota</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
            </NavMenu>
            </MenuItem>
            <NavMenu title="Produits">
                                <MenuItem>urgyihf</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
            </NavMenu>
            <MenuItem>
            <NavMenu title="Services">
                                <MenuItem>Toyota</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
            </NavMenu>
            </MenuItem>
            <MenuItem>
            <NavMenu title="Contact">
                                <MenuItem>Toyota</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
            </NavMenu>
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
                        <NavMenu title="Marques">
                                <MenuItem>Toyota</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
                            </NavMenu>
                        </li>
                        <li>
                        <NavMenu title="Produits">
                                <MenuItem>urgyihf</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
                            </NavMenu>
                        </li>
                        <li>
                        <NavMenu title="Services">
                                <MenuItem>Toyota</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
                            </NavMenu>
                        </li>
                        <li>
                        <NavMenu title="Contact">
                                <MenuItem>Toyota</MenuItem>
                                <MenuItem>Audi</MenuItem>
                                <MenuItem>Nissan</MenuItem>
                                <MenuItem>Peugeot</MenuItem>
                                <MenuItem>Renault</MenuItem>
                                <MenuItem>Tesla</MenuItem>
                            </NavMenu>
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
                        <div className={`${styles.iconUser}`}>
                        <AccountMenu />
                        </div>
                    </li>
                    <li>
                        
                            <Badge color='primary' badgeContent={cartCount} anchorOrigin={{vertical: 'top', horizontal:'right',}}>
                            <a href="/cart"><ShoppingCart /></a>
                            </Badge>
                        
                    </li>
                </ul>
        </div>
    </div>
)
}
                           
