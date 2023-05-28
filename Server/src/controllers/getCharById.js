const axios = require("axios");

const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        
      const { id, name, gender, species, origin, image, status } = response.data;

      const character = {
        id: id,
        name: name,
        gender: gender,
        species: species,
        origin: origin,
        image: image,
        status: status,
      };

      console.log(character);

      res.writeHead(200,{"Content-Type": "application/json"});
      res.end(JSON.stringify(character));
    })
    .catch(() => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Character not found");
    });
};

module.exports = {
  getCharById,
};
