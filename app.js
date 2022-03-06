const express = require('express');
const app = express();
const db = require('./connection');
const postModel = require('./postModel');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/api/questions',async(req,res)=>{
    const {id,question,options,answer} = req.body;

    try{
        const newPost = await postModel.create({id,question,options,answer});
        res.json(newPost)
    } catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/questions',async(req,res)=>{
    try{
        const questions = await postModel.find();
        res.json(questions);
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/api/questions/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const post = await postModel.findById(id);
        res.json(post);
    }catch(error){
        res.status(500).send(error)
    }
})


app.listen(3000, ()=>{
    console.log('Listening to 3000')
})