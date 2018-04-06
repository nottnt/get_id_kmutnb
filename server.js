var app = require('express')();
var port = process.env.PORT || 5000;


app.get('/', function (req, res) {
  res.send('<h1>Hello Node.js</h1>')
})
app.get('/fuck/:id', function (req, res) {
  let id = req.params.id
  res.send({stdid : id})
})

app.listen(port, function() {
  console.log('Starting node.js on port ' + port)
})

console.log('hello fucking project!!!')
