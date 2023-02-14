import db from '../infra/db.js';

class filialDAO {
    static listarFilial() {
        const consulta = "SELECT * FROM FILIAL";
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

    static buscarFilial(nome_filial) {
        const consulta = 'SELECT * FROM FILIAL WHERE nome_filial = ?';
        return new Promise((resolve, reject) => {
            db.get(consulta, [nome_filial], (error, rows) => {
                if (error) {
                    reject(false);
                }
                else {
                    resolve(rows);
                }
            });
        });
    }

    static adicionarFilial(filialModel) {
        const consulta = "INSERT INTO FILIAL (nome_filial, endereco_filial) VALUES (?, ?)"
        return new Promise((resolve, reject) => {
            db.run(consulta, [filialModel.nome_filial, filialModel.endereco_filial], (error) => {
                if (error) {
                    reject({
                        mensagem: 'Eita! Deu erro ao tentar CRIAR o novo item para a filial, tente novamente.',
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: 'Um novo item para a filial foi CRIADO com sucesso.' })
                }

            });
        });

    }


    static deletarFilial(id) {
        const consulta = 'DELETE FROM FILIAL WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.run(consulta, [id], (error) => {
                if (error) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar DELETAR esse item da filial, tente novamente.",
                        erro: error
                    })
                }
                else {
                    resolve({ mensagem: "Item foi DELETADO da filial com sucesso." })


                }

            });
        });
    }

    static atualizarFilial(id, atualizarFilial) {
        const consulta = 'UPDATE FILIAL SET nome_filial = ?, endereco_filial = ? WHERE id = ?';
        return new Promise((resolve, reject) => {
            db.run(consulta, [atualizarFilial.nome_filial, atualizarFilial.endereco_filial, id], (err) => {
                if (err) {
                    reject({
                        mensagem: "Eita! Deu erro ao tentar ATUALIZAR a filial, tente novamente.",
                        erro: err
                    })
                }
                else {
                    resolve({ mensagem: "Filial foi ATUALIZADO com sucesso." })
                }

            });
        });
    }
}

export default filialDAO;