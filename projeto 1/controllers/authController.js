const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.register = async (req, res) => {
    const { username, password, isAdmin } = req.body;
    const existingUser = User.findByUsername(username);

    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já existe.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User(Date.now().toString(), username, hashedPassword, isAdmin);
    newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = User.findByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.json({ token });
};