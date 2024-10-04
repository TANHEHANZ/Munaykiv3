import { Router } from "express";
import { passport } from "../middleware/google";
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
    res.redirect("success");
  }
);

loginRouter.get("/success", (req, res) => {
  res.send(`
    <h1>Usuarios autenticados:</h1>
  
  `);
});

export { loginRouter };
