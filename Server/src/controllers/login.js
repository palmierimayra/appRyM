const users = require("../utils/users");

const login = (req,res) => {

const {email,password} = req.query;

    const validar = users.find((user) => user.email===email && user.password===password);

    if(validar) {
        res.status(200).json({access: true})
    } else {
        res.status(400).json({access: false})
    }
}

module.exports = {
    login
}