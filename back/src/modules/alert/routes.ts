import { Router } from "express";
import { ROUTES } from "../../common/constants/routes.enum";
import ServiceAlert from "./service";
import AlertController from "./controller";

const alertRouter = Router();
const serviceAlert = new ServiceAlert();
const alert = new AlertController(serviceAlert);

alertRouter.get(ROUTES.INITIAL, (req, res) => alert.getItems(req, res));
alertRouter.post(ROUTES.INITIAL, (req, res) => alert.addItem(req, res));
alertRouter.put(ROUTES.BYID, (req, res) => alert.updateItem(req, res));
alertRouter.delete(ROUTES.BYID, (req, res) => alert.deleteItem(req, res));

export default alertRouter;
