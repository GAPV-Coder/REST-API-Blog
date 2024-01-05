import Article from '../models/articles.model.js';

export const createArticleService = async (articleData) => {
    try {
        const newArticle = new Article(articleData);
        await newArticle.save();
        return newArticle;
    } catch (error) {
        throw new Error(`Error creating article: ${error.message}`);
    }
};

export const getArticlesService = async () => {
    try {
        const articles = await Article.find().sort({ date: -1 });

        if (!articles) {
            throw new Error('Articles not found', 404);
        }

        return articles;
    } catch (error) {
        throw new Error(`Error retrieving items: ${error.message}`, 500);
    }
};

export const getArticleByIdService = async (articleId) => {
    try {
        const article = await Article.findById(articleId);

        if (!article) {
            throw new Error('Article not found', 404);
        }

        return article;
    } catch (error) {
        throw new Error(`Error getting article by id: ${error.message}`);
    }
};

export const updateArticleService = async (articleId, updatedArticleData) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            articleId,
            { $set: updatedArticleData },
            { new: true },
        );

        if (!updatedArticle) {
            throw new Error(`Failed to update the article`);
        }

        return updatedArticle;
    } catch (error) {
        throw new Error(`Error updating article: ${error.message}`);
    }
};
