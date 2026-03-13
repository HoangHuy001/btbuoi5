const User = require("../models/User");

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
};

exports.getUsers = async (req, res) => {
    const users = await User.find({ deleted: false }).populate("role");
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).populate("role");
    res.json(user);
};

exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
};

exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { deleted: true },
        { new: true }
    );
    res.json(user);
};

exports.enableUser = async (req, res) => {
    const { email, username } = req.body;

    const user = await User.findOne({ email, username });

    if (!user)
        return res.status(404).json({ message: "User not found" });

    user.status = true;
    await user.save();

    res.json(user);
};

exports.disableUser = async (req, res) => {
    const { email, username } = req.body;

    const user = await User.findOne({ email, username });

    if (!user)
        return res.status(404).json({ message: "User not found" });

    user.status = false;
    await user.save();

    res.json(user);
};

exports.getUsersByRole = async (req, res) => {
    const users = await User.find({
        role: req.params.id,
        deleted: false
    }).populate("role");

    res.json(users);
};