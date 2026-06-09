// import React, {useState, useEffect} from "react";
// import {useNavigate, useParams } from "react-router-dom";
// const UpdateContact=()=>{
//     const [name, setName]=useState("")
//     const [contact, setContact]=useState("")
//     const [relation, setRelation]=useState("")
//     const params=useParams();
//     const navigate=useNavigate();
//     useEffect(()=>{
//         getProductDetails();
//     }, []);
//     const getProductDetails= async()=>{
//         console.log(params);
//         let result = await fetch(`http://localhost:5000/prefillpro/${params.id}`);
//         result= await result.json();
//         setName(result.name)
//         setContact(result.contact)
//         setRelation(result.relation)
//     }
//     const Updatecontact=async ()=>{
//         console.log(name, contact, relation)
//         let result=await fetch(`http://localhost:5000/updatecontact/${params.id}`,{
//             method:'put',
//             body: JSON.stringify({name, contact, relation}),
//             headers:{
//                 'Content-Type':"application/json"
//             }
//         })
//         result = await result.json();
//         console.log(result);
//         navigate("/")
//     }
//     return(
//         <div>
//         <h2 className="head">Update-Laptop</h2>
//         <input type="text" placeholder="Enter the name" className="addbox"
//          value={name} onChange={(e)=>(setName(e.target.value))}/>
//         <input type="text" placeholder="Enter contact number" className="addbox"
//         value={contact} onChange={(e)=>(setContact(e.target.value))}/>
//         <input type="text" placeholder="Enter your relation" className="addbox"
//          value={relation} onChange={(e)=>(setRelation(e.target.value))}/>
//         <button className="button addbox" onClick={Updatecontact}>Update-Product</button>
//     </div>

//     )
// }
// export default UpdateContact;



import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [relation, setRelation] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getContactDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/prefillpro/${params.id}`
        );

        const result = await response.json();

        setName(result.name || "");
        setContact(result.contact || "");
        setRelation(result.relation || "");
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    getContactDetails();
  }, [params.id]);

  const updateContact = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/updatecontact/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            contact,
            relation,
          }),
        }
      );

      const result = await response.json();

      // console.log(result);
      // Use the result here!
        if (result.success || response.ok) {
            alert("Contact updated successfully!");
            // Optional: clear your state inputs here (e.g., setName(''), setContact(''))
        } else {
            alert("Failed to update contact: " + result.message);
        }
        navigate("/");
    }
     catch (error) {
        console.error("Error updating contact:", error);
    }
      
   
  };

  return (
    <div>
      <h2 className="head">Update Contact</h2>

      <input
        type="text"
        placeholder="Enter Name"
        className="addbox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Contact Number"
        className="addbox"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Relation"
        className="addbox"
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
      />

      <button className="button addbox" onClick={updateContact}>
        Update Contact
      </button>
    </div>
  );
};

export default UpdateContact;
