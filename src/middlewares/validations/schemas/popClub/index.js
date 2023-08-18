import Joi from "joi";

export default Joi.object()
  .keys({
    example: Joi.string()
      .required()
      .error(new Error("Please provide example name")),
  })
  .options({ allowUnknown: false });
