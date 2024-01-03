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
