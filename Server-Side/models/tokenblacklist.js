import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const TokenBlacklist = new Schema({
    token: String
});

export default new Model('TokenBlacklist', TokenBlacklist);