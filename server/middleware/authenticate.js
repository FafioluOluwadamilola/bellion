import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
    const {Authentication} = req.header

    if(!Authentication){
        return res.status(404).json({error: "No Authentication"})
    }

    const token = Authentication.split(" ")[1]

    if(!token){
        return res.status(401).json({error: "No token provided"})
    }
    try{
        const {_id}  = jwt.verify(token, process.env.JWT_SECRET)
            if(!_id){
                return res.status(403).json({error: "Invalid user"})
            }

            const user = User.findById(_id)

            if(!user){
                return res.status(404).json({error: "Invalid User"})
        }

        req.user = user

        next()

    }catch(error){
        res.status(404).json({error: "Cannot verify user"})
    }
    
} 

