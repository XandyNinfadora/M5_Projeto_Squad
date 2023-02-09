import hamburguerDAO from '../DAO/hamburguerDAO.js';
import estoqueProduto from '../Models/estoqueProduto.js';
class hamburguerController {
    static rotas(app) {
        // Rota para o recurso usuario
        app.get('/estoque/hamburguer', hamburguerController.listarHamburguer)
        app.get('/estoque/hamburguer/:nome_produto', hamburguerController.buscarHamburguer)
        app.post('/estoque/hamburguer', hamburguerController.adicionarHamburguer)
        app.delete('/estoque/hamburguer/:id', hamburguerController.deletarHamburguer)
        app.put('/estoque/hamburguer/:id', hamburguerController.atualizarHamburguer)
    }

    static async listarHamburguer(req, res) {
        const listarHamburguer = await hamburguerDAO.listarHamburguer();
        res.send(listarHamburguer);

        console.log("ListarHamburguer foi requisitado e executado");
    }

    static async buscarHamburguer(req, res) {
        const hamburguerNome = await hamburguerDAO.buscarHamburguer(req.params.nome_produto);
        if (!hamburguerNome) {
            res.status(404).send("Nome do hamburguer não foi encontrado, tente outro");
        }
        else {
            res.send(hamburguerNome);
        }

        console.log("BuscarHamburguer foi requisitado e executado");
    }

    static async adicionarHamburguer(req, res) {
        const hamburguerModel = new estoqueProduto(req.body.nome_produto, req.body.descricao_produto, req.body.valor_produto, req.body.tipo_produto);

        const hamburguerAdicionado = await hamburguerDAO.adicionarHamburguer(hamburguerModel);

        if (hamburguerAdicionado.erro) {
            res.status(404).send(hamburguerAdicionado);
        }
        else {
            res.send(hamburguerAdicionado);
        }

        console.log("AdicionarHamburguer foi requisitado e executado");
    }

    static async deletarHamburguer(req, res) {
        // Tenta deletar o usuario
        const hamburguerDeletado = await hamburguerDAO.deletarHamburguer(req.params.id);
        // Se o usuario não for encontrado, devolve um erro
        if (hamburguerDeletado.erro) {
            res.status(500).send(hamburguerDeletado);
        }
        else {

            res.send(hamburguerDeletado);
        }

        console.log("DeletarHamburguer foi requisitado e executado");
    }
/// testando merge ///testes e testes
    static async atualizarHamburguer(req, res){
               // Preparar o usuario
               const atualizarHamburguer = new estoqueProduto(req.body.nome_produto, req.body.descricao_produto, req.body.valor_produto, req.body.tipo_produto);
               // Tenta atualizar o usuario
               const hamburguerAtualizado = await hamburguerDAO.atualizarHamburguer(req.params.id, atualizarHamburguer)
               // Se o usuario não for encontrado, devolve um erro
               if(hamburguerAtualizado.erro){
                   res.status(500).send(hamburguerAtualizado)
               }
               else {

                res.send(hamburguerAtualizado)

               }
               console.log("AtualizarHamburguer foi requisitado e executado")
            }
           
}



export default hamburguerController;