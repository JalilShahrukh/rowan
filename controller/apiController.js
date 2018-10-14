const yelp = require('yelp-fusion'); 
const client = yelp.client('');

const apiController = {}; 

apiController.getResturants = (req, res) => {
  //console.log(req.body);  
  client.search({ 
    location: req.body.city,
  }).then(response => { 
    console.log(response); 
    res.send(response); 
  }).catch(e => { 
    console.log(e); 
  });
}

module.exports = apiController; 