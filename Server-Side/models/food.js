import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const Food = new Schema({
    name: { type: String },
    kind: { type: String },
    protein: { type: Number },
    fat:  { type: Number },
    carbohydrate:  { type: Number },
    calories:  { type: Number },
    imgUrl: { type: String },
    price: { type: Number },
    availability: { type: Number }
});

export default new Model('Food', Food);