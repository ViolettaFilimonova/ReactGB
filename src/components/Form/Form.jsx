// import React, {  useEffect, useState } from 'react';
//
// export const Form = () => {
//     const [messageList, setMessageList] = useState([])
//     let [text, setText] = useState('')
//     let [id, setId] = useState(0)
//     // let [author, setAuthor] = useState('User')
//
//     const addMessage = (newMessage) => {
//         setMessageList([...messageList, newMessage]);
//     }
//
//     useEffect(() => {
//
//         // setId(id += 1)
//         // if (messageList.length > 0 || messageList[messageList.length - 1].author === 'User'){
//         //     addMessage({author: 'Bot', text: 'I am Bot', id: id})
//         // }else {
//         //     addMessage({author: 'User', text: text, id: id})
//         // }
//         //
//         // if(messageList.author === 'User' && messageList.text.length === 0){
//         //
//         // }
//
//         // setTimeout(() => {
//         //
//         //
//         //
//         // }, 1800);
//     }, [messageList])
//
//
//     return (
//         <div className="Form">
//
//             <input type="text"
//                    value={text}
//                    onChange={e => setText(e.target.value)}
//                    placeholder='Введите сообщение'/>
//             <button onClick={addMessage} type='button'>Отправить</button>
//         </div>
//     );
// }
import { useState } from 'react';
import { AUTHOR } from '/src/contants';
import { Button } from '../Button';

export const Form = ({ addMessage }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addMessage({
            author: AUTHOR.user,
            value,
        });
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button label="send" disabled={!value} />
        </form>
    );
};
