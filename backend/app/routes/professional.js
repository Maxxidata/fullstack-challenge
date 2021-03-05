var express = require("express");
var router = express.Router();

const ProfessionalType = require("../controllers/ProfessionalType");
const Professional = require("../controllers/Professional");

router.post("/types", ProfessionalType.create);
router.get("/types", ProfessionalType.list);
router.get("/types/:id", ProfessionalType.getById);
router.put("/types/:id", ProfessionalType.update);

router.post("/professionals", Professional.create);
router.get("/professionals", Professional.list);
router.get("/professionals/:id", Professional.getById);
router.put("/professionals/:id", Professional.update);

module.exports = router;
