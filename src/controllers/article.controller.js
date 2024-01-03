import { createArticleService } from '../services/article.services.js';

export const createArticleController = async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const articleData = { title, content, image };

        const newArticle = await createArticleService(articleData);

        res.status(201).json({
            message: 'Successfully created article',
            data: newArticle,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
