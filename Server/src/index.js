const http = require('http');
const dataJs = require('./utils/data');
const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req;

    if (url.includes('/rickandmorty/character')) {
      // Obtener el ID del personaje de la URL [El split genera un array y el .at toma la última posición del mismo]
      const id = url.split('/').at(-1);
      // Buscar el personaje en el archivo data.js
      const character = dataJs.find((character) => character.id === Number(id));
      if(!character){
        res.writeHead(404, {'Content-Type': 'text/plain'});
        return res.end("route not found");
      }
      
      res.writeHead(200, {'Content-Type': 'application/json'});
      return res.end(
        JSON.stringify(character)
        );
    }
  })
  .listen(PORT, 'localhost', () => {
    console.log('Puerto 3001');
  });