"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verification = verification;
function verification(profile) {
    var _a, _b, _c;
    const email = ((_b = (_a = profile === null || profile === void 0 ? void 0 : profile.emails) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value) || (profile === null || profile === void 0 ? void 0 : profile.email) || null;
    const name = (profile === null || profile === void 0 ? void 0 : profile.displayName) || (profile === null || profile === void 0 ? void 0 : profile.name.givenName) || "Nombre desconocido";
    const providerId = profile === null || profile === void 0 ? void 0 : profile.id;
    const photo = ((_c = profile === null || profile === void 0 ? void 0 : profile.photos) === null || _c === void 0 ? void 0 : _c[0].value) || "No tiene foto";
    const providerType = profile.provider || "No se halla el proveedor";
    const userDTO = {
        email,
        name,
        photo,
        providerId,
        providerType,
    };
    return userDTO;
}
