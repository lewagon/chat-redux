import React from 'react';
import { emojify } from 'react-emojione';

function strToRGB(str){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}

const Message = (props) => {
  const time = new Date(props.created_at).toLocaleTimeString()
  const color = strToRGB(props.author);
  const content = emojify(props.content);
  return (
    <div className="message-container">
      <i className="author">
        <span style={{ color }}>{props.author}</span>
        <small>{time}</small>
      </i>
      <p >{content}</p>
    </div>
  );
};

export default Message;
