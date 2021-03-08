const express = require("express");

const router = express.Router();

const EmployeeController = require("./controllers/EmployeeController");
const EmployeeTypeController = require("./controllers/EmployeeTypeController");

router.get("/", function(req, res) {
    res.send({
        message: "It Works!!! 🎉",
    });
});

router.get("/employees", EmployeeController.index);
router.get("/employees/:id", EmployeeController.show);
router.post("/employees", EmployeeController.create);
router.patch("/employees/:id", EmployeeController.update);
router.delete("/employees/:id", EmployeeController.remove);

router.get("/employee-types", EmployeeTypeController.index);
router.get("/employee-types/:id", EmployeeTypeController.show);
router.post("/employee-types", EmployeeTypeController.create);
router.patch("/employee-types/:id", EmployeeTypeController.update);
router.delete("/employee-types/:id", EmployeeTypeController.remove);

module.exports = router;
