const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "mara ethan rocco", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);

// Requiring our routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect("mongodb://localhost:27017/passport", {
    useNewUrlParser:true, 
    useCreateIndex: true
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
