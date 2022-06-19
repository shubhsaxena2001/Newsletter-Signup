const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.post("/", (req, res)=>{
    console.log(req.body.fname, req.body.lname, req.body.email);
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000");
})

//API Key
//baee4510cd948aa27cfe618535f22591-us17