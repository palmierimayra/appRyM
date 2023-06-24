const Favorite = require("../models/Favorite");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  try {
    if (!name || !origin || !status || !image || !species || !gender) {
      res.status(401).send("Faltan datos");
    } else {
      await Favorite.findOrCreate({
        where: { name: name },
        defaults: {
          origin: origin,
          status: status,
          image: image,
          species: species,
          gender: gender,
        },
      });
    }
    return res.status(200).send(Favorite.findAll());
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postFav,
};
