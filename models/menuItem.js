const db = require('../config/db'); 

class MenuItem {
    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM menu_items WHERE id = ?', [id]);
        return rows[0];
    }
    
    static async create(name, description, price) {
        await db.query('INSERT INTO menu_items (name, description, price) VALUES (?, ?, ?)', [name, description, price]);
    }

    static async update(id, name, description, price) {
        await db.query('UPDATE menu_items SET name = ?, description = ?, price = ? WHERE id = ?', [name, description, price, id]);
    }

    static async delete(id) {
        await db.query('DELETE FROM menu_items WHERE id = ?', [id]);
    }
}

module.exports = MenuItem;

