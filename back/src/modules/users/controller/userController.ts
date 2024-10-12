import { Request, Response } from "express";
import UserService from "../service/userService";
import { UserDTO } from "../../../infrastructure/factories/auth.dto";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserController {
  private usercontroller: UserService;

  constructor(usercontroller: UserService) {
    this.usercontroller = usercontroller;
  }

  async getItems(req: Request, res: Response) {
    const items = await this.usercontroller.getItems();
    res.json(items);
  }

  async createUser(Profile: UserDTO, done: Function) {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email: Profile.email },
      });

      if (existingUser) {
        console.log("userExiste", existingUser);
        return done(null, existingUser);
      }
      const newUser = await this.usercontroller.addItem(Profile);
      return done(null, newUser);
    } catch (error) {
      console.error("Error al autenticar o crear usuario:", error);
      return done(error);
    }
  }
}

export default UserController;
