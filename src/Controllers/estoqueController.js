class estoqueController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/estoque', estoqueController.teste)
    }

    static teste(req, res){
        res.send("RELOU FUNFOU")
        // Console log do objeto usuario
        console.log("até aqui GG IZI")
    }
}



export default estoqueController;