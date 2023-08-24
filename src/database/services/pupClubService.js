import PupClub from "../models/pupClub";

class PupClubService {
  static async create() {
    try {
      return await PupClub.create();
    } catch (error) {
      throw error;
    }
  }
}

export default PupClubService;
