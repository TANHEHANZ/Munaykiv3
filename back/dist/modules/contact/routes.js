"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = __importDefault(require("./service"));
const controller_1 = __importDefault(require("./controller"));
const contactRouter = (0, express_1.Router)();
const serviceContat = new service_1.default();
const contact = new controller_1.default(serviceContat);
contactRouter.get("/contact", (req, res) => contact.getItems(req, res));
contactRouter.post("/contact", (req, res) => contact.addItem(req, res));
contactRouter.put("/contact/:id", (req, res) => contact.updateItem(req, res));
contactRouter.delete("/contact/:id", (req, res) => contact.deleteItem(req, res));
exports.default = contactRouter;
