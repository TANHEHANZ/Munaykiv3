import { Request, Response, Router } from "express";

const loginRouter = Router();

loginRouter.get("/google", (req: Request, res: Response) => res.send("hola "));

export { loginRouter };
