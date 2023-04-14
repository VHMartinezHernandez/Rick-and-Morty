// const axios = require("axios");

// const successH = (response, res) => {
//     const {id , name, gender, species, origin, image, status} = response.data;
//     res.writeHead(200, {"Content-Type": "application/json"})
//     res.end(JSON.stringify ({id , name, gender, species, origin, image, status}));    
// }

// const errorH = (error, res) => {
//     res.writeHead(500,{"Content-Type": "text/plain"} );
//     res.end(error.message);
// }

// const getCharById = (res, id) => {
// axios.get(`https://rickandmortyapi.com/api/character/${id}`)
// .then((response) =>successH(response, res))
// .catch((error) => errorH (error, res))
// }



// module.exports = getCharById

//*****************************Clase de express****** */

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getChairDetail = (req, res) => {
  const { id } = req.params;
  
 
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { id, status, name, species, origin, image, gender } =
        response.data;
      res
        .status(200)
        .json({ id, status, name, species, origin, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getChairDetail;
