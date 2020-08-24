const fetch = require("node-fetch");
  fetch('http://jsonplaceholder.typicode.com/users/10' , {
    method : 'POST',
    headers : {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify({
        
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
         
     )
  }
 
   )
  .then(res =>  {
       return res.json()
  })
  .then(data => console.log(data))
  .catch(err =>{console.log(err)})