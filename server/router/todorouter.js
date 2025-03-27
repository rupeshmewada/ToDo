import express from "express"
import * as todoController from "../controller/todo.controller.js"
const router = express.Router();

router.get("/",todoController.getdata)
router.post("/",todoController.postdata)
router.delete("/:id",todoController.deletedata)
router.patch("/:id",todoController.updatedata)

export default router
