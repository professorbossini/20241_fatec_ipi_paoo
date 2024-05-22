import express from 'express'
import axios from 'axios'
const app = express()
app.use(express.json())

interface Evento{
  tipo: string;
  dados: {}
}
const eventos: Evento[] = [
  
]

app.post('/eventos', async (req, res) => {
  const evento = req.body
  eventos.push(evento)
  console.log(evento)
  try{
    //enviando o evento para o mss de lembretes
    await axios.post('http://192.168.1.147:4000/eventos', evento)
  }catch (e){}
  
  try {
    //enviando o evento para o mss de observaçoes
    await axios.post('http://192.168.1.147:5000/eventos', evento)
  } catch (e) { }
  try {
    //enviando o evento para o mss de consulta
    await axios.post('http://192.168.1.147:6000/eventos', evento)
  } catch (e) { }
  try {
    //envia o evento para o mss de classificação
    await axios.post('http://192.168.1.147:7000/eventos', evento)
  } catch (e) { }
  res.end()
})

app.get('/eventos', (req, res) => {
  res.json(eventos)
})

const port = 10000
app.listen(port, () => console.log(`Barramento de eventos. Porta ${port}`) )