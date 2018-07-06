import axios from "axios";

const jobService = {};
const baseUrl = "https://essteem-back-end.herokuapp.com/jobs";

jobService.getAll = () => {
  return axios.get(baseUrl);
};

export default jobService;
