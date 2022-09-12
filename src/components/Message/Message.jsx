import React from 'react';

import {MessageItem} from "components/Message/MessageItem";

export const Message = ({message}) => {

  return (
    <>
        {message.map(item =>
            <div key={item.author}>
                <MessageItem item={item}/>
            </div>
        )}
    </>
  );
};
