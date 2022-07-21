import express from 'express'
import Dicas from "./controller/tarefa-controller.js"
import banco from './database/bd.js'

const port = 3000
const app = express()

app.use(express.json())
Dicas(app,banco)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})