const path = require('path')
const express = require('express')
const app = express();

const publicPath = path.join(__dirname,'public') //this was to find the path of public folder of this current directory

// app.use(express.static(publicPath))
 //the express.static(pathname) method is used to load static pages of the given path on browser window. But the cache is, in this method we will see the extensions of the static files in the url, in order to remove those extensions we follow the below method

//  how to remove extensions of the static files from the requested url
app.get("/",(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get("/about",(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get("/contact",(req,res)=>{
    res.sendFile(`${publicPath}/contact.html`);
})
// it is not necessary that the name of the route path and the name of the file name must be same, they can be different also, like below
// app.get("/xyz",(req,res)=>{
//     res.sendFile(`${publicPath}/contact.html`);
// })//the above xyz is not same as contact

// page n ot found route
app.get("*",(req,res)=>{
    res.sendFile(`${publicPath}/pageNotFound.html`);
})

app.listen(8000);