import React from "react"

const listUser = ({data})=>{

    return (
        <>
      
     <div style={{"padding":"10px",background:"lightgrey",border:"1px solid grey",margin:"10px",width:"150px"}}>
     {data.length>0 && data.map((item)=>(
        
        <li key={item.mob}>{item.name}</li>
        
       ))}
     </div>
      
        </>
    )
}

export default listUser;
