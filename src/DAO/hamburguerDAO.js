import db from '../infra/db.js';

class hamburguerDAO {
    static listarHamburguer() {
        const consulta = "SELECT * FROM ESTOQUE WHERE TIPO_PRODUTO LIKE '%hamburguer%'";
        return new Promise((resolve, reject) => {
            db.all(consulta, (error, rows) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(rows)

                }
            });
        });
    }

    static buscarHamburguer(nome_produto) {
        const consulta = 'SELECT * FROM ESTOQUE WHERE nome_produto = ?';
        return new Promise((resolve, reject) => {
            db.get(consulta, [nome_produto], (error, rows) => {
                if (error) {
                    reject(false);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }

    static adicionarHamburguer(hamburguerModel) {
        const consulta = "INSERT INTO ESTOQUE (nome_produto, descricao_produto, valor_produto, tipo_produto) VALUES (?, ?, ?, ?)"
        return new Promise((resolve, reject) => {
            db.run(consulta, [hamburguerModel.nome_produto, hamburguerModel.descricao_produto, hamburguerModel.valor_produto, hamburguerModel.tipo_produto], (error) => {
                if (error) {
                    reject({
                        mensagem: 'Eita! Deu erro ao tentar CRIAR o hamburguer, tente novamente.',
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: 'Hamburguer foi CRIADO com sucesso.' })
                }

            });
        });

    }


    static deletarHamburguer(id) {
        const consulta = 'DELETE FROM ESTOQUE WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.run(consulta, [id], (error) => {
                if (error) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar DELETAR o hamburguer, tente novamente.",
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: "Hamburguer foi DELETADO com sucesso." })


                }

            });
        });
    }

    static atualizarHamburguer(id, atualizarHamburguer) {
        const consulta = "UPDATE ESTOQUE SET nome_produto = ?, descricao_produto = ?, valor_produto = ?, tipo_produto = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.run(consulta, [atualizarHamburguer.nome_produto, atualizarHamburguer.descricao_produto, atualizarHamburguer.valor_produto, atualizarHamburguer.tipo_produto, id], (err) => {
                if (err) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar ATUALIZAR o hamburguer, tente novamente.",
                        erro: err
                    })
                }
                else {
                    resolve({ mensagem: "Hamburguer foi ATUALIZADO com sucesso."  })
                }

            });
        });
    }
}

export default hamburguerDAO;