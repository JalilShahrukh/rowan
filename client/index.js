$(document).ready(function() {
  var display = document.getElementById('display');
  var resturantsData = []; 

  document.getElementById("searchBtn").addEventListener('click', function() {
    fetch('/getResturants', { 
      method: 'POST', 
      body: JSON.stringify({city: document.getElementById('searchIn').value}),
      headers: { 
      'Content-Type': 'application/json'
      }
    }).then((response) => { 
      return response.json();
    }).then((resturants) => { 
      var node = document.createElement('div'); 
      resturantsData = resturants.body.businesses; 
      console.log('RESTURANTS!', resturants);
      for (let i = 0; i < resturants.body.businesses.length; i++) { 
        node = document.createElement('div'); 
        node.innerText = resturants.body.businesses[i];
        display.appendChild(node); 
      } 
      display.appendChild(list); 
    });
  });

  document.getElementById('sortByPrice').addEventListener('click', function() {
    var resturantsSortedByPrice = resturantsData.slice(); 
    resturantsSortedByPrice.sort((a, b) => { return a.price.length - b.price.length });
    let node = document.createElement('div');
    for (let i = 0; i < resturantsSortedByPrice.length; i++) { 
      node = document.createElement('div');
    }  
  });

  document.getElementById('sortByRating').addEventListener('click', function() {
    var resturantsSortedByRating = resturantsData.slice();
    resturantsSortedByRating.sort((a, b) => { return parseInt(a.rating) - parseInt(b.rating) });
    let node = document.createElement('div');
    for (let i = 0; i < resturantsSortedByRating.length; i++) { 
      node = document.createElement('div');
    } 
  });
}); 