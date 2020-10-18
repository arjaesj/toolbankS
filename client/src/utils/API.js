import axios from "axios";

// The getUsername method retrieves username from the server
// It accepts a "query" or term to search the user api for
export default {
  getUsername: function(query) {
    return axios.get("/api/user", { params: { q: query } });
  },
   // Gets all tools
   getTools: function() {
    return axios.get("/api/tools");
  },
  // Gets the tool with the given id
  getTool: function(id) {
    return axios.get("/api/tools/" + id);
  },
  // Deletes the tool with the given id
  deleteTool: function(id) {
    return axios.delete("/api/tools/" + id);
  },
  // Saves a tool to the database
  saveTool: function(toolData) {
    return axios.post("/api/tools", toolData);
  },
  searchTool: function(query) {
    console.log(query)
    return axios.get("/api/tools", { params: { q: query } });
  }
};
