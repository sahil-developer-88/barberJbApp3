var frontController = {
    pressLogout: function(req, res) {
        req.logout();
        req.session.destroy();
        loginSessionValue=false;
        res.json(loginSessionValue);
    }
}

module.exports = frontController;