import * as React from 'react';
import Menu from '@mui/material/Menu';
import { Link } from '@mui/material';

export const NavMenu = ({children, title}) => {
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
    return(
        <>
            <Link
            component="button"
            color="inherit"
                underline="none"
                onClick={handleClick}
            >
                {title}
            </Link>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children.map((e, i) => (<div onClick={handleClose} key={i}>{e}</div>))}
      </Menu>

    
        </>
    )

}