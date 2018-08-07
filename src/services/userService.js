import axios from "axios";

const userService = {};
const baseUrl = "https://essteem-back-end.herokuapp.com/users";

userService.signup = (user) => {
  return axios.post(`${baseUrl}/signup`, user);
};

export default userService;
