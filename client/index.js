$(document).ready(function() {
  document.getElementById("searchBtn").addEventListener("click", function() {
    fetch('/getResturants', { 
      method: 'POST', 
      body: JSON.stringify({city: document.getElementById('searchIn').value}), //should match apiController
      headers: { 
      'Content-Type': 'application/json'
      }
    }).then((response) => { 
      return response.json();
    }).then((myjson) => { 
      console.log('Resolved!', myjson);
    });
  });
}); 