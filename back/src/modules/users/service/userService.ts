import { PrismaClient } from "@prisma/client";

class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.user.findMany();
  }

  async addItem(data: any) {
    return this.prisma.user.create({
      data,
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
