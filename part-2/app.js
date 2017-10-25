const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const query = require('./database.js')

app.use( express.static( __dirname + '/public' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );

app.get('/api/hotel/route', (req,res)=>{
  console.log('this worked!!!!--->')
  query.getAllGuests()
  .then(response =>{
    console.log('this is the response', response)
    res.send(1)
  })

})


let port = 3000
app.listen(port, ()=>{
  console.log('listening on port:', port)
})