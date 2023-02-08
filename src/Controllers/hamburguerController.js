import hamburguerDAO from '../DAO/hamburguerDAO.js';
class hamburguerController {
    static rotas(app) {
        // Rota para o recurso usuario
        app.get('/estoque/hamburguer', hamburguerController.listarHamburguer)
        /*app.get('/estoque/hamburguer/:hamburguer', hamburguerController.buscarHamburguer)
        app.post('/estoque/hamburguer', hamburguerController.adicionarHamburguer)
        app.delete('/estoque/hamburguer/:hamburguer', hamburguerController.deletarHamburguer)
        app.put('/estoque/hamburguer/:hamburguer', hamburguerController.atualizarHamburguer)*/
    }

    static async listarHamburguer(req, res) {
        const listarHamburguer = await hamburguerDAO.listarHamburguer();
        res.send(listarHamburguer);
        console.log('ListarHamburguer foi requisitado')
    }

    /*
     const listarHamburguer = await hamburguerDAO.listaHamburguer();
        res.send(listarHamburguer);

        static async buscarHamburguer(req, res){
            res.send("RELOU FUNFOU")
            // Console log do objeto usuario
            console.log("até aqui GG IZI")
        }
        static async adicionarHamburguer(req, res){
            res.send("RELOU FUNFOU")
            // Console log do objeto usuario
            console.log("até aqui GG IZI")
        }
        static async deletarHamburguer(req, res){
            res.send("RELOU FUNFOU")
            // Console log do objeto usuario
            console.log("até aqui GG IZI")
        }
        static async atualizarHamburguer(req, res){
            res.send("RELOU FUNFOU")
            // Console log do objeto usuario
            console.log("até aqui GG IZI")
        }*/
}



export default hamburguerController;