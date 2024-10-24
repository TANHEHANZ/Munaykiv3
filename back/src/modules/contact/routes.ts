import { Router } from "express";
import ServiceContat from "./service";
import ContactController from "./controller";
import { ROUTES } from "../../common/constants/routes.enum";

const contactRouter = Router();
const serviceContat = new ServiceContat();
const contact = new ContactController(serviceContat);

contactRouter.get("/contact", (req, res) => contact.getItems(req, res));
contactRouter.post("/contact", (req, res) => contact.addItem(req, res));
contactRouter.put("/contact/:id", (req, res) => contact.updateItem(req, res));
contactRouter.delete("/contact/:id", (req, res) =>
  contact.deleteItem(req, res)
);

export default contactRouter;
