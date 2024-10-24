import { Router } from "express";
import { ROUTES } from "../../common/constants/routes.enum";
import ServiceAlert from "./service";
import AlertController from "./controller";

const alertRouter = Router();
const serviceAlert = new ServiceAlert();
const alert = new AlertController(serviceAlert);

alertRouter.get("/alert", (req, res) => alert.getItems(req, res));
alertRouter.post("/alert", (req, res) => alert.addItem(req, res));
alertRouter.put("/alert/:id", (req, res) => alert.updateItem(req, res));
alertRouter.delete("/alert/:id", (req, res) => alert.deleteItem(req, res));

export default alertRouter;
