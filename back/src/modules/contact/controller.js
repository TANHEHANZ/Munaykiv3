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
class ContactController {
    constructor(Service) {
        this.contactService = Service;
    }
    getItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.contactService.getItems();
            if (!items) {
                throw new Error("Items not found");
            }
            return response_1.default.success(res, "contactos obtenidos", items);
        });
    }
    addItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.contactService.addItem(req.body);
            if (!item) {
                throw new Error("Items not found");
            }
            return response_1.default.success(res, "contactos obtenidos", item);
        });
    }
    updateItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedItem = yield this.contactService.updateItem(req.params.id, req.body);
                return response_1.default.success(res, "contactos obtenidos", updatedItem);
            }
            catch (error) {
                return response_1.default.badRequest(res, "Error al traer los datos ", error);
            }
        });
    }
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield this.contactService.deleteItem(req.params.id);
                return response_1.default.success(res, "contactos eliminados", deleted);
            }
            catch (error) {
                return response_1.default.badRequest(res, "Error al traer los datos ", error);
            }
        });
    }
}
exports.default = ContactController;
