// src/pages/ShortenerPage.jsx
import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import UrlForm from '../components/UrlForm';
import logger from '../logging-middleware/logger';

const ShortenerPage = () => {
  useEffect(() => {
    logger.logPageView("Shortener Page");
    logger.logClick("Shortening started");
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <UrlForm />
    </Container>
  );
};

export default ShortenerPage;
