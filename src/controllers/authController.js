const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User, Student, Teacher, Staff } = require('../models/user')


exports.login = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME });
                        let refreshToken = jwt.sign({ name: user.name }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME });
                        res.json({
                            message: "Connexion réussie",
                            token,
                            refreshToken
                        })
                        res.cookie('token', token, { 
                            httpOnly: true
                        });
                        // return res.redirect('/admin');
                    } else {
                        res.redirect('/login');
                    }
                })
            } else {
                res.redirect('/login');
            }
        })
}

exports.refreshToken = (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    jwt.verify(refreshToken, "refreshtokenseret", (err, decode) => {
        if (err) {
            res.status(400).json({
                err
            })
        } else {
            let token = jwt.sign({ name: decode.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME });
            let refreshToken = req.body.refreshToken;
            res.status(200).json({
                message: "Token refreshed successfully!",
                token,
                refreshToken
            })
        }
    })
}

exports.logout = (req, res, next) => {
    res.cookie('token', "", "");
    res.redirect('/');
}