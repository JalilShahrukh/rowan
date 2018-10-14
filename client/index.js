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
      resturantsData = resturants.jsonBody.businesses; 
      let output = `<h2>Resturants</h2>`;
      resturantsData.forEach(function(resturant) {
        if (resturant.price === undefined) resturant.price = '$'; 
        output += ` 
          <div class="nodes">
            <h3>${resturant.name}</h3>
            <p><strong>Address: </strong> ${resturant.location.address1 + ", " + resturant.location.city + " " + resturant.location.state + " " + resturant.location.zip_code}</p>
            <p><strong>Phone: </strong>${resturant.phone}</p>
            <p><strong>Price: </strong>${resturant.price}</p>
            <p><strong>Rating: </strong>${resturant.rating}</p>
            <a href=${resturant.url}>${resturant.url}</a>  
          </div>
        `;
      }); 
      display.innerHTML = output; 
    });
  });

  document.getElementById('sortByPrice').addEventListener('click', function(e) {
    if (display.innerHTML === '') e.preventDefault(); 
    var resturantsSortedByPrice = resturantsData.slice(); 
    resturantsSortedByPrice.sort((a, b) => { return b.price.length - a.price.length });

    let output = `<h2>Resturants</h2>`;
    resturantsSortedByPrice.forEach(function(resturant) {
      output += ` 
        <div class="nodes">
          <h3>${resturant.name}</h3>
          <p><strong>Address: </strong> ${resturant.location.address1 + ", " + resturant.location.city + " " + resturant.location.state + " " + resturant.location.zip_code}</p>
          <p><strong>Phone: </strong>${resturant.phone}</p>
          <p><strong>Price: </strong>${resturant.price}</p>
          <p><strong>Rating: </strong>${resturant.rating}</p>
          <a href=${resturant.url}>${resturant.url}</a>  
        </div>
      `;
    }); 
    display.innerHTML = output;
  });

  document.getElementById('sortByRating').addEventListener('click', function(e) {
    if (display.innerHTML === '') e.preventDefault();
    var resturantsSortedByRating = resturantsData.slice();
    resturantsSortedByRating.sort((a, b) => { return parseFloat(b.rating) - parseFloat(a.rating) });

    let output = `<h2>Resturants</h2>`;
    resturantsSortedByRating.forEach(function(resturant) {
      output += ` 
        <div class="nodes">
          <h3>${resturant.name}</h3>
          <p><strong>Address: </strong> ${resturant.location.address1 + ", " + resturant.location.city + " " + resturant.location.state + " " + resturant.location.zip_code}</p>
          <p><strong>Phone: </strong>${resturant.phone}</p>
          <p><strong>Price: </strong>${resturant.price}</p>
          <p><strong>Rating: </strong>${resturant.rating}</p>
          <a href=${resturant.url}>${resturant.url}</a>  
        </div>
      `;
    }); 
    display.innerHTML = output;
  });
}); 