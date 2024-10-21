// import { Router } from "express";
// import CategoriaController from "../controller/productos/categorias.controller";
// import CategoriService from "../service/categoriaService";
// import verifyToken from "../../../middleware/token";
// import { ROUTES } from "../../../common/utils/routes.enum";

// const router = Router();
// const categoriaService = new CategoriService();
// const categoriaController = new CategoriaController(categoriaService);

// router.get(ROUTES.INITIAL, verifyToken, (req, res) =>
//   categoriaController.getItems(req, res)
// );
// router.post(ROUTES.INITIAL, (req, res) =>
//   categoriaController.addItem(req, res)
// );
// router.put(ROUTES.BYID, (req, res) => categoriaController.updateItem(req, res));
// router.delete(ROUTES.BYID, (req, res) =>
//   categoriaController.deleteItem(req, res)
// );

// export default router;
