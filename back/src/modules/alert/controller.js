"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../../infrastructure/config/response"));
class AlertController {
    constructor(Service) {
        this.alert = Service;
    }
    getItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.alert.getItems();
                return response_1.default.success(res, "Alerta obtenidos", items);
            }
            catch (error) {
                return response_1.default.badRequest(res, "Error de servidor", error);
            }
        });
    }
    addItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.alert.addItem(req.body);
                return response_1.default.success(res, "Alerta obtenidos", item);
            }
            catch (error) {
                return response_1.default.badRequest(res, "Error en el servidor", error);
            }
        });
    }
    updateItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedItem = yield this.alert.updateItem(req.params.id, req.body);
                return response_1.default.success(res, "Alerta obtenidos", updatedItem);
            }
            catch (error) {
                return response_1.default.badRequest(res, "Error al traer los datos ", error);
            }
        });
    }
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield this.alert.deleteItem(req.params.id);
                return response_1.default.success(res, "Alerta eliminados", deleted);
            }
            catch (error) {
                return response_1.default.badRequest(res, "Error al traer los datos ", error);
            }
        });
    }
}
exports.default = AlertController;
