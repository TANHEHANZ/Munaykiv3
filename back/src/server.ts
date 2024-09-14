import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import { loginRouter } from "./modules/users/routes/login.routes";
import { emails } from "./middleware/google";
import "./middleware/google";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.redirect("/success");
  }
);

app.get("/success", (req, res) => {
  res.send(`
    <h1>Usuarios autenticados:</h1>
    <ul>
      ${emails.map((email: string) => `<li>${email}</li>`).join("")}
    </ul>
  `);
});

// Ruta de prueba
app.use("/auth", loginRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
