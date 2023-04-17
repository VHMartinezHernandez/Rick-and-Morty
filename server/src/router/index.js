// const { Router } = require("express");
// const userRouter = require("./userRouter");
// const postsRouter = require("./postsRouter");

// const router = Router();

// router.use("/users", userRouter);

// router.use("/posts", postsRouter);


// module.exports = router;

//******************************************** */

const express = require("express");
const router = express.Router();

const characters = require("./characters");
const favorites = require("./favorites");
const login = require("./login");

router.use("/character", characters);
router.use("/favorite", favorites);
router.use("/login", login);

module.exports = router;