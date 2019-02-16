import axios from "axios";

const BASEURL = "https://bikewise.org:443/api/v2/incidents?page=1&proximity_square=10&proximity=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
    console.log(BASEURL + query);
  }
};
