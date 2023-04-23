import mongoose from 'mongoose';
const schema = mongoose.Schema({
    author : String,
    title: String,
    description: String,
    url: String,
    urlToImage : String,
    views : Number,
    likes : Array,
    dislikes : Array,
}, {collection: 'articles'});
export default schema;

