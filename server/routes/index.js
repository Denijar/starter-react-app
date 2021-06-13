import api from "./api"

const express = require("express")
const router = express.Router()

router.use("/api", api)

export default router
