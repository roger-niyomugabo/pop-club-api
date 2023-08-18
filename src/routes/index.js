import { Router } from "express";
import popClubRouter from "./pupClub";

const router = Router();

router.use("/popclub", popClubRouter);

export default router;
