import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = ({ state, updateDialogMessage, addMessage }) => {
  debugger;
  const onMessageChange = (e) => {
    let text = e.target.value;
    updateDialogMessage(text);
  };
  const addNewMessage = () => {
    addMessage();
  };

  return (
    <div className="dialogs">
      <div className="dialogs__inner">
        {state.dialogsData.map((el) => (
          <DialogItem name={el.name} id={el.id} />
        ))}
      </div>
      <div className="dialogs__messages">
        {state.messagesData.map((item) => (
          <Message message={item.message} />
        ))}
      </div>
      <div className="dialogs__form">
        <textarea
          onChange={onMessageChange}
          value={state.newMessageText}
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button onClick={addNewMessage} className="dialogs__btn">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
