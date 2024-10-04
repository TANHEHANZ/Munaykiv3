import { Request, Response } from "express";
import UserService from "../service/userService";

class UserController {
  private usercontroller: UserService;

  constructor(usercontroller: UserService) {
    this.usercontroller = usercontroller;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.usercontroller.getItems();
    res.json(items);
  }

  async addItem(req: Request, res: Response) {
    //  const = data {
    //       email: googleProfile.email,
    //       name: googleProfile.name,
    //       providerId: googleProfile.providerId,
    //       providerType: googleProfile.providerType,
    //     },
    // const item = await this.usercontroller.addItem(
    // );
    // res.status(201).json(item);
  }
}

export default UserController;
