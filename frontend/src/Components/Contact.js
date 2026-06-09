import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
const Contact=()=>{
    const [contacts, setContact]=useState([])
       useEffect(()=>{
        getContacts();
       },[]);
       const getContacts= async()=>{
        let result = await fetch("http://localhost:5000/contacts",{
            headers:{
                'content-Type':'application/json'
            }
        })
        result= await result.json();
        setContact(result)
       }
    //    console.log("contacts", contacts)

       const Contactdelete= async(id)=>{
            let result = await fetch(`http://localhost:5000/delete/${id}`,{
                method:'delete',
                headers:{
                    "content-Type":"application/json"
                }
            });
            result= await result.json();
            if(result){
                alert("record delete");
                getContacts();
            }
        }
        const Searchcontact= async (event)=>{
            let key=event.target.value;
            if(key){
                let result= await fetch(`http://localhost:5000/search/${key}`)
                result= await result.json();
                if(result){
                    setContact(result);
                }
            }else{
                getContacts();
            }
        } 
       return (

        <div className="product-list">
            <h2 className="head">Contact list</h2>
            <input type="text" placeholder="search contact" className="searchbar" 
            onChange={Searchcontact}/>
            <ul>
                <li>Sr.No.</li>
                <li>Name </li>
                <li>Contact</li>
                <li>Relation</li>
                <li>Operation</li>
            </ul>
            {
              contacts.map((item ,index)=>
                <ul key ={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.contact}</li>
                    <li>{item.relation}</li>
                    <li>
                        <button className="delete" onClick={()=>Contactdelete(item._id)}>Delete</button>
                        <button><Link className="upbotton" to={"/updatecontact/" +item._id}>Update</Link></button>
                        
                    </li>
                   
                </ul>
                )
                
            }

        </div>
    )
}
export default  Contact;