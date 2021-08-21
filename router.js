const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const postController = require("./controllers/postController");

// user related routes
router.get("/", userController.home);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

// posts related routes
router.get(
  "/create-post",
  userController.mustBeLoggedIn,
  postController.viewCreateScreen
);

router.post('/create-post',userController.mustBeLoggedIn,postController.create)
router.get('/view-all-posts',userController.mustBeLoggedIn,postController.viewAllPosts)

module.exports = router;