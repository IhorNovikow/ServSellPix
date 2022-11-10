const { Router } = require("express");
const router = Router();
const Auth = require('./routesController/auth.controller')

router.post("/login", Auth.login);
router.post("/", Auth.auth);

router.get("/logout", Auth.logout);


module.exports = router;