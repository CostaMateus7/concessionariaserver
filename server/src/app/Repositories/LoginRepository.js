const db = require('../../Database/index');

class LoginRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM register');
    return rows;
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM register WHERE email = $1', [email]);
    return row;
  }

  async create({
    name, email, password,
  }) {
    const [row] = await db.query(`
    INSERT INTO register(name, email, password)
    VALUES($1, $2, $3)
    RETURNING *
    `, [name, email, password]);
    return row;
  }

  async delete(email) {
    const deleteOp = await db.query(`
      DELETE FROM register
      WHERE email = $1
    `, [email]);
    return deleteOp;
  }
}

module.exports = new LoginRepository();
