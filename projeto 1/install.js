const User = require('./models/userModel');
const bcrypt = require('bcryptjs');

module.exports = (req, res) => {
    const adminExists = User.getAllUsers().some(user => user.isAdmin);

    if (adminExists) {
        return res.status(400).json({ message: 'Usuário administrador já existe.' });
    }

    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
    const admin = new User(Date.now().toString(), 'admin', hashedPassword, true);
    admin.save();

    res.json({ message: 'Usuário administrador criado com sucesso.' });
};