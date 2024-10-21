import { Request, Response } from "express";

import ServiceContat from "./service";

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
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    const item = await this.contactService.addItem(req.body);
    res.status(201).json(item);
  }

  async updateItem(req: Request, res: Response) {
    const updatedItem = await this.contactService.updateItem(
      req.params.id,
      req.body
    );
    if (!updatedItem) {
      throw new Error(`Item with id ${req.params.id} not found`);
    }
    res.json(updatedItem);
  }

  async deleteItem(req: Request, res: Response) {
    const deleted = await this.contactService.deleteItem(req.params.id);
    if (!deleted) {
      throw new Error("No se pudo eliminar ");
    }
    res.status(204).send();
  }
}

export default ContactController;
