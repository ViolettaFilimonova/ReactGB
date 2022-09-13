import './App.css';
import './index.css';
import {useState} from "react";
import {Message} from './components/Message/Message'
import React, {  useEffect } from 'react';

function App() {
    const [messageList, setMessageList] = useState([])
    let [text, setText] = useState('')
    let [author, setAuthor] = useState('')
    useEffect(() => {
        addMessage()
    }, [])
    const addMessage = () => {
        let message = {author: author, text: text}
        setMessageList([...messageList, message]);
        setText('')
        setAuthor('')
        setTimeout(() => {
            if (messageList.length > 0) {
                alert("Сообщение доставлено!");
            }
        }, 1800);
    }

  return (
    <div className="Form">
        <Message message={messageList}/>
        <input type="text"
               value={author}
               onChange={e => setAuthor(e.target.value)}
               placeholder='Введите имя'/>
        <input type="text"
               value={text}
               onChange={e => setText(e.target.value)}
               placeholder='Введите сообщение'/>
        <button onClick={addMessage} type='button'>Отправить</button>
    </div>
  );
}

export default App;
