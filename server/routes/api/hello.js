import hello from "../../controllers/hello.controller"

const express = require("express")
const router = express.Router()

router.get("/", hello)

export default router
