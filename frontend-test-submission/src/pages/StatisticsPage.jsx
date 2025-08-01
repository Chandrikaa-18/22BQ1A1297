// src/pages/StatisticsPage.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import UrlStats from '../components/UrlStats';
import logger from '../logging-middleware/logger';

const StatisticsPage = () => {
  logger.logPageView("Statistics Page");

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Statistics</Typography>
      <UrlStats />
    </Container>
  );
};

export default StatisticsPage;
