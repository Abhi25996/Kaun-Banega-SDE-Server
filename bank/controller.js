import * as bankDao from './dao.js';

const createQuestion = async (req, res) => {
    const newQuestion = req.body;
    const insertQuestion = await bankDao.createQuestion(newQuestion);
    res.json(insertQuestion);
}

const findAllQuestions = async (req, res) => {
    const questions = await bankDao.findQuestions()
    res.json(questions);
}

const findQuestionsByCategory = async (req, res) => {
    const questionCategory = req.params.category;
    const questions = await bankDao.findQuestionByCategory(questionCategory)
    res.json(questions);
}

const deleteQuestion = async  (req, res) => {
    const questionId = req.params.qid;
    const status = await bankDao.deleteQuestion(questionId);
    res.json(status);
}

const BankController = (app) => {
    app.post('/api/question', createQuestion);
    app.get('/api/question', findAllQuestions);
    app.get('/api/question/:category', findQuestionsByCategory);
    app.delete('/api/question/:qid', deleteQuestion);
}

export default BankController
