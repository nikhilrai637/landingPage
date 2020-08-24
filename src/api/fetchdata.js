const fetch = require("node-fetch");
export function fetchdata(){
    let ret = "data not found"
  return fetch('http://jsonplaceholder.typicode.com/users/10')
  .then(res =>  {
       return res.json()
  })
  .then (data => {  return data
      })
  .catch(err =>{console.log(err)})
   
   
}