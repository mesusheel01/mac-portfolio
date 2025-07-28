import express from 'express'
import blogRouter from './routes/blogRoute'

const app = express()
const port = 5001


app.use(express.json())
app.get('/', (req,res)=>{
    res.send("Server is running here!")
})
// if a request hit /blog
app.use('/blog', blogRouter)

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})