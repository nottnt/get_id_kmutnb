var app = require('express')();
//var port = process.env.PORT || 5000;
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })

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

app.get('/', function (req, res) {
nightmare
  .goto('http://klogic.kmutnb.ac.th:8080/kris/tess/dataQuerySelector.jsp?query=teachTab')
  .wait(1000)
  .select('select[name="facCode"]', '06')
  .wait(1000)
  .select('select[name="lectCode"]', 'SLJ')
  .wait(1000)
  .evaluate(function () {
    var data = []
    var tablerow = document.body.getElementsByTagName('table')[4].getElementsByTagName('tr')
    var tableday = document.body.getElementsByTagName('table')[4].getElementsByTagName('tr')[0].getElementsByTagName('td')
    var dayM = document.body.getElementsByTagName('table')[4].getElementsByTagName('tr')[1]
    var dayT = document.body.getElementsByTagName('table')[4].getElementsByTagName('tr')[2]
    var dayW = document.body.getElementsByTagName('table')[4].getElementsByTagName('tr')[3]
    var dayH = document.body.getElementsByTagName('table')[4].getElementsByTagName('tr')[4]
    var dayF = document.body.getElementsByTagName('table')[4].getElementsByTagName('tr')[5].getElementsByTagName('td')



for(var c = 1;c<tablerow.length;c++){

data.push(
  {
    datarow : tablerow[c].getElementsByTagName('td')[0].innerText,
    datarow2 : tablerow[c].getElementsByTagName('td')[1].innerText,
    count : tablerow.length

  }

)
}

// for (var i = 1; i < tableday.length; i++) {
//   data.push(
//     {
//       day: tableday[i].innerText,
//       // subject: tablerow[i].getElementsByTagName('td')[1].innerText,
//       // part: i,
//       count: tableday.length
//       //m:dayM.innerText,
//       // t:dayT.innerText,
//       // w:dayW.innerText,
//       // h:dayH.innerText,
//        //f:dayF.getElementsByTagName('td')[1].innerText


//     }
//   )
// }
    
    // for (var i = 0; i < tableday.length; i++) {//วันเวลา
    //     data.push(
    //       {
    //         day: tableday[i].innerText,
    //         // subject: tablerow[i].getElementsByTagName('td')[1].innerText,
    //         // part: i,
    //         count: tableday.length
    //         //m:dayM.innerText,
    //         // t:dayT.innerText,
    //         // w:dayW.innerText,
    //         // h:dayH.innerText,
    //          //f:dayF.getElementsByTagName('td')[1].innerText


    //       }
    //     )
    //   }
  
    // return data
    return data
  })

.end()

.then((value) => {
    
  res.send(value)
})
.catch(error => {
 
  console.log(error)
})

})


