import React from 'react'
import Starrating from '../starrating/Starrating'
 
function Viewlist(props) {
  const deleteitem=(item)=>{
    console.log("removeItem"+item);
    props.remove(item)
}


return (
    
    <div><table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Select</th>
        <th scope="col">Work</th>
        <th scope="col">date</th>
        <th scope="col">Starrating</th>
        <th scope="col">Delete</th>
 
      </tr>
    </thead>
    <tbody>
    {props.todotask.map((task,i)=>{
 {return(
      <tr>
        <th scope="row"><input type="checkbox"/></th>
        <td>{task.work}</td>
        <td>{task.date}</td>
        <td><Starrating/></td>
        <td><button type="button" class="btn-close" aria-label="Close" onClick={() => deleteitem(i)}></button></td>
      </tr>
 )}})}
  </tbody>
    </table>
  
  
      
        </div>
 )}
  export default Viewlist

