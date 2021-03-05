var express = require("express");
var router = express.Router();

const ProfessionalType = require("../controllers/ProfessionalType");

router.post("/types", ProfessionalType.create);
router.get("/types", ProfessionalType.list);
router.get("/types/:id", ProfessionalType.getById);
router.put("/types/:id", ProfessionalType.update);

module.exports = router;
