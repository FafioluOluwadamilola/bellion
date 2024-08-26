import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.statics.signup = async function(firstName,lastName,email,isAdmin,password){
    if(!firstName || !lastName || !email || !password){
        throw new Error('Please provide fill the required information')
    }
    if(!validator.isEmail(email)){
        throw new Error('Please provide a valid email')
    }
    const exists = await this.findOne({email})

    if(exists){
        throw new Error('Email already in use')
    }

    if(!validator.isStrongPassword(password)){
        throw new Error(`Password must be at least 8 characters long, contain at least one lowercase
        letter, one uppercase letter, one number, and one special character`)
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new this({
        firstName,
        lastName,
        email,
        isAdmin,
        password: hashedPassword,
    })
    return newUser.save()
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password){
        throw new Error('Please provide both email and password')
    }
    const user = await this.findOne({email})
    if(!user){
        throw new Error('User does not exist')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch){
        throw new Error('Invalid Password')
    }

    return user
}

const User = mongoose.model('users', userSchema)

export default User