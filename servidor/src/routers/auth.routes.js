import {Router} from "express";
import * as authController from '../controllers/auth.controllers'
import { authJwt,verifySignup } from "../middlewares";
const router =Router();

router.post('/signup',[verifySignup.roleExists,verifySignup.userExist], authController.signup);
router.post('/signin',authController.signin);
export default router;