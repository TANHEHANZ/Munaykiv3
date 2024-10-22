import { Request, Response } from "express";
import NotificationService from "./services";
import ApiResponse from "../../infrastructure/config/response";

class NotificationController {
  private notificationService: NotificationService;

  constructor(Service: NotificationService) {
    this.notificationService = Service;
  }

  async getNotifications(req: Request, res: Response) {
    const notifications = await this.notificationService.getNotifications();
    if (!notifications) {
      throw new Error("No notifications found");
    }
    return ApiResponse.success(res, "Notifications obtenida", notifications);
  }

  async addNotification(req: Request, res: Response) {
    const notification = await this.notificationService.addNotification(req.body);
    if (!notification) {
      throw new Error("Notification not created");
    }
    return ApiResponse.success(res, "Notificacion creada", notification);
  }

  async updateNotification(req: Request, res: Response) {
    try {
      const updatedNotification = await this.notificationService.updateNotification(
        req.params.id,
        req.body
      );
      return ApiResponse.success(res, "Notification updated", updatedNotification);
    } catch (error) {
      return ApiResponse.badRequest(res, "error al actualizar la notificacion", error);
    }
  }

  async deleteNotification(req: Request, res: Response) {
    try {
      const deletedNotification = await this.notificationService.deleteNotification(req.params.id);
      return ApiResponse.success(res, "Notification deleted", deletedNotification);
    } catch (error) {
      return ApiResponse.badRequest(res, "Error al eliminar la notificacion", error);
    }
  }
}

export default NotificationController;