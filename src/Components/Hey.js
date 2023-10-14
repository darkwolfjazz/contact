import React, { useEffect, useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import {db} from "./firebase";
import {Form,Formik} from "formik"
const Hey = () => {
   
  const[Contacts,setContacts]=useState([]);

  useEffect(()=>{
 
    const getContacts=async()=>{
       
      try {
      const ContactsRef=collection(db,"contacts");
      const contactSnapshot=await getDocs(ContactsRef)
      const contactList=contactSnapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data(),
        };
      });
      setContacts(contactList);


      } catch (error) {
        
      }

    }
    getContacts();
   

  },[])
  
  return (
    <div>
      <div className='h-[60px] bg-white m-4 rounded-lg'>Firebase Contact App</div>
      <input className='rounded-md' type='text' placeholder='Search Contact'></input>
      <div>
        {
          Contacts.map((contact=>
          <div key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
          </div>
            ))}
      </div>
    <button className='bg-white gap-3'> Add to Database</button>
      <Formik>
        <Form>
          <div>
            
          </div>

        </Form>
      </Formik>
    </div>
    
  )
}

export default Hey