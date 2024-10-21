import express from "express";
import dotenv from "dotenv";
import { loginRouter } from "./modules/login/login.routes";
import passport from "passport";

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
