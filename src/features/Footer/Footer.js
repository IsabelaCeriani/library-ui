import React from 'react';
import { Container, Typography, Link } from '@mui/material';

export function Footer ()  {
    const footerStyle = {
        backgroundColor: 'lightblue',
        padding: '20px 0',
        textAlign: 'center',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
      };
    
      return (
        <footer style={footerStyle}>
          <Container maxWidth="sm">
            <Typography variant="body1">
                Your Company Name
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Contact us: {' '}
              <Link href="mailto:contact@example.com">contact@example.com</Link> | 
              {' '}
              <Link href="tel:+1234567890">+1234567890</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              &copy; {new Date().getFullYear()} Your Company Name
            </Typography>
          </Container>
        </footer>
      );
    };

