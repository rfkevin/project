import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';


import PeopleIcon from '@mui/icons-material/People';

export const mainListItems = (
  <React.Fragment>
   
   <ListItemButton component={Link} to="/admin/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/products">
      <ListItemIcon>
        <LocalMallSharpIcon/>
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
   
  </React.Fragment>
);

