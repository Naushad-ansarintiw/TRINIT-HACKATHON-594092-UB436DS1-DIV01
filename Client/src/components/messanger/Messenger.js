import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Message from '../message/Message';
import "./Messenger.css";

const Messenger = () => {


  const [currentState,setcurrentState] = useState('');
  const [messages, setmessages] = useState([]);
  const [newMessage,setNewMesssage] = useState('');

  // to get the right user

  const {id} = useParams();

  // To get the messages for the user
  const getMessages = async () => {
    const res = await fetch('http://localhost:5000/api/getallmessages', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      console.log("error to fetch all data in p desboard");
    }
    else {
      setmessages(data);  
    }
  }

  useEffect(() => {
    getMessages();
  }, [currentState])


  // console.log(messages);


  const handleSubmit = async (e)=>{
    e.preventDefault();
    // now inserting the messages 

    const MessageObject = {
      senderId: id,
      text: newMessage
    };
    // console.log(MessageObject);

    try {
      const res = await axios.post('http://localhost:5000/api/insertmessage',MessageObject);
      console.log(res);

      setNewMesssage([...messages, res.data.text]);
      setcurrentState(newMessage);
      setNewMesssage('');
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
    <div className='messenger'>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {
            messages ?
              <>
                <div className="chatBoxTop">
                  {
                    messages.map(m => (
                      <Message message={m} own={m.senderId === id}/>
                    ))
                  }
                </div>
                <div className="chatBoxBottom">
                  <textarea className='chatMessageInput' placeholder='write something...' onChange={(e)=>setNewMesssage(e.target.value)} value={newMessage}></textarea>
                  <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                </div> </> : <div className="chatBoxBottom">
                <textarea className='chatMessageInput' placeholder='write something' onChange={(e)=>setNewMesssage(e.target.value)} value={newMessage}></textarea>
                <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Messenger