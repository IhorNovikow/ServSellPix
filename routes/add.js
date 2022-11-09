const { Router } = require("express");
const router = Router();
const addInfo = require('./routesController/post.controller')

router.post("/user", addInfo.addUser);
router.post("/game", addInfo.addGame);
router.post("/news", addInfo.addNews);


module.exports = router;
