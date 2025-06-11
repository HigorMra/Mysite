const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/login', (req, res) => {
  const { email, location } = req.body
  console.log('Recebido email:', email);
  console.log('Localização:', location);

  if (!email) return res.status(400).json({ message: 'Email obrigatório.' })

  console.log(`Login de: ${email}, localização:`, location)
  res.json({ message: `Login bem-sucedido para ${email}` })
})

app.listen(5000, () => {
  console.log('Servidor backend rodando em http://localhost:5000')
})
