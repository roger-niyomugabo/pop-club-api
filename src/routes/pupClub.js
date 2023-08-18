import { Router } from "express";
import PupClubController from "../controllers/pupClubContoller";
import * as Validation from "../middlewares/validations/pupClub";

const router = Router();

router.post(
  "/create",
  Validation.pupClubCreateValidation,
  PupClubController.create
);

export default router;
