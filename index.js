const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const pool = require('./configs/dbConfig')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const axios = require('axios')
const url = 'https://swapi.co/api/people/1/'
function getAllRequest()
{
   axios.get('http://swapi.py4e.com/api/planets/1/')
     .then(function (response) {
       var data = 
       {
         'nombre':response.data.name,
         'periodo_rotacion':response.data.rotation_period,
         'periodo_orbital':response.data.orbital_period,
         'diametro':response.data.diameter,
         'clima':response.data.climate,
         'gravedad':response.data.gravity,
         'terreno':response.data.terrain,
         'superficie_agua':response.data.surface_water,
         'poblacion':response.data.population,
         'creado':response.data.created,
         'editado':response.data.edited,
         'url':response.data.url,

        }
      console.log(data);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
app.post('/categorias',(req,res)=>{

  var id = req.body.id;
 
  axios.get('http://swapi.py4e.com/api/planets/'+id+'/')
  .then(function (response) {
    var data = 
    {
      'nombre':response.data.name,
      'periodo_rotacion':response.data.rotation_period,
      'periodo_orbital':response.data.orbital_period,
      'diametro':response.data.diameter,
      'clima':response.data.climate,
      'gravedad':response.data.gravity,
      'terreno':response.data.terrain,
      'superficie_agua':response.data.surface_water,
      'poblacion':response.data.population,
      'residentes':response.data.residents,
      'peliculas':response.data.films,
      'creado':response.data.created,
      'editado':response.data.edited,
      'url':response.data.url,

     }
     res.send(data)
  })
  .catch(function (error) {
   console.log(error);
  })
  .then(function () {
  });
})
app.get('/categorias/', (req, res) => {
  
  



})

app.all('*', function (req, res) {
  const response = { data: null, message: 'Route not found!!' }
  res.status(400).send(response)
})

module.exports.handler = serverless(app)