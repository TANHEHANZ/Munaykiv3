"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const login_routes_1 = require("./modules/login/login.routes");
const passport_1 = __importDefault(require("passport"));
const routes_enum_1 = require("./common/constants/routes.enum");
const routes_1 = __importDefault(require("./modules/contact/routes"));
const routes_2 = __importDefault(require("./modules/alert/routes"));
const authenticateToken_middleware_1 = require("./infrastructure/middleware/authenticateToken.middleware");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(passport_1.default.initialize());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/auth", login_routes_1.loginRouter);
app.use("/dashboard", (req, res) => {
    res.send(`
    Dash
  `);
});
app.get("/app", (req, res) => {
    const param = req.query.url;
    console.log("entro aca ", param);
    return res.redirect(param + "?iduser=1");
});
app.use(routes_enum_1.ROUTES.CONTACT, routes_1.default);
app.use(routes_enum_1.ROUTES.ALERT, authenticateToken_middleware_1.authenticateToken, routes_2.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
