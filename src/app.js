import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
var tasks;
var dt;
var gb_tasks = {};

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({"extended" : true}));

function isValid(req,res){
    tasks = req.body["val"];
    dt = (req.body["date"]);
    if(tasks == "") return false;

    gb_tasks[dt] = tasks.split(",");
    return true;
}

app.get("/",(req,res)=>{
    res.render("index.ejs",{
    });
});
app.get("/Viewlist",(req,res)=>{
    res.render("ViewList.ejs",{
        value:gb_tasks
    });
});

app.post("/submit",(req,res)=>{
    res.render("success.ejs",{
        value:isValid(req,res)
    });
   
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})