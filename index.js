const express =require("express");
const ejs=require("ejs");

const port=1200;
const app=express();

app.use(express.static("public/"))

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
app.get("/education",(req,res)=>{
    res.render("Education.ejs");
});
app.get("/skills",(req,res)=>{
    res.render("skills.ejs");
});
app.get("/project",(req,res)=>{
    res.render("project.ejs");
});
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});

app.listen(port,(req,res)=>{
    console.log(`runn server ${port} number`);
})