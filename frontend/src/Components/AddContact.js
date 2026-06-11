import React, { useState } from "react";
const AddContact=()=>{
    const [name, setName]=useState("")
    const [contact, setContact]=useState("")
    const [relation, setRelation]=useState("")
     //If process.env.REACT_APP_API_URL is undefined, use localhost instead
const API_URL = process.env.REACT_API_URL || 'http://localhost:5000';


  


    const Addcontact = async () => {
    try {
        let response = await fetch(`${API_URL}/addcontact`, {
            method: 'post',
            body: JSON.stringify({ name, contact, relation }),
            headers: {
                'content-Type': "application/json"
            }
        });
        
        const result = await response.json();
        
        // Use the result here!
        if (result.success || response.ok) {
            alert("Contact added successfully!");
            // Optional: clear your state inputs here (e.g., setName(''), setContact(''))
        } else {
            alert("Failed to add contact: " + result.message);
        }
    } catch (error) {
        console.error("Error adding contact:", error);
    }
};
    return(
        <div>
            <h2 className="head">Add Contact</h2>
            <input type="text" placeholder="Enter the  name" className="addbox"
            value={name} onChange={(e)=>(setName(e.target.value))}/>
            <input type="text" placeholder="Enter  mobile number" className="addbox"
            value={contact} onChange={(e)=>(setContact(e.target.value))}/>
            <input type="text" placeholder="Enter the relation" className="addbox"
            value={relation} onChange={(e)=>(setRelation(e.target.value))}/>
            <button onClick={Addcontact} className="button addbox">Add-Contact</button>
        </div>
    )
}
export default AddContact;