import { Router } from "express";
import * as railcarController from "../controllers/railcar.controller.js"
const router = Router();

router.route("/railcars")
    .get(railcarController.getAllRailcars)
    .post(railcarController.createRailcar);

router.route("/railcars/:id")
    .get(railcarController.getOneRailcarById)
    .delete(railcarController.deletById)
    .put(railcarController.updateRailcarById);

export default router;