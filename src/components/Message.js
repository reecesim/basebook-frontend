// Message.js
import React from "react";

function Message({ message }) {
  return (
    <div>
      <p>
        {message.username}: {message.text}
      </p>
    </div>
  );
}

export default Message;
