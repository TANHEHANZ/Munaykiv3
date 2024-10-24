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
class NotificationController {
    constructor(Service) {
        this.notificationService = Service;
    }
    getNotifications(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const notifications = yield this.notificationService.getNotifications();
            if (!notifications) {
                throw new Error("No notifications found");
            }
            return response_1.default.success(res, "Notifications obtenida", notifications);
        });
    }
    addNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const notification = yield this.notificationService.addNotification(req.body);
            if (!notification) {
                throw new Error("Notification not created");
            }
            return response_1.default.success(res, "Notificacion creada", notification);
        });
    }
    updateNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedNotification = yield this.notificationService.updateNotification(req.params.id, req.body);
                return response_1.default.success(res, "Notification updated", updatedNotification);
            }
            catch (error) {
                return response_1.default.badRequest(res, "error al actualizar la notificacion", error);
            }
        });
    }
    deleteNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedNotification = yield this.notificationService.deleteNotification(req.params.id);
                return response_1.default.success(res, "Notification deleted", deletedNotification);
            }
            catch (error) {
                return response_1.default.badRequest(res, "Error al eliminar la notificacion", error);
            }
        });
    }
}
exports.default = NotificationController;
