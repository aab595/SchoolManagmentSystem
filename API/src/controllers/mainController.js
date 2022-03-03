exports.home = (req, res) => {
    res.render('index')
}


exports.news = (req, res) => {
    res.render('pages/home/news')
}


exports.mission = (req, res) => {
    res.render('pages/home/mission')
}


exports.contact = (req, res) => {
    res.render('pages/home/contact')
}

exports.login = (req, res) => {
    res.render('pages/auth/login')
}
