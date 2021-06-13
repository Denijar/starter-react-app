import hello from "./hello"

const express = require("express")
const router = express.Router()

router.use("/hello", hello)

export default router
