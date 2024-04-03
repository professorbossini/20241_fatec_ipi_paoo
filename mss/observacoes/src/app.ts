import express from 'express'
import uuid from 'uuid'
const app = express()
app.use(express.json())


/*
a estrutura da base de observações...
{
  "1": [
    {
      "id": "100",
      "texto": "Comprar açúcar"
    },
    {
      "id": "101",
      "texto": "Ver um filme"
    }
  ]
}
*/
interface Observacao{
  id: string;
  texto: string;
}
const observacoes: Record<string, Observacao[]> = {}
//POST /lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
  //1. gerar id de observação (descobrir como usar a versão 4 do uuid Typescript)

  //2. extrair o texto do corpo da requisição

  //3. pegar a coleção de observações do lembrete cujo id se encontra na url, caso exista. Caso contrário, pego uma coleção nova, vazia.

  //4. Na coleção pega no passo anterior, adiciono um novo objeto caracterizado por id e texto

  //5. Responder para o cliente com status 201 e entregando a ele a coleção atualizada

})

//GET /lembretes/123456/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {

})

const port = 5000
app.listen(port, () => {
  console.log(`Observações. ${port}.`)
})