"use client"
import { useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFirework } from '@/utils/fireWorks';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Success = () => {

  useEffect(() => {
    runFirework();
  }, []);

  return (
    
      <Container maxWidth="sm" className="py-8">
        <div className="success flex flex-col items-center space-y-4">
          <Typography variant="h4" component="h2" align="center" color="textPrimary">
            Thank You for Your Order!
          </Typography>
          <BsBagCheckFill className="text-9xl text-green-500" />
          <Typography variant="h6" component="p" align="center" color="textPrimary">
            But the product will never come, I warn you.
          </Typography>
          <Typography variant="body1" align="center" color="textPrimary">
            Check your email for the recipe.
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary">
            If you have any trouble, please contact us.
          </Typography>
        </div>
      </Container>
  );
};

export default Success;