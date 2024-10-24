"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = __importDefault(require("./service"));
const controller_1 = __importDefault(require("./controller"));
const routes_enum_1 = require("../../common/constants/routes.enum");
const contactRouter = (0, express_1.Router)();
const serviceContat = new service_1.default();
const contact = new controller_1.default(serviceContat);
contactRouter.get(routes_enum_1.ROUTES.INITIAL, (req, res) => contact.getItems(req, res));
contactRouter.post(routes_enum_1.ROUTES.INITIAL, (req, res) => contact.addItem(req, res));
contactRouter.put(routes_enum_1.ROUTES.BYID, (req, res) => contact.updateItem(req, res));
contactRouter.delete(routes_enum_1.ROUTES.BYID, (req, res) => contact.deleteItem(req, res));
exports.default = contactRouter;
