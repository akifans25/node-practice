var express = require("express")

var app = express()


app.get("/",(req,res)=>{
    const data = {
        data:[
            {
                "name":"aman",
                "class":"12"
            },
            {
                "name":"arun",
                "class":"11"
            },
            {
                "name":"ankit",
                "class":"20"
            }                        
        ]

    }
    res.json({"data":data})
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
