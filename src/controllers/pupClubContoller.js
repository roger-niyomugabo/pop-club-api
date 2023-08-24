import output from "../utils/response";
import PupClubService from "../database/services/pupClubService";

class PopClubController {
  static async pupclubRegister(req, res) {
    try {
      const pupclub = await PupClubService.create(req.body);
      return pupclub;
    } catch (error) {
      return output(res, 500, error.message || error, null, "SERVER_ERROR");
    }
  }
}

export default PopClubController;
