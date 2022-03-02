const express = require("express")
const { getAll } = require('../controllers/fetchDataController')
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth")
const router = express.Router()

router.route("/fetch").get(isAuthenticatedUser, authorizeRoles("admin", "user"), getAll)

module.exports = router