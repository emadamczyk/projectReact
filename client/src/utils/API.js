import axios from "axios";

export default {
  
  getIncidents: function() {
    return axios.get("/api/incidents");
  },
  
  getIncident: function(id) {
    return axios.get("/api/incidents/" + id);
  },

  deleteIncident: function(id) {
    return axios.delete("/api/incidents/" + id);
  },
  
  saveIncident: function(IncidentData) {
    return axios.post("/api/incidents", IncidentData);
  }
};
