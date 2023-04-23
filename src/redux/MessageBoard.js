import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessages, addMessage } from './messagesActions';
import { db } from './firebase/firebase';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import './messageBoard.css';

const MessageBoard = () => {
  const messages = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessages = () => {
      const messagesQuery = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        const messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        dispatch(setMessages(messages));
      });

      return () => unsubscribe();
    };

    fetchMessages();
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!name.trim() || !message.trim()) {
      return;
    }
  
    const newMessage = {
      name,
      message,
      timestamp: new Date().toISOString(),
    };
  
    try {
      const docRef = await addDoc(collection(db, 'messages'), newMessage);
      const doc = await docRef.get();
      const messageData = { id: doc.id, ...doc.data() };
      dispatch(addMessage(messageData));
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };  

  return (
    <div className="message-board">
      <p className="message-expiration">leave a message that expires in 24 hours</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          maxLength="140"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message-bubble">
            <div className="message-info">
              <span className="message-name">{msg.name}</span>
              <span className="message-time">
                {new Date(msg.timestamp).toLocaleString()}
              </span>
            </div>
            <div className="message-text">{msg.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
