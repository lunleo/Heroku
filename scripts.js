const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.use(express.static("resume"));

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})





/*
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
	let filePath = path.join(__dirname, 'resume', req.url === '/' ? 'index.html': req.url)

	const ext = path.extname(filePath)
	if (!ext) filePath += '.html'

	let contentType = 'text/html'
	if (ext === '.css') contentType = 'text/css'
	if (ext === '.js') contentType = 'text/javascript'

	fs.readFile(filePath, (err, content) => {
		if (err){
			fs.readFile(path.join(__dirname, 'resume', 'error.html'), (err, data) => {
				if (err) {
					res.writeHead(500)
					res.end('Error')

				} else {
					res.writeHead(200, {'Content-Type': 'text/html'})
					res.end(data)
				}
			})
		} else{
			res.writeHead(200, {'Content-Type': contentType})
			res.end(content)
		}
	})
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
	console.log('Server has been started on', PORT)
})
*/