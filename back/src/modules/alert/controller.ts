import { Request, Response } from "express";
import ApiResponse from "../../infrastructure/config/response";
import ServiceAlert from "./service";

class AlertController {
  private alert: ServiceAlert;
  constructor(Service: ServiceAlert) {
    this.alert = Service;
  }

  async getItems(req: Request, res: Response) {
    try {
      const items = await this.alert.getItems();
      return ApiResponse.success(res, "Alerta obtenidos", items);
    } catch (error) {
      return ApiResponse.badRequest(res, "Error de servidor", error);
    }
  }

  async addItem(req: Request, res: Response) {
    try {
      const item = await this.alert.addItem(req.body);
      return ApiResponse.success(res, "Alerta obtenidos", item);
    } catch (error) {
      return ApiResponse.badRequest(res, "Error en el servidor", error);
    }
  }

  async updateItem(req: Request, res: Response) {
    try {
      const updatedItem = await this.alert.updateItem(req.params.id, req.body);
      return ApiResponse.success(res, "Alerta obtenidos", updatedItem);
    } catch (error) {
      return ApiResponse.badRequest(res, "Error al traer los datos ", error);
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      const deleted = await this.alert.deleteItem(req.params.id);
      return ApiResponse.success(res, "Alerta eliminados", deleted);
    } catch (error) {
      return ApiResponse.badRequest(res, "Error al traer los datos ", error);
    }
  }
}

export default AlertController;
