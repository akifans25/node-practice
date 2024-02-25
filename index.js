import express from "express"
var app = express()
import mongoose from "mongoose"
import { Blog } from "./model.js";
import path from "path"

const __dirname = path.resolve();

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
app.use(express.static(__dirname + '/style'));


app.post("/addblog",async (req,res)=>{
    console.log("requesting........")
    console.log(req.body)
    req.body._id = 10
    const data = await Blog.create(req.body)
    data.save()
    res.render("addBlog")
})


app.get("/",async (req,res)=>{

    const data1 = await Blog.find({})
    res.render("index",{blogs:data1})

})


app.get("/blog/:id",async (req,res)=>{
    let blog_id = req.params.id
    const res_ = await Blog.findById(blog_id)
    // res.send(`<h1>${res_}</h1>`)
    res.render("detail",{blog:res_})
})



app.listen(3000,()=>{
    console.log("project is run on localhost:3000")
})
