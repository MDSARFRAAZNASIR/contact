import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const SingUp=()=>{
    const [name, setName]=useState(" ")
    const [email, setEmail]=useState(" ")
    const [password, setPassword]=useState(" ")
    const navigate=useNavigate();
    const Singup = async()=>{
        // console.log(name ,email, password)
        let result = await fetch("http://localhost:5000/register",{
            method: 'post',
            body: JSON.stringify({name ,email, password,}),
            headers:{
                'content-Type':'application/json'
            }
        })
        result= await result.json();
        // console.log(result);
        if(result){
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/')

        }
        

    }
    return(
        <div>
            <h2 className="head">Register Now</h2>
            <input type="text" placeholder="Enter your name" className="addbox"
            value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter your email" className="addbox"
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter password" className="addbox"
            value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={Singup} type="button" className="button addbox">Sing-Up</button>
    
        </div>
    )
}

export default SingUp;