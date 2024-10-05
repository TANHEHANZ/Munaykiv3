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

// export default UserController;
// import { Request, Response } from "express";
// import ApiResponse from "../helpers/ApiResponse";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const UserController = {
//   // Método para obtener un usuario por ID
//   async getUser(req: Request, res: Response) {
//     const userId = parseInt(req.params.id);

//     try {
//       const user = await prisma.user.findUnique({
//         where: { id: userId },
//       });

//       if (!user) {
//         return ApiResponse.notFound(res, "Usuario no encontrado.");
//       }

//       return ApiResponse.success(res, "Usuario encontrado.", user);
//     } catch (error) {
//       return ApiResponse.serverError(res, "Error del servidor.", error);
//     }
//   },

//   // Método para crear un nuevo usuario
//   async createUser(req: Request, res: Response) {
//     const { email, name } = req.body;

//     try {
//       const existingUser = await prisma.user.findUnique({ where: { email } });

//       if (existingUser) {
//         return ApiResponse.badRequest(res, "El usuario ya existe.", { email });
//       }

//       const newUser = await prisma.user.create({
//         data: { email, name },
//       });

//       return ApiResponse.success(res, "Usuario creado con éxito.", newUser);
//     } catch (error) {
//       return ApiResponse.serverError(res, "Error creando usuario.", error);
//     }
//   },
// };
