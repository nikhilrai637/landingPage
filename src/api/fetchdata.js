const fetch = require("node-fetch");
export function fetchdata(id){
    
  return fetch(`https://my-json-server.typicode.com/nikhilrai637/Cache/posts/${id}`)
  .then(res =>  {
       return res.json()
  })
  .then (data => {  return data
      })
  .catch(err =>{console.log(err)})
   
   
}