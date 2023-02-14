import express from 'express';
import MoviesController from '../dao/movies.Controller.js';

const router = express.Router();

router.route('/').get(MoviesController.apiGetMovies);

export default router;
