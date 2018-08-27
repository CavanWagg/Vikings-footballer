// Dependencies Required 
// const express = require("express");
// const router = express.Router();

// var path = require("path");
// Import model to use its databse functions
const Sequelize = require("sequelize");  
const express = require("express");
const db = require("../models"); 

module.exports = function(app) {


// * Get all teams
    app.get("/", (req, res) => {
        // the actual functionality of the app
        res.render("index");
    })

    app.get("/game", (req, res) => {
        db.teams.findAll({
            // attributes: ['team_name']
        })
        .then((data) => {  
            const teamsObject = {
                teams: data
            };
            // console.log('teamsObject', teamsObject);
            // eventually render this info
            res.render("game", teamsObject)
        });
    });

    app.get("/about", (req, res) => {
        // the actual functionality of the app
        res.render("about");
    })

// // * Get selected team data
//     app.get("/team", function(req, res){
//         db.team.findOne
//     })



// * Get all user data
    app.get("/user", (req, res) => { 
        db.user.findAll({})
        .then((dbUser) => {  
            res.json(dbUser);
        });
    });


    // * Get top 10 scores 
    app.get("/leaderboard", (req, res) => {
        // a leaderboard of all the high scores
        db.user.findAll({ limit: 10, order: [['points', 'DESC'],],})
        .then((top) => {  
            // console.log(top);
            const userobj = {
                users : top
            };
            // console.log(userobj);
            res.render("leaderboard", userobj)
    });

});
    // * Post new User to user table
    app.post("/api/users", (req, res) => {
        console.log(req.body);
        db.user.create({
            username: req.body.username,
            // ? Will we post after user has played and their score has been calculated?
            points: req.body.points,
            yards: req.body.yards
        })
        .then((dbPost) => { 
            console.log('redirect???');
            // res.json(dbPost);
            // redirect to leaderboard
            res.redirect("/leaderboard");
        });
    });
};

