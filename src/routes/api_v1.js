const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/Api/V1/MusicController");

router.get("/music", (req, res) => {MusicController.get(req, res);});
router.post("/music/create",  (req, res) => {MusicController.post(req, res);});
router.put("/music/update/:id",  (req, res) => {MusicController.update(req, res);});
router.delete("/music/delete/:id", (req, res) => {MusicController.delete(req, res);});

module.exports = router;