import mongoose from 'mongoose';
import bcrypt  from 'bcrypt';
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const User = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, require: true },
    email: { type: String, unique: true, required: true },
    roles: []
});

User.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
};

User.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

export default new Model('User', User);