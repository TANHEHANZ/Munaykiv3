import express from "express";
import dotenv from "dotenv";

import "./modules/users/middleware/google";
import { loginRouter } from "./modules/users/routes/login.routes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", loginRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
