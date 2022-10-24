const express= require('express')
const router=express.Router()

router.get('/', (req, res) => {

    /*res.writeHead(200,{'Content-type':'text-html'});*/
  
  res.render('index')
  
  })


  router.get('/index', (req, res) => {

    /*
res.writeHead(200,{'Content-type':'text-html'});*/

  res.render('index')
  
})


router.get('/estudios', (req, res) => {

    res.render('estudios')
  
})


router.get('/habilidades', (req, res) => {

    res.render('habilidades')
  
})



router.get('/perfil', (req, res) => {

    res.render('perfil')
  
})


router.get('/referencias', (req, res) => {

    res.render('referencias')
  
})

  
module.exports = router;