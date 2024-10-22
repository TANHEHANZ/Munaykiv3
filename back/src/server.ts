import express from "express";
import dotenv from "dotenv";
import { loginRouter } from "./modules/login/login.routes";
import passport from "passport";
import { ROUTES } from "./common/constants/routes.enum";
import contactRouter from "./modules/contact/routes";
import alertRouter from "./modules/alert/routes";
import { authenticateToken } from "./infrastructure/middleware/authenticateToken.middleware";
import notificationRouter from "modules/notification/notification.routes";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", loginRouter);
app.use("/dashboard", (req, res) => {
  res.send(`
    Dash
  `);
});
app.use(ROUTES.CONTACT, contactRouter);
app.use(ROUTES.ALERT, authenticateToken, alertRouter);
app.use(ROUTES.NOTIFICATION, authenticateToken, notificationRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
