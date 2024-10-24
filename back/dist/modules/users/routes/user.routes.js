"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_enum_1 = require("../../../common/constants/routes.enum");
const userService_1 = __importDefault(require("../service/userService"));
const router = (0, express_1.Router)();
// const inventoryService = new InventoryService();
// const tipoProductoService = new TipoProductoService();
const inicialiceController = new userService_1.default();
// const tipoProductoController = new TipoProductoController(tipoProductoService);
// // ----------------------- user Routes --------------------
router.get(routes_enum_1.ROUTES.USER, (req, res) => inicialiceController.getItems());
// router.post(ROUTES.INITIAL, (req, res) =>
//   inventoryController.addItem(req, res)
// );
// router.put(ROUTES.BYID, (req, res) => inventoryController.updateItem(req, res));
// router.delete(ROUTES.BYID, (req, res) =>
//   inventoryController.deleteItem(req, res)
// );
// //-------------------- add type product
// router.get(ROUTES.INITIAL, (req, res) =>
//   tipoProductoController.getItems(req, res)
// );
// router.post(ROUTES.INITIAL, (req, res) =>
//   tipoProductoController.addItem(req, res)
// );
// router.put(ROUTES.BYID, (req, res) =>
//   tipoProductoController.updateItem(req, res)
// );
// router.delete(ROUTES.BYID, (req, res) =>
//   tipoProductoController.deleteItem(req, res)
// );
exports.default = router;
