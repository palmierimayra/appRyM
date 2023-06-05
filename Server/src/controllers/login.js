const {email, password} = require("../utils/users");

const login = (req,res) => {

    if(req.query.email===email && req.query.password===password) {
        res.status(200).json({access: true})
    } else {
        res.status(400).json({access: false})
    }
}

module.exports = {
    login
}