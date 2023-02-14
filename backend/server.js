import express from 'express';
import cors from 'cors';
import movies from './api/movies.route.js';
//server
const app = express();
//middleware
app.use(cors());
app.use(express.json());
//routes
app.use('/api/v1/movies', movies);
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

export default app;
