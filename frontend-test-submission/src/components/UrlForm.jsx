// src/components/UrlForm.jsx
import React, { useState } from 'react';
import { Button, TextField, Stack } from '@mui/material';
import logger from '../logging-middleware/logger';

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [validity, setValidity] = useState('');

  const handleSubmit = async () => {
    logger.logButtonClick("Shorten URL Button");
    logger.logApiRequest("/shorten", "POST");

    // Fake response
    setTimeout(() => {
      logger.logApiResponse("/shorten", 200);
      alert("URL shortened successfully!");
    }, 1000);
  };

  return (
    <Stack spacing={2}>
      <TextField label="Original URL" value={url} onChange={(e) => setUrl(e.target.value)} fullWidth />
      <TextField label="Custom Code (optional)" value={customCode} onChange={(e) => setCustomCode(e.target.value)} fullWidth />
      <TextField label="Validity (in days)" value={validity} onChange={(e) => setValidity(e.target.value)} fullWidth />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Stack>
  );
};

export default UrlForm;
