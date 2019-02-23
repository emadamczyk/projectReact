import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAa2IvrL42Ey9pbEkw_4ON3fF-udc4A25c&address=";

// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(address) {
    const cleanAddress = address.replace(/\s/g, '');
      console.log('this is our freaky url!!', BASEURL + cleanAddress)
    return axios.get(BASEURL + cleanAddress)
  }
};
