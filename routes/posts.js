const express=require('express');
const router=express.Router();
const Post=require('../models/Post');

//Getting all records
router.get('/', async (req, res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//Save a new record
router.post('/', async (req, res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost=await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }
});

//Getting record by id
router.get('/:postId', async (req, res)=>{
    //console.log(req.params.postId);
    try{
        const post=await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//Deleting record by id
router.delete('/:postId', async (req, res)=>{
    //console.log(req.params.postId);
    try{
        //const removedPost=await Post.remove({_id:req.params.postId});
        const removedPost=await Post.deleteOne({_id:req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});

//Updating an existing data
router.patch('/:postId', async (req, res)=>{
    try{
        const updatedPost=await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title, description:req.body.description}});
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});


module.exports=router;