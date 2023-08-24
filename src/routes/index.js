import { Router } from "express";
import pupClubRouter from "./pupClub";

const router = Router();

router.use("/pupclub", pupClubRouter);

export default router;
