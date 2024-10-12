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
        emails: Profile.emails,
        name: Profile.name,
        providerId: Profile.providerId,
        providerType: String(Profile.providerType),
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
}

export default UserService;
