import validator from "../../utils/validator";
import pupClubCreateSchema from "./schemas/popClub";

export const pupClubCreateValidation = (req, res, next) =>
  validator(pupClubCreateSchema, req.body, res, next);
