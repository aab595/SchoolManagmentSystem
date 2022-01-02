const jwt = require('jsonwebtoken');


const authenticate = (req, res, next) => {
    const token =req.cookies.token;
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.user = decode;
        next();
    } catch (error) {
        // if (error.name == "TokenExpiredError") {
        //     res.status(401).json({
        //         message: "Token Expired!"
        //     })
        // } else {
        //     res.json({
        //         message: "Authentication failed!"
        //     })
        // }
        res.clearCookie("token");
        return res.redirect("/login")
    }
}

module.exports = authenticate
