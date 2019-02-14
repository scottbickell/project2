var db = require("../models");

module.exports = function (app) {
    // Load index page
      app.get("/", function(req, res) {
        db.tasks.findAll({}).then(function(dbTasks) {
          res.render("index", {
            msg: "Task Tracker App",
            tasks: dbTasks
          });
        });
      });

    // Load task page and pass in an task by id
    app.get("/task/:id", function (req, res) {
        db.tasks.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbTask) {
            res.render("task", {
                task: dbTask
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};