var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('hi practice8')
})

app.listen(3000, () => {
  console.log("It's working!");
})
