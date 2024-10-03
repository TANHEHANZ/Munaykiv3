import { Router } from "express";
import { passport, emails } from "../middleware/google";
import { GOOGLE_SCOPE } from "../../../common/constants/constants";

const loginRouter = Router();

loginRouter.get(
  "/google",
  passport.authenticate("google", { scope: GOOGLE_SCOPE })
);

loginRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    res.redirect("/auth/success");
  }
);

loginRouter.get("/success", (req, res) => {
  res.send(`
    <h1>Usuarios autenticados:</h1>
    <ul>
      ${emails.map((email: string) => `<li>${email}</li>`).join("")}
    </ul>
  `);
});

export { loginRouter };
