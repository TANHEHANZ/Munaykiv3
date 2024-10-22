import { Router } from "express";
import NotificationService from "./services";
import NotificationController from "./notification.controller";
import { ROUTES } from "../../common/constants/routes.enum";

const notificationRouter = Router();
const notificationService = new NotificationService();
const notificationController = new NotificationController(notificationService);

notificationRouter.get(ROUTES.INITIAL, (req, res) => notificationController.getNotifications(req, res));
notificationRouter.post(ROUTES.INITIAL, (req, res) => notificationController.addNotification(req, res));
notificationRouter.put(ROUTES.BYID, (req, res) => notificationController.updateNotification(req, res));
notificationRouter.delete(ROUTES.BYID, (req, res) => notificationController.deleteNotification(req, res));

export default notificationRouter;