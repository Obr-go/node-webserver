const express = require('express')
const hbs = require('hbs')
var app=express();


var port = process.env.PORT || 3000;

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))



//app.use((req,res,next)=>{
  //console.log(req.url)
  //next();
//})

//app.use(function(req,res,next){
  //res.render("Maintenance")
  //next()
  //console.log("set h");
//})

hbs.registerPartials(__dirname + '/views')

app.get('/', (req,res)=>{

  res.send("<h1>Gagan</h1>")
})

app.get('/home', (req,res)=>{

  res.render('Home',{
     dt:new Date(),
     yr:new Date().getFullYear(),
     arr:["Gagan", "Oberoi","Yes done it"]
  })
})


app.get('/about', (req,res)=>{

  res.render('About',{
     dt:new Date(),
     yr:new Date().getFullYear()
  })
})

//console.log(process.env.PORT)

app.listen(port,function(){
  console.log("App is up and running on port " + port)
})
