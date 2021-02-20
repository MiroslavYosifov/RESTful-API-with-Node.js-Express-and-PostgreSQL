import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const Workout = new Schema({
    name: { type: String }
});

export default new Model('Workout', Workout);