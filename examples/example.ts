import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import treblle from '@treblle/express'

dotenv.config()
const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use(
  treblle({
    additionalFieldsToMask: ['password'],
    blocklistPaths: ['test'],
  })
)

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello World!' })
})

app.get('/test/message', (req: Request, res: Response) => {
  res.send({ message: 'Hello Test!' })
})

app.post('/test', (req: Request, res: Response) => {
  const inputData = req.body

  // Process your inputData here
  console.log('Received data:', inputData)

  // Send a response
  res.status(200).json({ message: 'Data received successfully' })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
