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
class UserController {
    constructor(instancia) {
        this.newUserService = instancia;
    }
    getItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.newUserService.getItems();
            res.json(items);
        });
    }
    createUser(Profile, done) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield this.newUserService.searchItemUnique({
                    email: Profile.email,
                });
                if (existingUser) {
                    return done(null, existingUser);
                }
                const newUser = yield this.newUserService.addItem(Profile);
                return done(null, newUser);
            }
            catch (error) {
                console.error("Error al autenticar o crear usuario:", error);
                return done(error);
            }
        });
    }
}
exports.default = UserController;
