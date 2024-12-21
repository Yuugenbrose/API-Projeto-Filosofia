const fs = require('fs');
const path = require('path');
const resumosFilePath = path.join(__dirname, '../data/resumos.json');

class Resumo {
    constructor(id, titulo, conteudo, autorId) {
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.autorId = autorId;
    }

    static getAllResumos() {
        return JSON.parse(fs.readFileSync(resumosFilePath, 'utf-8'));
    }

    static saveAllResumos(resumos) {
        fs.writeFileSync(resumosFilePath, JSON.stringify(resumos, null, 2));
    }

    static findById(id) {
        const resumos = Resumo.getAllResumos();
        return resumos.find(resumo => resumo.id === id);
    }

    save() {
        const resumos = Resumo.getAllResumos();
        resumos.push(this);
        Resumo.saveAllResumos(resumos);
    }

    static deleteById(id) {
        let resumos = Resumo.getAllResumos();
        resumos = resumos.filter(resumo => resumo.id !== id);
        Resumo.saveAllResumos(resumos);
    }
}

module.exports = Resumo;