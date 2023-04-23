import mongoose from 'mongoose';
const schema = mongoose.Schema({
    category: String,
    question: String,
    options: Array,
    correct: String,
    completeAnswer: String
}, {collection: 'bank'});

export default schema;
