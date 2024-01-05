import {
    createArticleService,
    getArticleByIdService,
    getArticlesService,
} from '../services/article.services.js';

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

export const getArticlesController = async (req, res) => {
    try {
        const articles = await getArticlesService();
        if (req.params.last_articles) {
            articles.limit(3);
        }

        res.status(201).json({
            message: 'Items successfully listed',
            last_items: articles.length,
            data: articles,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getArticleByIdController = async (req, res) => {
    try {
        const { id: articleId } = req.params;
        const article = await getArticleByIdService(articleId);

        res.status(201).json({
            message: 'Successful user query',
            data: article,
        });
    } catch (error) {
        res.status(500).json({ error: 'The specified article does not exist' });
    }
};
