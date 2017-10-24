const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/shout/:word', (resquest, response) => {
  let word = request.params.word
  word = word.toUpperCase().concat()

  response.set('content-type', 'text/plain')
    .send(word)
    .status(200)
})

app.post('/api/array/merge', (request, response) => {
  const array1 = request.body.array1
  const array2 = request.body.array2

  if(Array.isArray(array1) && Array.isArray(array2)) {
    response.json({"result": array1.concat(array2)})
  } else {
    response.status(400).json({"error": "It must be an array entered."})
  }
})

app.listen(3000)
console.log('Listening on port 3000...')