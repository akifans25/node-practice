import express from "express"
var app = express()
import mongoose from "mongoose"
import { Blog } from "./model.js";
// const path = require('path');
import path from "path"

// import ejs

const __dirname = path.resolve();
// const MongoClient = require('mongodb').MongoClient

mongoose.connect(
    "mongodb://localhost:27017/", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());


app.get("/addBlog",async (req,res)=>{
    // const blog = await Blog.create({
    //     title:"This is my title",
    //     dateandtime:"18/2/2024",
    //     body:"this is my new body",
    //     user: "ajay"
    // })
    
    // blog.save()
    console.log("getting....")
    // res.send(blog)
    res.render("addBlog")
})

app.post("/addblog",async (req,res)=>{
    console.log("requesting........")
    console.log(req.body)
    const data = await Blog.create(req.body)
    data.save()
    res.render("addblog")
})


app.get("/",async (req,res)=>{
    const data = {
        // data:[
        //     {
        //         "name":"aman",
        //         "class":"12"
        //     },
        //     {
        //         "name":"arun",
        //         "class":"11"
        //     },
        //     {
        //         "name":"ankit",
        //         "class":"20"
        //     }                        
        // ]

    }

    const data1 = await Blog.find({})
    // console.log(data1)
    // res.json(data1)
    // res.sendFile(path.join(__dirname, 'template/index.html'),{"blogs":data1});
    res.render("index",{blogs:data1})
    // Blog.find({})
    // .then((data)=>{

    // })
    // .catch(err=>{

    // })

    // res.json({"data":data1})
})


app.get("/blog/:blogname",(req,res)=>{
    let myparams = req.params.blogname
    res.send(`<h1>${myparams}</h1>`)
})

app.get("/sum/:num1/:num2",(req,res)=>{
    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)
    console.log(num1+num2)

    let sm = 0;
    let lst = []

    // for(num1;num1<num2;num1++){
    //     sm+=num1
    // }

    // for(let i=0;i<lst.length;i++)
    // {
    //     lst[i]
    // }

    

    res.send(`<h1>your sum is ${num1+num2}</h1>`)
})



app.listen(3000,()=>{
    console.log("project is run on localhost:3000")
})
