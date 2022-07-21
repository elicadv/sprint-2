const Dicas = (app, banco) => {
    app.get('/tips', (req, res) => {
        res.json({
            "tipo": banco.dicas[Math.floor(Math.random() * banco.dicas.length)]
        })
    })

    app.post('/create', (req, res) => {
        const body = req.body
        banco.dicas.push(body.tipo)
        res.json(body)
    })
}
export default Dicas