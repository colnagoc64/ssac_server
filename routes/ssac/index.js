var express = require("express");
var router = express.Router();
const authController = require("../../controllers/ssac/auth/authController");
const boardController = require("../../controllers/ssac/board/boardController");

// membership 업로드
router.post("/", authController.signup);
router.post("/", authController.singin);

router.get("/", boardController.readAlldata);
router.get("/:idx", boardController.readIdxData);
router.post("/", boardController.saveData);
router.delete("/:idx", boardController.deleteData);

module.exports = router;
