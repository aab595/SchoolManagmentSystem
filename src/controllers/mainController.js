const home = (req, res) => {
    res.render('index')
}


const news = (req, res) => {
    res.render('pages/home/news')
}


const mission = (req, res) => {
    res.render('pages/home/mission')
}


const contact = (req, res) => {
    res.render('pages/home/contact')
}

const login = (req, res) => {
    res.render('pages/auth/login')
}

module.exports = {
    home, news, mission, contact, login
}