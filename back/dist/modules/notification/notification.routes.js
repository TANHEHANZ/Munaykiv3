"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_1 = __importDefault(require("./services"));
const notification_controller_1 = __importDefault(require("./notification.controller"));
const routes_enum_1 = require("../../common/constants/routes.enum");
const notificationRouter = (0, express_1.Router)();
const notificationService = new services_1.default();
const notificationController = new notification_controller_1.default(notificationService);
notificationRouter.get(routes_enum_1.ROUTES.INITIAL, (req, res) => notificationController.getNotifications(req, res));
notificationRouter.post(routes_enum_1.ROUTES.INITIAL, (req, res) => notificationController.addNotification(req, res));
notificationRouter.put(routes_enum_1.ROUTES.BYID, (req, res) => notificationController.updateNotification(req, res));
notificationRouter.delete(routes_enum_1.ROUTES.BYID, (req, res) => notificationController.deleteNotification(req, res));
exports.default = notificationRouter;
