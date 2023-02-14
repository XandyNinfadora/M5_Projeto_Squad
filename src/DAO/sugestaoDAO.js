import db from '../infra/db.js';

class sugestaoDAO {
    static listarSugestao() {
        const consulta = "SELECT * FROM SUGESTAO";
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

    static buscarSugestao(nome_cliente) {
        const consulta = 'SELECT * FROM SUGESTAO WHERE nome_cliente = ?';
        return new Promise((resolve, reject) => {
            db.get(consulta, [nome_cliente], (error, rows) => {
                if (error) {
                    reject(false);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }

    static adicionarSugestao(sugestaoModel) {
        console.log(sugestaoModel);
        const consulta = "INSERT INTO SUGESTAO (nome_cliente, comentario_cliente, filial_cliente) VALUES (?, ?, ?)"
        return new Promise((resolve, reject) => {
            db.run(consulta, [sugestaoModel.nome_cliente, sugestaoModel.comentario_cliente, sugestaoModel.filial_cliente ], (error) => {
                if (error) {
                    reject({
                        mensagem: 'Eita! Deu erro ao tentar CRIAR a sugestão, tente novamente.',
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: 'Sugestão foi CRIADA com sucesso.' })
                }

            });
        });

    }


    static deletarSugestao(id) {
        const consulta = 'DELETE FROM SUGESTAO WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.run(consulta, [id], (error) => {
                if (error) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar DELETAR a sugestão, tente novamente.",
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: "Sugestão foi DELETADA com sucesso." })


                }

            });
        });
    }

    static atualizarSugestao(id, atualizarSugestao) {
        const consulta = "UPDATE SUGESTAO SET nome_cliente = ?, comentario_cliente = ?, filial_cliente = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.run(consulta, [atualizarSugestao.nome_cliente, atualizarSugestao.comentario_cliente, atualizarSugestao.filial_cliente, id], (err) => {
                if (err) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar ATUALIZAR a sugestão, tente novamente.",
                        erro: err
                    })
                }
                else {
                    resolve({ mensagem: "Sugestão foi ATUALIZADA com sucesso."  })
                }

            });
        });
    }
}

export default sugestaoDAO;