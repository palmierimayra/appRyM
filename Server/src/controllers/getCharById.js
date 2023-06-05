const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharbyId = (req,res) => {
  const id = parseInt(req.params.id);

  if(id<827){
  axios.get(`${URL}${id}`)
  .then((response) => {
    
    let character = {};
    const { id, name, gender, species, origin, image, status } = response.data;
    
    character = {
      id: id,
      name: name,
      gender: gender,
      species: species,
      origin: origin,
      image: image,
      status: status,
    };
    res.status(200).json(character)
  }).catch((error) => {
    res.status(500).send(error);
  })
} else {
  res.status(404).send(error, "Not found");
}
};

module.exports = {
  getCharbyId
};