const http  = require('http')

const port = process.env.PORT || 8080

const app = require('./app.js')

  const server = http.createServer(app)


server.listen(port , ()=>{
   console.log("Server listen at port 8080")
})