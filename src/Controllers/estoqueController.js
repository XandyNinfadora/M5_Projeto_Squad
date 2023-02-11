import estoqueDAO from '../DAO/estoqueDAO.js';
import estoqueProduto from '../Models/estoqueProduto.js';
class estoqueController {
    static rotas(app) {
        // Rota para o recurso usuario
        app.get('/estoque', estoqueController.listarEstoque)
        app.get('/estoque/:nome_produto', estoqueController.buscarEstoque)
        app.post('/estoque', estoqueController.adicionarEstoque)
        app.delete('/estoque/:id', estoqueController.deletarEstoque)
        app.put('/estoque/:id', estoqueController.atualizarEstoque)
    }

    static async listarEstoque(req, res) {
        const listarEstoque = await estoqueDAO.listarEstoque();
        res.send(listarEstoque);

        console.log("ListarEstoque foi requisitado e executado");
    }

    static async buscarEstoque(req, res) {
        const produtoNome = await estoqueDAO.buscarEstoque(req.params.nome_produto);
        if (!produtoNome) {
            res.status(404).send("Nome do produto não foi encontrado, tente outro");
        }
        else {
            res.send(produtoNome);
        }

        console.log("BuscarEstoque foi requisitado e executado");
    }

    static async adicionarEstoque(req, res) {
        const estoqueModel = new estoqueProduto(req.body.nome_produto, req.body.descricao_produto, req.body.valor_produto, req.body.tipo_produto);

        const produtoAdicionado = await estoqueDAO.adicionarEstoque(estoqueModel);

        if (produtoAdicionado.erro) {
            res.status(404).send(produtoAdicionado);
        }
        else {
            res.send(produtoAdicionado);
        }

        console.log("AdicionarEstoque foi requisitado e executado");
    }

    static async deletarEstoque(req, res) {
        // Tenta deletar o usuario
        const produtoDeletado = await estoqueDAO.deletarEstoque(req.params.id);
        // Se o usuario não for encontrado, devolve um erro
        if (produtoDeletado.erro) {
            res.status(500).send(produtoDeletado);
        }
        else {

            res.send(produtoDeletado);
        }

        console.log("DeletarEstoque foi requisitado e executado");
    }
    /// testando merge ///testes e testes
    static async atualizarEstoque(req, res) {
        // Preparar o usuario
        const atualizarEstoque = new estoqueProduto(req.body.nome_produto, req.body.descricao_produto, req.body.valor_produto, req.body.tipo_produto);
        // Tenta atualizar o usuario
        const estoqueAtualizado = await estoqueDAO.atualizarEstoque(req.params.id, atualizarEstoque)
        // Se o usuario não for encontrado, devolve um erro
        if (estoqueAtualizado.erro) {
            res.status(500).send(estoqueAtualizado)
        }
        else {

            res.send(estoqueAtualizado)

        }
        console.log("AtualizarEstoque foi requisitado e executado")
    }

}



export default estoqueController;