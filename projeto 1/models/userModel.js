const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');

class User {
    constructor(id, username, password, isAdmin) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    static getAllUsers() {
        return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    }

    static saveAllUsers(users) {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    }

    static findByUsername(username) {
        const users = User.getAllUsers();
        return users.find(user => user.username === username);
    }

    static findById(id) {
        const users = User.getAllUsers();
        return users.find(user => user.id === id);
    }

    save() {
        const users = User.getAllUsers();
        users.push(this);
        User.saveAllUsers(users);
    }

    static deleteById(id) {
        let users = User.getAllUsers();
        users = users.filter(user => user.id !== id);
        User.saveAllUsers(users);
    }
}

module.exports = User;