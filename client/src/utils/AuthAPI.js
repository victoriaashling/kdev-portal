import axios from "axios";

export default {

  patientCreateAccount: function(accountData) {
    return axios.post("/createaccount", accountData);
  },
  patientLogin: function(loginData) {
    return axios.post("/login", loginData);
  },
  patientLogout: function() {
    return axios.get("/logout");
  },
  isAuthenticated: function() {
    return axios.get("/isauth");
  },
  getCurrentUser: function() {
    return axios.get("/getcurrentuser");
  }

};