import { Router } from "express";
import { susheelAuthenticator } from "../customMiddleware.ts";
import { prismaClient } from "@repo/db";

const blogRouter = Router()
const ps = prismaClient;

blogRouter.use(susheelAuthenticator)

blogRouter.get('/', async (req,res)=>{
    try {
       const blogs = await ps.blog.findMany();
       if(!blogs){
        res.status(200).json({
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
blogRouter.post("/", async(req, res)=>{
    const {title ,description} = req.body
    try {
        const create  = await ps.blog.create({
            data:{
                title,
                description
            }
        })
        if(!create){
            res.status(200).json({
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
blogRouter.put('/:id', async(req,res)=>{
    const id = Number(req.params.id)
    const { title, description} = req.body
    try {
        const updatedPost = await ps.blog.update({
            where: {id: id},
            data: {title, description}
        })      
        res.status(200).json({
            msg: "updated blog ", updatedPost
        }) 
    } catch (error) {
       res.status(500).json({
        msg: "Internal server Error!"
       }) 
    }
})
// delete
blogRouter.delete('/:id', async(req, res)=>{
    const id = Number(req.params.id);

    try {
        const deleteReq = await ps.blog.delete({
            where:{id}
        }) 
        res.status(200).json({
            msg: "The post has been successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Internal Server Error!'
        })
    }
})

export default blogRouter