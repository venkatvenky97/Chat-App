import React, { useEffect } from  "react";
import cx from 'classnames';

const ME = 'me';

function Message( ({ nextMessage, message, botTyping }));
  useEffect(() => {
    
     console.log("render!");
  }, [input])
    return (
    <p
      className={cx(
        'messages__message',
        'animate__animated animate__rubberBand',
        {
          'messages__message--me': message.user === ME,
          'messages__message--last': (!nextMessage && (!botTyping || message.user === ME))
            || (nextMessage && nextMessage.user !== message.user)
        }
      )}
      key={message.id}
    >
      {message.message}
    </p>
  );

