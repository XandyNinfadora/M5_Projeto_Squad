import db from '../infra/db.js';

class estoqueDAO {
    static listarEstoque() {
        const consulta = "SELECT * FROM ESTOQUE";
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

    static buscarEstoque(nome_produto) {
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

    static adicionarEstoque(estoqueModel) {
        const consulta = "INSERT INTO ESTOQUE (nome_produto, descricao_produto, valor_produto, tipo_produto) VALUES (?, ?, ?, ?)"
        return new Promise((resolve, reject) => {
            db.run(consulta, [estoqueModel.nome_produto, estoqueModel.descricao_produto, estoqueModel.valor_produto, estoqueModel.tipo_produto], (error) => {
                if (error) {
                    reject({
                        mensagem: 'Eita! Deu erro ao tentar CRIAR o novo item para o estoque, tente novamente.',
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: 'Um novo item para o estoque foi CRIADO com sucesso.' })
                }

            });
        });

    }


    static deletarEstoque(id) {
        const consulta = 'DELETE FROM ESTOQUE WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.run(consulta, [id], (error) => {
                if (error) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar DELETAR esse item do estoque, tente novamente.",
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: "Item foi DELETADO do estoque com sucesso." })


                }

            });
        });
    }

    static atualizarEstoque(id, atualizarEstoque) {
        const consulta = "UPDATE ESTOQUE SET nome_produto = ?, descricao_produto = ?, valor_produto = ?, tipo_produto = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.run(consulta, [atualizarEstoque.nome_produto, atualizarEstoque.descricao_produto, atualizarEstoque.valor_produto, atualizarEstoque.tipo_produto, id], (err) => {
                if (err) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar ATUALIZAR o estoque, tente novamente.",
                        erro: err
                    })
                }
                else {
                    resolve({ mensagem: "Estoque foi ATUALIZADO com sucesso." })
                }

            });
        });
    }
}

export default estoqueDAO;