import { Router } from "express";

import { validateSchema } from "../middlewares/validateSchema";
import { UserSchema } from "../schemas/user.schema";
import userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/users", userController.getUsers);
userRouter.post("/users", validateSchema(UserSchema), userController.createUser);
userRouter.put("/users")
userRouter.delete("/users", )

export default userRouter;