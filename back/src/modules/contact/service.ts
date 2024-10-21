import { PrismaClient } from "@prisma/client";

class ServiceContat {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getItems() {
    return this.prisma.contact.findMany();
  }

  async addItem(data: any) {
    return this.prisma.contact.create({
      data,
    });
  }
  async updateItem(id: string, data: any) {
    return this.prisma.contact.update({
      where: { id },
      data,
    });
  }

  async deleteItem(id: string) {
    return this.prisma.contact.delete({
      where: { id },
    });
  }
}

export default ServiceContat;
