import express from 'express';
import {
    createArticleController,
    getArticlesController,
} from '../controllers/article.controller.js';
import { articleValidation } from '../middlewares/validations.middleware.js';

const router = express.Router();

router.post('/create', articleValidation, createArticleController);

router.get('/all-articles/:last_articles?', getArticlesController);

export default router;
