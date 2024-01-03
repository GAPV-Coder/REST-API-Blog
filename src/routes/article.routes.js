import express from 'express';
import { createArticleController } from '../controllers/article.controller.js';
import { articleValidation } from '../middlewares/validations.middleware.js';

const router = express.Router();

router.post('/create', articleValidation, createArticleController);

export default router;
