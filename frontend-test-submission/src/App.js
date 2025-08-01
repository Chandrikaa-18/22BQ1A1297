// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import ShortenerPage from './pages/ShortenerPage';
import StatisticsPage from './pages/StatisticsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
