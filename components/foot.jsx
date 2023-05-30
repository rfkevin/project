"use client"
import { Box, Grid, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ p: 3, backgroundColor: '#3f51b5', color: '#fff' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            À propos de nous
          </Typography>
          <Typography>
            Nous sommes une Boutique spécialisée dans la vente de pièces automobiles de qualité.
            Nous sommes fiers de fournir des produits de qualité supérieure et un service client exceptionnel à tous nos clients.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contactez-nous
          </Typography>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <PhoneIcon sx={{ mr: 1 }}/>
            <Typography>01 23 45 67 89</Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
            <MailIcon sx={{ mr: 1 }}/>
            <Typography>detachezvous@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <LocationOnIcon sx={{ mr: 1 }}/>
            <Typography>74bis avenue Maurice Thorez 94200 Ivry-sur-Seine</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Suivez-nous
          </Typography>
          <Box>
            <IconButton color="inherit" component="a" href="#"><Facebook /></IconButton>
            <IconButton color="inherit" component="a" href="#"><Twitter /></IconButton>
            <IconButton color="inherit" component="a" href="#"><Instagram /></IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
