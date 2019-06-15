var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Goal.findAll({}).then(function(dbGoals) {
      res.render("index", {
        msg: "Welcome!",
        goals: dbGoals
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/goal/:id", function(req, res) {
    db.Goal.findOne({ where: { id: req.params.id } }).then(function(dbGoal) {
      res.render("example", { //Question about this one!!!!!
       goal: dbGoal
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
