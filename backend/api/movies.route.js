import express from 'express';
import MoviesController from '../dao/movies.Controller.js';
import ReviewsController from './reviews.Controller.js';

const router = express.Router();

router.route('/').get(MoviesController.apiGetMovies);
router
  .route('/review')
  .post(ReviewsController.apiPostReview)
  .put(ReviewsController.apiUpdateReview)
  .delete(ReviewsController.apiDeleteReview);

export default router;
