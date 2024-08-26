import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const getToken = ({_id}) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '7d'})

}

export const signup = async (req,res) =>{
    const {firstName, lastName, email, isAdmin,password} = req.body
    try{
        const user = await User.signup(firstName,lastName,email, isAdmin,password)
        res.status(201).json({user,token:getToken(user)})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const login = async (req,res) => {
    const {email,password} = req.body

    try{
        const user = await User.login(email, password)
        res.status(200).json({
            _id: user._id,
            name: user.firstName,
            email: user.email,
            isAdmin: user.isAdmin,
            token: getToken(user)
        })
    } catch (error){
        res.status(400).json({message:error.message})
    }
}