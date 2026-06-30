



import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateContact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [relation, setRelation] = useState("");

  const params = useParams();
  const navigate = useNavigate();
    // If process.env.REACT_APP_API_URL is undefined, use localhost instead
const API_URL = import.meta.env.REACT_API_URL || 'http://localhost:3000';

  useEffect(() => {
    const getContactDetails = async () => {
      try {
        const response = await fetch(
          `${API_URL}/prefillpro/${params.id}`
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
        `${API_URL}/updatecontact/${params.id}`,
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
