import { PrismaClient } from "@prisma/client";

class ServiceAlert {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.alert.findMany();
  }

  async addItem(data: any) {
    return this.prisma.alert.create({
      data,
    });
  }
  async updateItem(id: string, data: any) {
    return this.prisma.alert.update({
      where: { id },
      data,
    });
  }

  async deleteItem(id: string) {
    return this.prisma.alert.delete({
      where: { id },
    });
  }
}

export default ServiceAlert;
