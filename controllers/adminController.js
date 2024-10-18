const MenuItem = require('../models/menuItem');


exports.showAddItemForm = (req, res) => {
    res.render('add-item'); 
};

exports.addMenuItem = async (req, res) => {
    const { name, description, price } = req.body;
    await MenuItem.create(name, description, price);
    res.redirect('/menu');
};

exports.showEditItemForm = async (req, res) => {
    const { id } = req.params;
    const item = await MenuItem.findById(id); 
    res.render('edit-item', { item });
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
