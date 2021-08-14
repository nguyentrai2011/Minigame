const Student = require("../models/Student");
var student = require("../models/Student")

module.exports = function(app) {
    app.get("/", function(req, res){
        res.render("layout");
    });

    app.post("/register", function(req,res) {
        if (!req.body.email || !req.body.name || !req.body.phoneNumber) {
            res.json({status: 0, data: {msgError: "Missing required data"}})
        }
        else {
            var student = new Student({
                email: req.body.email,
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                isPaid: false,
                address: "",
                date: Date.now()
            });
            student.save(function(err){
                if (err) {
                    res.json({status: 0, data: {msgError: "Save new student error"}});
                }
                else {
                    res.json({status: 1, data: {student: student}});
                }
            })
        }
    })
}