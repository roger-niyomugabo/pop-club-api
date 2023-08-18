import output from "../utils/response";
// import PupClubService from "../database/services/pupClubService"

class PopClubController {
  static async create(req, res) {
    try {
      return 1;
    } catch (error) {
      return output(res, 500, error.message || error, null, "SERVER_ERROR");
    }
  }
}

export default PopClubController;
