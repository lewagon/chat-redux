import React from 'react';

const Message = (props) => {
  const time = new Date(props.created_at).toLocaleTimeString()

  return (
    <div className="message">
      <div className="header">
        <div className="author">{props.author}</div>
        <div className="time">{time}</div>
      </div>
      <div className="content">{props.content}</div>
    </div>
  );
};

export default Message;
