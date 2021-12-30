const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User, Student, Teacher, Staff } = require('../models/user')


exports.login = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result) {
                    let token = jwt.sign({name: user.name}, "A!:5*sos.", {expiresIn: '1h'});
                    res.json({
                        message: "Connexion réussie",
                        token
                    })
                } else {
                    res.json({
                        message: "Identifiant incorrect"
                    })
                }
            })
        } else {
            res.json({
                message: "Aucun utilisateur trouvé"
            })
        }
    })
}
