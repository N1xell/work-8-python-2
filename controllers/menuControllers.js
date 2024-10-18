const MenuItem = require('../models/menuItem');

exports.getMenuItems = async (req, res) => {
    const menuItems = await MenuItem.findAll();
    res.render('menu', { menuItems });
};

exports.addMenuItem = async (req, res) => {
    const { name, description, price } = req.body;
    await MenuItem.create(name, description, price);
    res.redirect('/menu');
};

exports.editMenuItem = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    await MenuItem.update(id, name, description, price);
    res.redirect('/menu');
};

exports.deleteMenuItem = async (req, res) => {
    const { id } = req.params;
    await MenuItem.delete(id);
    res.redirect('/menu');
};
