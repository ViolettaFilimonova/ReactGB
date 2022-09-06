import React from 'react';
import style from './message.module.css';

export const Message = (props) => {
  return (
    <>
      <h2 className={style.messageText}>{props.text}</h2>
    </>
  );
};
