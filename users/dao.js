import model from './model.js';
export const findUser = () => model.find();
export const findUserById = (uid) => model.find({_id: uid});
export const findUserByUsername = (userName) => model.findOne({ userName: userName });
export const findUserByCredentials = (username, password) => model.findOne({ userName: username, password: password });
export const createUser = (user) => model.create(user);
export const deleteUser = (uid) => model.deleteOne({_id: uid});
export const updateUser = (uid, user) => model.updateOne({_id: uid}, {$set: user})