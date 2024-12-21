const Resumo = require('../models/resumoModel');

exports.createResumo = (req, res) => {
    const { titulo, conteudo } = req.body;
    const newResumo = new Resumo(Date.now().toString(), titulo, conteudo, req.user.id);
    newResumo.save();

    res.status(201).json({ message: 'Resumo criado com sucesso.' });
};

exports.getResumos = (req, res) => {
    const { limite = 5, pagina = 1 } = req.query;
    const resumos = Resumo.getAllResumos();
    const startIndex = (pagina - 1) * limite;
    const paginatedResumos = resumos.slice(startIndex, startIndex + limite);

    res.json(paginatedResumos);
};

exports.getResumoById = (req, res) => {
    const { id } = req.params;
    const resumo = Resumo.findById(id);

    if (!resumo) {
        return res.status(404).json({ message: 'Resumo não encontrado.' });
    }

    res.json(resumo);
};

exports.updateResumo = (req, res) => {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;
    const resumo = Resumo.findById(id);

    if (!resumo) {
        return res.status(404).json({ message: 'Resumo não encontrado.' });
    }

    resumo.titulo = titulo || resumo.titulo;
    resumo.conteudo = conteudo || resumo.conteudo;
    Resumo.saveAllResumos(Resumo.getAllResumos());

    res.json({ message: 'Resumo atualizado com sucesso.' });
};

exports.deleteResumo = (req, res) => {
    const { id } = req.params;
    const resumo = Resumo.findById(id);

    if (!resumo) {
        return res.status(404).json({ message: 'Resumo não encontrado.' });
    }

    Resumo.deleteById(id);
    res.json({ message: 'Resumo excluído com sucesso.' });
};