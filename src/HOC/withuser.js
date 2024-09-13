import React ,{useEffect,useState} from 'react';

const withUserdata = (Wrapercomponent)=>{

    return (props)=>{
const [user,setUser] = useState([])

useEffect(()=>{
//call the api and get data
let data = [{name:"Muktikanta",age:32,mob:"99999999"},
    {name:"shekhar",age:31,mob:"88888888"},
    {name:"vikram",age:30,mob:"7777777777"},
    {name:"akash",age:32,mob:"9000000000"}
]
setUser(data)

},[])
        return <Wrapercomponent data={user} {...props}/>
    }

}
export default withUserdata