const { Router } = require("express");
const router = Router();
const GetInfo = require('./routesController/get.controller')

router.get("/users", GetInfo.getUser);
router.get("/games", GetInfo.getGame);
router.get("/news", GetInfo.getNews);


module.exports = router;