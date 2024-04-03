import express from 'express'
const app = express()
app.use(express.json())


//POST /lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {

})

//GET /lembretes/123456/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {

})

const port = 5000
app.listen(port, () => {
  console.log(`Observações. ${port}`)
})