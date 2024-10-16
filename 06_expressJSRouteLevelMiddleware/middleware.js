module.exports = reqFilter2 = (req, res, next) => {
    if (!req.query.age) {
      res.send("Please provide your age...");
    } else if (req.query.age < 20) {
      res.send("You are under age to access thuis page...");
    } else {
      next();
    }
  };