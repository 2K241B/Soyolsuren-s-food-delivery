import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const SECRET_KEY = process.env.PRIVATEKEY

export const checkToken = (req, res, next) => {
    if(req.headers.cookie){
        const token = req.headers.cookie.split("=")[1]
        const isToken = jwt.verify(token, SECRET_KEY)
        req.body = isToken
        next()
        return
    }
    return res.status(403).send({error : "invalid token"})
}