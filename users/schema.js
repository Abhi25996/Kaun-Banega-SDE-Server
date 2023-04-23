import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: String,
    role: String,
    qaRequested: Boolean,
    qaApproved: Boolean,
    firstName: String,
    lastName: String,
    website: String,
    mobile: String,
    dob: String,
    following: Array,
    followers: Array,
    totalScore: Number,
    additionalInfo: String,
    questionSegregation: Object,
    correctQuestionList: Array,
    inCorrectQuestionList: Array,
    iconPath:String
}, {collection: 'users'});
export default schema;
