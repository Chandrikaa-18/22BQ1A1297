// src/components/UrlStats.jsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const dummyStats = [
  { url: 'https://example.com', shortened: 'abc123', clicks: 5 },
  { url: 'https://openai.com', shortened: 'openai', clicks: 12 },
];

const UrlStats = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Original URL</TableCell>
        <TableCell>Short Code</TableCell>
        <TableCell>Clicks</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {dummyStats.map((row, index) => (
        <TableRow key={index}>
          <TableCell>{row.url}</TableCell>
          <TableCell>{row.shortened}</TableCell>
          <TableCell>{row.clicks}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default UrlStats;
