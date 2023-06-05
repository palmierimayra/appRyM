let myFavorites = [];

const postFav = (req,res) => {
    const {character} = req.body;

    myFavorites.push(character);
    res.json(myFavorites);
}

const deleteFav = (req,res) => {
    const id = parseInt(req.params.id);

    myFavorites.splice(id,1);
    res.json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}