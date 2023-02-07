class hamburguerController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/estoque/hamburguer', hamburguerController.listarHamburguer)
        app.get('/estoque/hamburguer/:hamburguer', hamburguerController.buscarHamburguer)
        app.post('/estoque/hamburguer', hamburguerController.adicionarHamburguer)
        app.delete('/estoque/hamburguer/:hamburguer', hamburguerController.deletarHamburguer)
        app.put('/estoque/hamburguer/:hamburguer', hamburguerController.atualizarHamburguer)
    }

    static listarHamburguer(req, res){
        res.send("RELOU FUNFOU")
        // Console log do objeto usuario
        console.log("até aqui GG IZI")
    }

    static buscarHamburguer(req, res){
        res.send("RELOU FUNFOU")
        // Console log do objeto usuario
        console.log("até aqui GG IZI")
    }
    static adicionarHamburguer(req, res){
        res.send("RELOU FUNFOU")
        // Console log do objeto usuario
        console.log("até aqui GG IZI")
    }
    static deletarHamburguer(req, res){
        res.send("RELOU FUNFOU")
        // Console log do objeto usuario
        console.log("até aqui GG IZI")
    }
    static atualizarHamburguer(req, res){
        res.send("RELOU FUNFOU")
        // Console log do objeto usuario
        console.log("até aqui GG IZI")
    }
}



export default hamburguerController;