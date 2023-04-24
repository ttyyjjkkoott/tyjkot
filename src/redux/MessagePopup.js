import React from 'react';
import './MessagePopup.css';

const MessagePopup = ({ name, message, setName, setMessage, handleSubmit, closePopup }) => {
  const isSubmitDisabled = message.trim().length === 0;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event);
    closePopup();
    setName('');
    setMessage('');
  };
  

  return (
    <div className="message-popup-container">
      <div className="message-popup-content">
        <button onClick={closePopup} className="message-popup-close">x</button>
        <form onSubmit={handleFormSubmit} className="message-popup-form">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="message-popup-input"
          />
          <textarea
            placeholder="Your message"
            maxLength="140"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message-popup-textarea"
          ></textarea>
          <button type="submit" className="message-popup-button" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagePopup;
