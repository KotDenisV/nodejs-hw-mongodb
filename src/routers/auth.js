import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerUserSchema, requestResetEmailSchema } from "../validation/auth.js";
import { registerUserController } from "../controllers/auth.js";
import { validateBody } from "../middlewares/validateBody.js";
import { loginUserSchema, resetPasswordSchema } from "../validation/auth.js";
import {
    loginUserController, logoutUserController, refreshUserSessionController,
    requestResetEmailController, resetPasswordController
} from "../controllers/auth.js";


const router = Router();

router.post('/register', validateBody(registerUserSchema), ctrlWrapper(registerUserController));

router.post('/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController));

router.post('/logout', ctrlWrapper(logoutUserController));

router.post('/refresh', ctrlWrapper(refreshUserSessionController));

router.post('/send-reset-email', validateBody(requestResetEmailSchema), ctrlWrapper(requestResetEmailController));

router.post('/reset-pwd', validateBody(resetPasswordSchema), ctrlWrapper(resetPasswordController));

export default router;