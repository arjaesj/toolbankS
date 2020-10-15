import axios from "axios";

// The getUsername method retrieves username from the server
// It accepts a "query" or term to search the user api for
export default {
  getUsername: function(query) {
    return axios.get("/api/user", { params: { q: query } });
  }
};
