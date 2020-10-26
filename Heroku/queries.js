const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'ec2-3-226-231-4.compute-1.amazonaws.com',
  database: 'd87qe1ge4bh6p0',
  user: 'prumjdhhfboptn',
  password: '66473cd755bbf65b9d203205e8f8abe8e84439d6e9c6e0bab175bf3b833722f8',
  port: 5432, 
  ssl: {rejectUnauthorized: false}
})

const getUsers = (req, res) => {
  pool.query('SELECT * FROM public.users', (err, data) => {
    if (err) {throw err}
    res.status(200).json(data.rows)
  })
}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query('SELECT * FROM public.users WHERE id = $1', [id], (err, data) => {
    if (err) {throw err}
    res.status(200).json(data.rows)

  })
}

module.exports = {
  getUsers,
  getUserById  
}