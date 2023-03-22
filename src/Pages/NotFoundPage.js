import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return ( 
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
                        </Typography>

            <Button variant="contained" className='mt-4 text-black bg-transparent'><Link className='no-underline text-black' to="/" >Go To HomePage</Link></Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
     );
}
 
export default NotFoundPage