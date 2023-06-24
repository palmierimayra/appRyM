const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharbyId = async (req, res) => {
  const id = parseInt(req.params.id);

  await axios.get(URL + id).then((response) => {
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

      try {
        res.status(200).json(character);
      } catch (error) {
        if (error.response.status === 404) {
          res.status(404).send("Not found");
        } else {
          res.status(500).json({ message: error.message });
        }
      }
    })
};

module.exports = {
  getCharbyId,
};
