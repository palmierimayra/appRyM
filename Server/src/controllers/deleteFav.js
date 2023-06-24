const Favorite = require("../models/Favorite");

const deleteFav = (req, res) => {
    const id = req.params;

    try {
        Favorite.destroy({where: {id: id}});
        return res.status(200).json(Favorite.findAll());
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    deleteFav,
};
