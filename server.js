//the const keyword value would never change
//the string value 'http' would always be assigned in the variable http
const http = require('http')
//the string value 'fs' would always be assigned in the variable fs
const fs = require('fs')
//the string value 'url' would always be assigned in the variable url
const url= require('url')
//Format the url
var querystring = require('querystring')

//the method (createServer()) fires the function and adds the const http (or 'http') and assigns into the cont server
const server= http.createServer(function (response, res){
  //The pathname ('/') is added on the text of the url and assigns it to the const page
  const page = url.parse(response.url).pathname;
  var params = querystring.parse(url.parse(response.url).query);
  console.log(page)
  //if the page of the url contains '/' run this conditional
  if(page == '/'){
    //Conditional '/', read the file index.html
    fs.readFile('index.html', function(err, data){
      //server response back with Code: level 200
      res.writeHead(200, {'Content-Type': 'text/html'});
      //server response back with data from the index.html file
      res.write(data);
      //Server ends the response of the index.html file
      res.end()
    });
  }
  //If the pathname cotains '/api' in the url, run this condition
  else if (page == '/api'){
    //if 'pokemon' is one the parameters (quesrystring), run this condtion
    if('pokemon' in params){
      //if the parameter (querystring) is equal to the value 'pikachu', run this condition
      if(params['pokemon'] == 'pikachu'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Pikachu",
          type: "Electric",
          category: "Mouse"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['pokemon'] == 'squirtle'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Squirtle",
          type: "Water",
          category: "Tiny Turtle"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['pokemon'] == 'charmander'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Charmander",
          type: "Fire",
          category: "Lizard"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['pokemon'] == 'bulbasaur'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Bulbasaur",
          type: "Grass/Poison",
          category: "Seed"
        }
        res.end(JSON.stringify(objToJson));
      }
    }// if function of pokemon
  }// else if api condition
  else if (page == '/css/styles.css'){
    fs.readFile('css/styles.css', function(err, data){
      res.write(data);
      res.end();
    });
  }//End of the else if condition for css
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }//End of the else if condition for javascript


});// create server function

//When the server is live, listens for the port localhost port 8000
server.listen(8000);
