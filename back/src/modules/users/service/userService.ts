import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../../../infrastructure/factories/auth.dto";

class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.user.findMany();
  }

  async addItem(Profile: UserDTO) {
    return this.prisma.user.create({
      data: {
        email: Profile.email,
        name: Profile.name,
        photo: Profile.photo,
        providerId: Profile.providerId,
        providerType: Profile.providerType,
      },
    });
  }
  async updateItem(id: string, data: any) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteItem(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
  async searchItemUnique(condicion: any) {
    return this.prisma.user.findUnique({
      where: condicion,
    });
  }
}

export default UserService;
