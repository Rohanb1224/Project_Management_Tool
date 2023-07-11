const {Router} = require("express")
const {register} = require("../controllers/RegisterController");
const router=Router();
// Registration route
router.post("/register", register);
console.log("inside registerroute");
module.exports = router;
console.log("hii");
