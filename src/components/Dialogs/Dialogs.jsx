import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogElements = state.dialogs.map ((dialog) => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} /> );
    let MessageElements = state.messages.map ((message) => <Message id={message.id} key={message.id} text={message.text} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { DialogElements }
            </div>
            <div className={style.messages}>
                <div>{MessageElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message' />
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;