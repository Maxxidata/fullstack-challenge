const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.send({
    message: "It Works!!! 🎉",
  });
});

module.exports = router;
