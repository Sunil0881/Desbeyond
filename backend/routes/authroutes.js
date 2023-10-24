const express = require('express');
const { signin, signup, userDetail } = require('../controller/authcontroller');

const router = express.Router();

router.post("/signin",signin);
router.post("/userDetail",userDetail);
// router.post("/signup",signup);

module.exports = router;