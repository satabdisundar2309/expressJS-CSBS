//! MIDDLEWARE
//? middlewares in express are functions which are only used, remember only used with routes to access and modify the request and response. For example validating and authgenticating the login info of an user, or blocking the site in a particular country etc..

//! TYPES OF MIDDLEWARE
//? application level middleware
//? router level middleware
//? error handleing middleware
//? built in middleware
//? third party middleware


// now we will create an application level  middleware,    // this middleware will work for every route

const express = require('express')
const app = express();


// creating a middleware
// creating middleware in the same file
// const reqFilter = (req,res,next)=>{
//     // the above three parameters are mandatory
//     console.log('reqfilter')
//     next(); //if you dont call this next function, then the page wont load at all, hence it is required to call this next() function
//
// }
const reqFilter = (req,res,next)=>{
   if(!req.query.age){
    res.send('Please provide your age...')
   }
   else if(req.query.age < 18){
    res.send('You are under age to access thuis page...')
   }
    // next();//we cant directly use next() like this, it will give error, hence we have to put it in the else part...
    else{
        next();
    }
}

// using the middleware
app.use(reqFilter) //this particular line applies the reqFilter middleware to every route

app.get('/',(req,res)=>{
        res.send('WElcome to home page');
})
app.get('/user',(req,res)=>{
        res.send('WElcome to user page');
})
app.get('/about',(req,res)=>{
        res.send('WElcome to about page');
})
app.listen(8000)