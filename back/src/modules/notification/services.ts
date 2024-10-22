import { PrismaClient } from "@prisma/client";

class NotificationService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getNotifications() {
    return this.prisma.notificationToken.findMany();
  }

  async addNotification(data: any) {
    return this.prisma.notificationToken.create({
      data,
    });
  }

  async updateNotification(id: string, data: any) {
    return this.prisma.notificationToken.update({
      where: { id },
      data,
    });
  }

  async deleteNotification(id: string) {
    return this.prisma.notificationToken.delete({
      where: { id },
    });
  }
}

export default NotificationService;