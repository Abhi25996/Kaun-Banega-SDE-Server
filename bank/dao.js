import model from './model.js';
export const findQuestions = () => model.find();
export const findQuestionByCategory = (category) => model.find({category: category});
export const createQuestion = (question) => model.create(question);
export const deleteQuestion = (qid) => model.deleteOne({_id: qid});
