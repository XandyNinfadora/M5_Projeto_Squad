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
}

export default hamburguerDAO;