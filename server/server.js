import  http  from 'http';

const port = process.env.PORT || 8080;

import app from './app.js';

  const server = http.createServer(app);


server.listen(port , ()=>{
   console.log("Server listen at port 8080")
})