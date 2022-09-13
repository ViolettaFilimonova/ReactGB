import React from 'react';
import style from './message.module.css';

export const MessageItem = ({item}) => {

    return (
        <>
            <h2 className={style.messageText} >{item.author}</h2>
            <p className={style.messageText} >{item.text}</p>
        </>
    );
};
