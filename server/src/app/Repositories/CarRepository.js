const db = require('../../Database/index');

class CarRepository {
  async Create({
    name, brand, model, price, filename,
  }) {
    const [row] = await db.query(`
    INSERT INTO registercars(name, brand, model, price, filename)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *
    `, [name, brand, model, price, filename]);
    return row;
  }

  async FindAll() {
    const rows = await db.query('SELECT * FROM registerCars ORDER BY CAST(price AS FLOAT) ASC');
    return rows;
  }

  // async update(id, {
  //   name, brand, model, price, category_id,
  // }) {
  //   const [row] = await db.query(`
  //   UPDATE registerCars
  //   SET name = $1, brand = $2, model = $3, price = $4, category_id= $5
  //   WHERE id = $6
  //   RETURNING *
  //   `, [name, brand, model, price, category_id, id]);
  //   console.log(row);
  //   return row;
  // }

  async delete(id) {
    const deleteOp = await db.query(`
    DELETE FROM registerCars
    WHERE ID = $1
    `, [id]);
    return deleteOp;
  }
}
module.exports = new CarRepository();
