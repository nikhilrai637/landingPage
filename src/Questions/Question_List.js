import React from "react";
import { Qdata } from "./Qdata";
function Question_List() {
  return (
    <div className="App">
     {Qdata.map((data,key) =>{
          return (
              <div>
                  <p>{data.qid}</p>
              </div>
          )
     } )}
   </div>
  );
}

export default Question_List;