"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_enum_1 = require("../../common/constants/routes.enum");
const service_1 = __importDefault(require("./service"));
const controller_1 = __importDefault(require("./controller"));
const alertRouter = (0, express_1.Router)();
const serviceAlert = new service_1.default();
const alert = new controller_1.default(serviceAlert);
alertRouter.get(routes_enum_1.ROUTES.INITIAL, (req, res) => alert.getItems(req, res));
alertRouter.post(routes_enum_1.ROUTES.INITIAL, (req, res) => alert.addItem(req, res));
alertRouter.put(routes_enum_1.ROUTES.BYID, (req, res) => alert.updateItem(req, res));
alertRouter.delete(routes_enum_1.ROUTES.BYID, (req, res) => alert.deleteItem(req, res));
exports.default = alertRouter;
