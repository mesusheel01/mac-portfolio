import { Request,Response, NextFunction } from "express"


export const susheelAuthenticator = (req:Request,res:Response,next:NextFunction)=>{
    const token = String(req.query.token ?? "").trim()
    try {
        if(token.length === 7){
            next()
        }
    } catch (error) {
        res.json({
            msg: "Token not found!"
        })
    }
}