import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


export const Mobile = () => {
  
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] : any = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
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
      )
    return(

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
    );
};