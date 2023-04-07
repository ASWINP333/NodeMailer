const express = require('express')
const { mailAFriend } = require('../controllers/mailcontroller')
const router = express.Router()

router.route("/create").post(mailAFriend);


module.exports = router