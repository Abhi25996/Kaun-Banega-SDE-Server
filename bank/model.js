import mongoose from 'mongoose';
import schema from './schema.js'
const model = mongoose
    .model('bankModel', schema);
export default model;