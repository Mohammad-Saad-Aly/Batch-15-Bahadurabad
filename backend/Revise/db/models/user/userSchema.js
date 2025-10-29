import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String
    },
    email: {
        type: mongoose.Schema.Types.String
    },
    password: {
        type: mongoose.Schema.Types.String
    }
})

const UserModel = mongoose.model('user', userSchema)

export default UserModel;
