require('dotenv').config()
const express = require('express')

// Dont forget to install body-parser with -- npm i body-parser
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const treblle = require('..')

app.use(bodyParser.json())

// Don't forget to set your Treblle API Key and Project ID in .env file
// TREBLLE_API_KEY=your-api-key
// TREBLLE_PROJECT_ID=your-project-id

app.use(
  treblle({
    additionalFieldsToMask: ['password'],
    blacklistPaths: ['test'],
  })
)

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' })
})

app.get('/test/message', (req, res) => {
  res.send({ message: 'Hello Test!' })
})

app.post('/test', (req, res) => {
  const inputData = req.body

  // Process your inputData here
  console.log('Received data:', inputData)

  // Send a response
  res.status(200).json({ message: 'Data received successfully' })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
