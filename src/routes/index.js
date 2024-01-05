import { Router } from 'express';
import articleRoutes from './article.routes.js';

const routerApi = Router();

routerApi.use('/articles', articleRoutes);

export default routerApi;
