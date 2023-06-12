import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import CreateIcon from '@mui/icons-material/Create';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const Buttons = ({setShowForm}) => {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="rounded" startIcon={<ControlPointIcon />} onClick={() => setShowForm(true)}>
      </Button>  
      <Button variant="rounded" startIcon={<DeleteIcon />}>
      </Button>
      <Button variant="rounded" endIcon={<CreateIcon />}>
      </Button>
    </Stack>
  );
}