import axios from "axios";

export default axios.create({
  // baseURL: "http://worldcup.sfg.io",
  baseURL: "https://cupscoreapi.herokuapp.com"
});
