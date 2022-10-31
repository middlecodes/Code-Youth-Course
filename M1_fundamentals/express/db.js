const Pool = require('pg').Pool
const pool = new Pool({
host: 'localhost',
database: 'user_db',
port: 5432,
})

const getUsersByID = (req, res)=>{
    const id = parseINT(req.paramas.id);
    pool.query('SELECT * FROM users', (error,results)=>{
    if (error){
        throw error;
    }
    res.json(results.rows);
})
}
const getUserById = (req,res)=>{
    pool.query('SELECT * FROM users')
}
module.exports = {getUsers, getUsersById}