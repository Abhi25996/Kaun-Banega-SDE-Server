import model from './model.js';
export const findAllArticles = () => model.find();
export const createArticle = (articleInformation) => model.create(articleInformation);
export const updateArticle = (aid, articleInformation) => model.updateOne({_id: aid}, {$set: articleInformation})