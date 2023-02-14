import sugestaoDAO from '../DAO/sugestaoDAO.js';
import sugestaoModelo from '../Models/sugestaoModelo.js';
class sugestaoController {
    static rotas(app) {
        // Rota para o recurso usuario
        app.get('/sugestao', sugestaoController.listarSugestao)
        app.get('/sugestao/:nome_cliente', sugestaoController.buscarSugestao)
        app.post('/sugestao/', sugestaoController.adicionarSugestao)
        app.delete('/sugestao/:id', sugestaoController.deletarSugestao)
        app.put('/sugestao/:id', sugestaoController.atualizarSugestao)
    }

    static async listarSugestao(req, res) {
        const listarsugestao = await sugestaoDAO.listarSugestao();
        res.send(listarsugestao);

        console.log("ListarSugestao foi requisitado e executado");
    }

    static async buscarSugestao(req, res) {
        const sugestaoNome = await sugestaoDAO.buscarSugestao(req.params.nome_cliente);
        if (!sugestaoNome) {
            res.status(404).send("Nome da sugestão não foi encontrado, tente outro");
        }
        else {
            res.send(sugestaoNome);
        }

        console.log("BuscarSugestao foi requisitado e executado");
    }

    static async adicionarSugestao(req, res) {
        const sugestaoModel = new sugestaoModelo(req.body.nome_cliente, req.body.comentario_cliente, req.body.filial_cliente);
        console.log(sugestaoModel);
        const sugestaoAdicionado = await sugestaoDAO.adicionarSugestao(sugestaoModel);

        if (sugestaoAdicionado.erro) {
            res.status(404).send(sugestaoAdicionado);
        }
        else {
            res.send(sugestaoAdicionado);
        }

        console.log("AdicionarSugestao foi requisitado e executado");
    }

    static async deletarSugestao(req, res) {
        // Tenta deletar o usuario
        const sugestaoDeletado = await sugestaoDAO.deletarSugestao(req.params.id);
        // Se o usuario não for encontrado, devolve um erro
        if (sugestaoDeletado.erro) {
            res.status(500).send(sugestaoDeletado);
        }
        else {

            res.send(sugestaoDeletado);
        }

        console.log("DeletarSugestao foi requisitado e executado");
    }
    static async atualizarSugestao(req, res){
               // Preparar o usuario
               const atualizarSugestao = new sugestaoModelo(req.body.nome_cliente, req.body.comentario_cliente, req.body.filial_cliente);
               // Tenta atualizar o usuario
               const sugestaoAtualizado = await sugestaoDAO.atualizarSugestao(req.params.id, atualizarSugestao)
               // Se o usuario não for encontrado, devolve um erro
               if(sugestaoAtualizado.erro){
                   res.status(500).send(sugestaoAtualizado)
               }
               else {

                res.send(sugestaoAtualizado)

               }
               console.log("AtualizarSugestao foi requisitado e executado")
            }
           
}



export default sugestaoController;