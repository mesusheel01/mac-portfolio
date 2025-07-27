import { Router } from "express";
import { susheelAuthenticator } from "../customMiddleware.ts";
import {prismaClient} from '@repo/db'

const blog = Router()
const ps = prismaClient;

blog.use(susheelAuthenticator)

blog.get('/', async (req,res)=>{
    try {
       const blogs = await ps.blog.findMany();
       if(!blogs){
        res.status(404).json({
            msg: "No blogs found!"
        })
        return ;
       }
       res.status(200).json({
        allBlogs: blogs
       })
    } catch (e) {
        res.status(500).json({
            msg: "Internal server error!"
        })
    }
})

//post
blog.post("/id", async(req, res)=>{
    const {title ,description} = req.body
    try {
        const create  = await ps.blog.create({
            data:{
                title,
                description
            }
        })
        if(!create){
            res.status(404).json({
                msg: "No blogs found!"
            })
            return;
        }
        res.status(201).json({
            msg: "Blog has been successfully created!"
        })
    } catch (error) {
        res.status(500).json({
            msg:"Internal Server Error!"
        })
    }
})

// put
blog.put('/id', async(req,res)=>{
    const {id, title, description} = req.body
    try {
        const existingBlog = await ps.blog.find(id);
        
    } catch (error) {
        
    }
})