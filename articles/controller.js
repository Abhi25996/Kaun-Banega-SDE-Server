import * as articleDao from './dao.js';

const findArticles = async (req, res) => {
    const articles = await articleDao.findAllArticles()
    res.json(articles);
}

const createArticle = async (req, res) => {
    const newArticle = req.body;
    const insertArticle = await articleDao.createArticle(newArticle);
    res.json(insertArticle);
}

const updateArticle = async (req, res) => {
    const articleIdToUpdate = req.params.aid;
    const updatedArticle = req.body;
    const status = await articleDao.updateArticle(articleIdToUpdate, updatedArticle);
    res.json(status);
}

const ArticleController = (app) => {
    app.get('/api/articles', findArticles);
    app.post('/api/articles', createArticle);
    app.put('/api/articles/:aid', updateArticle);

}

export default ArticleController
