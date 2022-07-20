import Dica from "../model/tarefa.js"

const tarefaController = (app)=>{
// Devolver uma das dicas armazenadas no BD de forma aleatória
    
app.get('/tips', (req, res)=>{
    const dica = new Dica()
        res.json({"sugestão": dica.pegarDica(),
                    "erro": false}
    )
    })
//Receber a dica e guardar no banco de dados
    app.post('/create', (req, res)=>{
        const body = req.body
        const dica = new Dica(body.dica)
        dica.inserirDica(dica)
        res.json({ "msg" : "Sugestão inserida",
                   "sugestão" : dica,
                   "erro" : false,
                }
        )
    })
}

export default tarefaController