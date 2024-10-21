import { Router } from "express";
import { ROUTES } from "../../../common/constants/routes.enum";
import UserService from "../service/userService";



const router = Router();
// const inventoryService = new InventoryService();
// const tipoProductoService = new TipoProductoService();
const inicialiceController = new UserService();
// const tipoProductoController = new TipoProductoController(tipoProductoService);

// // ----------------------- user Routes --------------------
router.get(ROUTES.USER, (req, res) => inicialiceController.getItems());
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

export default router;
