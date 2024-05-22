import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())
/*
  {
    "1": {
      "id": "1",
      "texto": "Fazer café"
    },
    "2": {
      "id": "2",
      "texto": "Nadar"
    }
  }
*/
interface Lembrete {
  id: string;
  texto: string;
}
const lembretes: Record <string, Lembrete> = {}
let id: string = '1'
//GET /lembretes obter a coleção de lembretes
app.get('/lembretes', (req, res) => {
  res.json(lembretes)
})


//POST /lembretes cadastrar novo lembrete
app.post('/lembretes', (req, res) => {
  //extrair o texto do corpo da requisição:  {"texto": "Fazer café"}
  const { texto } = req.body
  //construir um novo lembrete
  const lembrete = { id, texto }
  //armazenar o novo lembrete
  lembretes[id] = lembrete
  //incremento o id
  id = (+id + 1).toString()
  //emitindo o evento
  axios.post('http://192.168.1.147:10000/eventos', {
    tipo: 'LembreteCriado',
    dados: lembrete
  })
  //responder ao cliente
  res.json(lembrete)
})

//POST /eventos
app.post('/eventos', (req, res) => {
  try{
    console.log(req.body)
  }
  catch(e){}
  res.send()
})

// //GET /lembretes/{id} obter um lembrete pelo id
// //pesquisar como podemos pegar o id dado que ele faz parte da url
// app.get('', (req, res) => {
  
// })


const port = 4000
app.listen(port, () => console.log(`Lembretes. Porta ${port}.`))