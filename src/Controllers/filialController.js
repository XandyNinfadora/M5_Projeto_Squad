import filialDAO from '../DAO/filialDAO.js';
import filialModelo from '../Models/filialModelo.js';

class filialController {
    static rotas(app) {
        // Rota para o recurso usuario
        app.get('/filial', filialController.listarFilial)
        app.get('/filial/:nome_filial', filialController.buscarFilial)
        app.post('/filial', filialController.adicionarFilial)
        app.delete('/filial/:id', filialController.deletarFilial)
        app.put('/filial/:id', filialController.atualizarFilial)
    }

    static async listarFilial(req, res) {
        const listarFilial = await filialDAO.listarFilial();
        res.send(listarFilial);

        console.log("ListarFilial foi requisitado e executado");
    }

    static async buscarFilial(req, res) {
        const filialNome = await filialDAO.buscarFilial(req.params.nome_filial);
        if (!filialNome) {
            res.status(404).send("Nome do produto não foi encontrado, tente outro");
        }
        else {
            res.send(filialNome);
        }

        console.log("BuscarFilial foi requisitado e executado");
    }

    static async adicionarFilial(req, res) {
        const filialModel = new filialModelo(req.body.nome_filial, req.body.endereco_filial);

        const filialAdicionado = await filialDAO.adicionarFilial(filialModel);

        if (filialAdicionado.erro) {
            res.status(404).send(filialAdicionado);
        }
        else {
            res.send(filialAdicionado);
        }

        console.log("AdicionarFilial foi requisitado e executado");
    }

    static async deletarFilial(req, res) {
        // Tenta deletar o usuario
        const filialDeletado = await filialDAO.deletarFilial(req.params.id);
        // Se o usuario não for encontrado, devolve um erro
        if (filialDeletado.erro) {
            res.status(500).send(filialDeletado);
        }
        else {

            res.send(filialDeletado);
        }

        console.log("DeletarFilial foi requisitado e executado");
    }
    /// testando merge ///testes e testes
    static async atualizarFilial(req, res) {
        // Preparar o usuario
        const atualizarFilial = new filialModelo(req.body.nome_filial, req.body.endereco_filial);
        // Tenta atualizar o usuario
        const filialAtualizado = await filialDAO.atualizarFilial(req.params.id, atualizarFilial)
        // Se o usuario não for encontrado, devolve um erro
        if (filialAtualizado.erro) {
            res.status(500).send(filialAtualizado)
        }
        else {

            res.send(filialAtualizado)

        }
        console.log("AtualizarFilial foi requisitado e executado")
    }

}



export default filialController;