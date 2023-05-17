var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup } = require("../controllers/auth");

router.post(
  "/signin",
  "/signin",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "name should be at least 3 char").isL(),
    check("password", "password should be at least 3 char").isLength({
      min: 3,
    }),
  ],
  signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
  res.json(req.auth);
});

module.exports = router;
