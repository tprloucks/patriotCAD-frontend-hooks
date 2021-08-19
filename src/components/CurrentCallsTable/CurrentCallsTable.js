// import React,{ state } from "react";
// import axios from "axios";
// import Draggable, {DraggableCore} from 'react-draggable'
// import "./CurrentCallsTable.css"

//  state = {
//      callArray: []
//  }
// function Dashboard() {


   

//      axios.get("https://www.dallasopendata.com/resource/rfyj-p8vj.json?$limit=15")

//          .then(response => {

//              if (response.status === 200 && response != null) {

//                  this.setState({
//                      callArray: response.data
//                  })
//                  console.log(response.data);
//              } else {
//                  console.log("we got a problem houston");
//              }
//          })
//          .catch(error => {
//              console.log(error);
//          })

//     return ( 
//     <div >

//         <div>
//                <Draggable>
                
//                    <form>
                   
//                   <table className="container">
//                   <thead>
                 
//                     <tr>
//                       <th><h1>NOC</h1></th>
//                       <th><h1>Location</h1></th>
//                       <th><h1>Block</h1></th>
//                       <th><h1>Beat</h1></th>
//                       <th><h1>Unit</h1></th>
//                     </tr>
//                   </thead>
                 
//                   <tbody>
//                   {this.state.callArray.map((call, index)=>{
//                  return(
//                 <tr key={call}>
//                   <td>{call.nature_of_call}</td>
//                   <td>{call.location}</td>
//                   <td>{call.block}</td>
//                   <td>{call.beat}</td>
//                   <td>{call.unit_number}</td>
      
//                 </tr>
//                  )
//                  })}
//                   </tbody>
//                   <div>
                  
                  
            
              
                
               
            
//             </div>
            
//             </table>
//             </form>
           
//             </Draggable>
            
//                  )
                
              
//               </div>



//     </div>
//     )
// }

// export default Dashboard
