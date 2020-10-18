const express =require("express");
const passport =require("passport");
const jwt = require("jsonwebtoken");
const User= require("../models/User")
const toolRoutes = require("./tools");
const router = express.Router();

router.post("/register", (request, response) => {
    const user = new User({
        username: request.body.username, 
        email: request.body.email,
        password: request.body.password
    });
    user.save()
    .then(() => {
        const token = jwt.sign({id: user.id}, "jwt_secret");
        response.json({token})
    })
    .catch(error => {
        response.status(500).json("Could not create user");
    })
});

router.post("/login", passport.authenticate("local", { session: false }), 
    (request,response) => {
        const token = jwt.sign({id: request.user.id}, "jwt_secret");
        response.json({token:token})
});

router.get("/user", passport.authenticate(
    "jwt", 
    { session: false }, 
    (request, response) => {
       if (!request.user) {
           response.json({username: "nobody"})
       } else {
           response.json({username: request.user.username})
       }
}));

// Tool routes
router.use("/tools", toolRoutes);

module.exports = router;