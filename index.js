

const JSONSever = require('json-server')
const SDSever = JSONSever.create()
const router = JSONSever.router('SD.json')
const middleware = JSONSever.defaults()
const PORT = 3000 || process.env.PORT
SDSever.use(middleware)
SDSever.use(router)
SDSever.listen(PORT,()=>{
    console.log(` school server started at port: ${PORT} AND waiting for client request`);
})
