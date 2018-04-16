var app = require('express')();
var port = process.env.PORT || 5000;
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

// app.get('/', function (req, res) {
//   res.send('<h1>Hello Node.js</h1>')
// })
// app.get('/:id', function (req, res) {
//   let id = req.params.id
  
//   res.send({stdid : id})
// })

app.listen(port, function() {
  console.log('Starting node.js on port ' + port)
})

// console.log('hello fucking project!!!')

app.get('/getid', function (req, res) {
nightmare
  .goto('http://klogic.kmutnb.ac.th:8080/kris/tess/dataQuerySelector.jsp?query=teachTab')
  .wait(1000)
  .select('select[name="facCode"]', '06')
  .wait(1000)
  .select('select[name="lectCode"]', 'AMK')
  .wait(1000)
  .evaluate(function () {
    var data = []
    var x = document.body.getElementsByTagName('table')[6].getElementsByTagName('tr')
    for (var i = 1; i < x.length; i++) {
      data.push(
        {
          id: x[i].getElementsByTagName('td')[0].innerText,
          name: x[i].getElementsByTagName('td')[1].innerText
        }
      )
    }
    return data
  })

.end()
.then((value) => {
    
  res.send({value})
})
.catch(error => {
  console.error('Search failed:', error)
})
})


