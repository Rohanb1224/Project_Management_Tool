// LoginRoute.js
const {Router} = require("express")
const router = Router();
const {login} = require('../controllers/LoginController');

// Login route
router.post('/login', login);
console.log("inside logincontrol");
module.exports = router;
