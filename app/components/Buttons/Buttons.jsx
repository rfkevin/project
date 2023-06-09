import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import CreateIcon from '@mui/icons-material/Create';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const Buttons= () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<ControlPointIcon />}>
      </Button>  
      <Button variant="outlined" startIcon={<DeleteIcon />}>
      </Button>
      <Button variant="outlined" endIcon={<CreateIcon />}>
      </Button>
    </Stack>
  );
}