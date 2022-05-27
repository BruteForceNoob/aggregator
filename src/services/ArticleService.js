const axios = require('axios');



axios.get("http://localhost:8080/articles")
  .then(response => {
    console.log(response.data);
    console.log(typeof response);
    return response;
  })
  .catch(error => {
    console.log(error);
  });




