const Role = require("../models/Role");

exports.createRole = async (req, res) => {
    const role = new Role(req.body);
    await role.save();
    res.json(role);
};

exports.getRoles = async (req, res) => {
    const roles = await Role.find();
    res.json(roles);
};

exports.getRoleById = async (req, res) => {
    const role = await Role.findById(req.params.id);
    res.json(role);
};

exports.updateRole = async (req, res) => {
    const role = await Role.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(role);
};

exports.deleteRole = async (req, res) => {
    const role = await Role.findByIdAndUpdate(
        req.params.id,
        { deleted: true },
        { new: true }
    );
    res.json(role);
};