const User = require('../models/userModel');

exports.createAdmin = (req, res) => {
    const { username, password } = req.body;
    const existingUser = User.findByUsername(username);

    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newAdmin = new User(Date.now().toString(), username, hashedPassword, true);
    newAdmin.save();

    res.status(201).json({ message: 'Administrador criado com sucesso.' });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const user = User.findById(id);

    if (!user || user.isAdmin) {
        return res.status(404).json({ message: 'Usuário não encontrado ou não pode ser excluído.' });
    }

    User.deleteById(id);
    res.json({ message: 'Usuário excluído com sucesso.' });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;
    const user = User.findById(id);

    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    user.username = username || user.username;
    user.password = password ? bcrypt.hashSync(password, 10) : user.password;
    User.saveAllUsers(User.getAllUsers());

    res.json({ message: 'Usuário atualizado com sucesso.' });
};