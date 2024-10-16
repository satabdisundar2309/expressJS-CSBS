const express = require('express'); //here we got the express module, now in order to make the express(left side wala) to an executable state we write the below code
const app = express();//now the express() is in executable state

// creating a server
app.get('',(req, res)=>{
    //here in the above inverted coma, there is nothing inside, hence it will refer to any random route not just only home.
    //if we write in the bwoser url "http://localhost:8000/?name=satabdi", then the below two console will show the following outputs
    console.log("data sent by browser", req.query) //data sent by browser { name: 'satabdi' }
    console.log("data sent by browser", req.query.name)//data sent by browser satabdi
    // res.send('Hello this is home page mr.')
    // res.send('<h1>Hello this is home page mr.</h1>')
    // navigating from one page to another page
    res.send('<h1>Hello this is home page mr.</h1> <a href="/about">About Page</a>')
})

app.get('/about',(req, res)=>{
    // res.send('Hello this is about page')
    //we can also render html elements like the following
    // res.send(`
    //     <input typr='text' placeholder='username'/>
    //     <button>Click me</button>
    //     <a href="/help">Help Page</a>
    //     <a href="/">Home Page</a>
    // `)

    // how to get parameters from the requested url "http://localhost:8000/about/?name=satabdisundar"

    res.send(`
    <input typr='text' placeholder='username' value=${req.query.name}/>
    <button>Click me</button>
    <a href="/help">Help Page</a>
    <a href="/">Home Page</a>
`)
})

app.get('/help',(req, res)=>{
    // res.send('Hello this is help page')
    // rendering json data
    res.send([
        {
            name: "Satabdisundar",
            email:"satabdibehera2309@gmail.com"
        },
        {
            name: "sundar",
            email:"behera2309@gmail.com"
        }
    ])
})

app.listen(8000);