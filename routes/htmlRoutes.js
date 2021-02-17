const router = require("express").Router();
const { resolve4 } = require("dns");
const path = require("path");

router.get("/exercise", (req, res) => {

    resolve4.sendFile(path.join(__dirname, "../public/exercise.html"));

});

module.exports = router;