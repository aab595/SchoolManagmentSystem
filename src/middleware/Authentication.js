const jwt = require('jsonwebtoken');


const authenticate = (req, res, next) => {
    try {
        const token = req.headers.autorization.split(' ')[1]
        const decode = jwt.verify(token, 'A!:5*sos.')

        req.user = decode;
        next()
    } catch (error) {
        res.json({
            message: "Authentication failed!"
        })
    }
}

module.exports = authenticate


/*
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next();
}

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

module.exports = {
    checkAuthenticated,
    checkNotAuthenticated
} */