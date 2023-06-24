const User = require('../models/User');

const postUser = (req,res) => {
    const {email,password} = req.body;
    try {
        if(!email || !password){
            res.status(400).send("Faltan datos");
        } else {
            const [user] = findOrCreate({
                where: {email: email},
                defaults: {password: password}
            });
            return res.json(user);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    postUser,
}