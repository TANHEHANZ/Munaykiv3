"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findMany();
        });
    }
    addItem(Profile) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.create({
                data: {
                    email: Profile.email,
                    name: Profile.name,
                    photo: Profile.photo,
                    providerId: Profile.providerId,
                    providerType: Profile.providerType,
                },
            });
        });
    }
    updateItem(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.update({
                where: { id },
                data,
            });
        });
    }
    deleteItem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.delete({
                where: { id },
            });
        });
    }
    searchItemUnique(condicion) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findUnique({
                where: condicion,
            });
        });
    }
}
exports.default = UserService;
