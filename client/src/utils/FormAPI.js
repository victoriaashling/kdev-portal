import axios from "axios";

export default {

  getCurrentData: function(id) {
    return axios.get("/api/identifyingInfo/" + id);
  },
  submitForm: function(data) {
    return axios.post("/api/identifyinginfo/", data);
  },
  updateForm: function(id, data) {
    let url = "/api/identifyinginfo/" + id;
    return axios.put(url, data);
  }

};
