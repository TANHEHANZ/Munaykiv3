import { Request, Response } from "express";
import UserService from "../service/userService";
import { UserDTO } from "../../../infrastructure/factories/auth.dto";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserController {
  private newUserService: UserService;

  constructor(instancia: UserService) {
    this.newUserService = instancia;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.newUserService.getItems();
    res.json(items);
  }

  async createUser(Profile: UserDTO, done: Function) {
    try {
      const existingUser = await this.newUserService.searchItemUnique({
        email: Profile.email,
      });

      if (existingUser) {
        console.log("userExiste", existingUser);
        return done(null, existingUser);
      }
      const newUser = await this.newUserService.addItem(Profile);
      return done(null, newUser);
    } catch (error) {
      console.error("Error al autenticar o crear usuario:", error);
      return done(error);
    }
  }
}

export default UserController;
