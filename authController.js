let users = [];

const signup = (req, res) => {
    const user = req.body;

    users.push(user);

    res.json({
        message: "Signup Successful",
        user
    });
};

const login = (req, res) => {
    const { email } = req.body;

    const user = users.find(
        (u) => u.email === email
    );

    if (user) {
        res.json({
            message: "Login Successful",
            user
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
};

module.exports = {
    signup,
    login
};