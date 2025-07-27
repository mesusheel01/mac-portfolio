import express from 'express'

const app = express()
const port = 5001

app.get('/', (req,res)=>{
    res.send("Server is running here!")
})

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})