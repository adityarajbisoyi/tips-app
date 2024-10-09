import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const aPass = "i am you";
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const homepage_path = __dirname + "/public/index.html";
const secret_page_path = __dirname + "/public/secret.html";

let passwordCorrect = false; 

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.sendFile(homepage_path);
})


app.post("/check",(req,res)=>{
    checkPassword(req,res);
    if(passwordCorrect){
        res.sendFile(secret_page_path);
    }
    else{
        res.sendFile(homepage_path);
    }
})


app.listen(port, (req,res)=>{
    console.log(`listening at port ${port}`);
})

function checkPassword(req,res){
    if(req.body.password ===  aPass){
        passwordCorrect = true;
    }
    else{
        passwordCorrect = false;
    }

}
