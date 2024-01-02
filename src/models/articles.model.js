import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String, required: true },
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
