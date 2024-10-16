// !ROUTE LEVEL MIDDLEWARE
//?this  middleware is used tro apply middleware on particular routes i.e either single routes, or multiple routes, or every route

const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide your age...");
  } else if (req.query.age < 18) {
    res.send("You are under age to access thuis page...");
  } else {
    next();
  }
};

// THE BELOW TWO ROUTES DONT HAVE ANY MIDDLEWARE
app.get("/", (req, res) => {
  res.send("WElcome to home page");
});
app.get("/contact", (req, res) => {
    res.send("WElcome to contact page");
  });

  // using the reqFilter middleware in partricular routes
// using the reqFilter middleware in /user route
app.get("/user",reqFilter, (req, res) => {
  res.send("WElcome to user page");
});
// using the reqFilter middleware in /about route
app.get("/about",reqFilter, (req, res) => {
  res.send("WElcome to about page");
});



// ACCESSING MIDDLEWARES PRESENT IN A DIFFERENT FILE
const reqFilter2 = require('./middleware')
app.get("/help",reqFilter2, (req, res) => {
  res.send("WElcome to help page");
});

// APPLYING MIDDLEWARE TO A POARTICULAR GROUP OF ROUTES USING A DIFFERENT WAY
const route =express.Router();
route.use(reqFilter2)
route.get("/courses", (req, res) => {
  res.send("WElcome to courses page");
});
route.get("/profile", (req, res) => {
  res.send("WElcome to profile page");
});
app.use('/',route) //this line will make sure that reqFilter2 middleware will work upon the above two routes i.e. /courses, /profile

app.listen(8000);
