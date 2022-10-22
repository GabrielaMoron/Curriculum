const express = require('express')
const app = express()
const port = 3001
app.use( express.static(__dirname + '/public/img'));
app.use( express.static(__dirname + '/public/vendor'));
app.use( express.static(__dirname + '/public'));


app.set('view engine','ejs')

app.set('views',__dirname + '/views')

app.get('/', (req, res) => {

  /*res.writeHead(200,{'Content-type':'text-html'});*/

res.render('index')

})

app.get('/index', (req, res) => {

    /*res.writeHead(200,{'Content-type':'text-html'});*/

  res.render('index')
  
})

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.get('/estudios', (req, res) => {

    res.render('estudios')
  
})

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.get('/habilidades', (req, res) => {

    res.render('habilidades')
  
})


app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.get('/perfil', (req, res) => {

    res.render('perfil')
  
})

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.get('/referencias', (req, res) => {

    res.render('referencias')
  
})



/*
app.get('/clientes', (req, res) => {
    res.send('<h1>bienvenido</h1>')
    console.log(__dirname)

  })
  app.get('/usuarios', (req, res) => {
    res.send('<h1>Hola Gaby</h1>')
  })
*/
  app.use( (req, res,next) => {
    res.status(404).sendFile(__dirname+ '/public/404.html')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
