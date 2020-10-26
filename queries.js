const Pool = require('pg').Pool;
const pool = new Pool({
 host: 'ec2-54-246-85-151.eu-west-1.compute.amazonaws.com',
  database: 'dcs7tllo89a6ek',
  user:'uamxqgajqulevs',
  password: '099ac5d682028ea4c1c0f8f93236101fc4f03e1db21e21335743a7ed1f6b5d25',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
  getUserById  
}