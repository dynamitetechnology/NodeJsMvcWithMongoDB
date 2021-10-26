const express =  require("express");
const router =  express.Router();

const phonecontroller = require("../controllers/phone")

router.get('/',phonecontroller.getPhone)

router.post('/savecontact',phonecontroller.savePhone)

module.exports = router