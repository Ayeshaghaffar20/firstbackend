import express from "express"
const app = express()
const port = process.env.PORT || 5000
import path from "path"

const __dirname = path.resolve()
app.use("/" , express.static(path.join(__dirname,"./frontend/dist")))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/weather', (req, res) => {
    res.send('weather is sunny in karachi!')
  })
  app.get('/weather/:cityName', (req, res) => {
    res.send(req.params)
  })
  app.get('/weather/:cityName/:side', (req, res) => {
    res.send(req.params)
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})