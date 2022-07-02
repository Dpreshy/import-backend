const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  deleteUser,
} = require("../controller/userController");

router.route("/register").post(createUser);

router.route("/").get(getUsers);

router.route("/:id").delete(deleteUser);

module.exports = router;
