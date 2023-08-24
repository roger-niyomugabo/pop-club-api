import { Router } from "express";
import PupClubController from "../controllers/pupClubContoller";
import * as Validation from "../middlewares/validations/pupClub";

const router = Router();

router.post(
  "/register",
  // Validation.pupClubCreateValidation,
  PupClubController.pupclubRegister
);

export default router;
