//Template engine and ejs are used to render dynamic pages on browser
//dynamic pages means the pages which contains content that is added to it dynamically e.g api data use krke usko show krne wali pages...

const path = require('path')
const express = require('express')
const app = express();

const publicPath = path.join(__dirname,'public')


app.set('view engine','ejs');//this is mandatory in template engine
// now create a folder called views and it is mandatoty for all template engine packages and create the dynamic pages with an extension of ejs inside it

app.get("/",(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get("/about",(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get("/contact",(req,res)=>{
    res.sendFile(`${publicPath}/contact.html`);
})
// how to render dynamic pages
app.get("/profile",(req,res)=>{
    const users=[
        {
            name: "Satabdisundar",
            email:"satabdibehera2309@gmail.com",
            country: "India",
            skills: ['javascript','html','css','php','mySQL','python']
        },
        {
            name: "sundar",
            email:"behera2309@gmail.com",
            country: "India",
            skills: ['javascript','java','c++','php','mySQL','python']
        }
    ]
    // only rendering the dynamic page
    // res.render('profile');

    // rendering the dynamic page with data which it recieves in the profile.ejs file
    res.render('profile', {users});
})

app.get('/login',(req,res)=>{
    res.render('login')
})

// NOTE: If you try to write any route after writing the page not found route, then it will always take you to page not found. Hence alwsays write the page nopt found route after defining all the routes you want to write. 
app.get("*",(req,res)=>{
    res.sendFile(`${publicPath}/pageNotFound.html`);
})


app.listen(5000);