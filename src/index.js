import express from 'express'
import tarefaController from './controller/tarefa-controller.js'

const app = express()
const port = 3000

// middlewares
app.use(express.json()) // middleware que faz o parse do json do body

tarefaController(app)


app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})