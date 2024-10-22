import { Request, Response } from "express";
import ServiceContat from "./service";
import ApiResponse from "../../infrastructure/config/response";

class ContactController {
  private contactService: ServiceContat;

  constructor(Service: ServiceContat) {
    this.contactService = Service;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.contactService.getItems();
    if (!items) {
      throw new Error("Items not found");
    }
    return ApiResponse.success(res, "contactos obtenidos", items);
  }

  async addItem(req: Request, res: Response) {
    const item = await this.contactService.addItem(req.body);
    if (!item) {
      throw new Error("Items not found");
    }
    return ApiResponse.success(res, "contactos obtenidos", item);
  }

  async updateItem(req: Request, res: Response) {
    try {
      const updatedItem = await this.contactService.updateItem(
        req.params.id,
        req.body
      );
      return ApiResponse.success(res, "contactos obtenidos", updatedItem);
    } catch (error) {
      return ApiResponse.badRequest(res, "Error al traer los datos ", error);
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      const deleted = await this.contactService.deleteItem(req.params.id);
      return ApiResponse.success(res, "contactos eliminados", deleted);
    } catch (error) {
      return ApiResponse.badRequest(res, "Error al traer los datos ", error);
    }
  }
}

export default ContactController;
