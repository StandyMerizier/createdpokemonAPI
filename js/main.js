//User can choose what pokemon he would like to get for information about
//user can select what type of pokemon
//user clicks on button to display information
//information about pokemon is displayed in the document(DOM)


//user clicks on button
//event listener
document.getElementById('search').onclick = request;


//when button is click the function request fires
function request(){
  //the value assigned in select is pulled from the (DOM) and stored in the variable Pokemon
  var pokemon = document.getElementsByTagName('select')[0].value;
  //retrieve data from the server from the URL and stores it in the variable req
  var req = new XMLHttpRequest();
  //whe the URL includes '/api?pokemon=' this is telling the js it is true
  req.open('GET', '/api?pokemon='+pokemon, true);
  //when web page is loaded, run this function
  req.onload = function(){
    //Code: 200 means OKAY, every is good. Code:300 requires more infor to locate endpoint
    if(req.status>=200 && req.status < 400){
      //successful endpoint or url
      // taking the object req with property name responseText and storing the value thats in property (responseText) to the variable data
      var data= JSON.parse(req.responseText);
      console.log(data)
      //The data for the pokemon information is display in the DOM
      document.getElementById('name').innerHTML = data.name;
      document.getElementById('type').innerHTML = data.type;
      document.getElementById('category').innerHTML = data.category;
    }else {
      //If we reach our target server but recieve an error, level Code: 400 or above
    }
  };
  //If URL if not true, run this function
  req.onerror = function(){

  }
  //If there are no errors, send the information to the server
  req.send();

}
