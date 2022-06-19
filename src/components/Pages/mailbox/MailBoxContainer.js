import { useDispatch, useSelector } from "react-redux";
import { composeActions } from "../../../Store/ComposeToggle";
import axios from "axios";
import Compose from "./mailCompse";
import "./MailboxContainer.css";
import { useEffect, useState } from "react";
import MailInbox from "./MailInbox";
import { InboxActions } from  "../../../Store/inboxToggle";

const MailBoxBody = () => {
  const dispatch = useDispatch();
  const isCompose = useSelector((state) => state.compose.isCompose);
  const isInbox = useSelector((state) => state.isInbox.isInbox);
  var arr = [];
  const [msg, setmsg] = useState([]);

  const composeHandler = (event) => {
    event.preventDefault();
    dispatch(composeActions.toggleCompose());
  };

  const loadInbox = async () => {
    const Ename = localStorage.getItem("Email");
    const name = Ename.substring(0, Ename.lastIndexOf("@"));
    try {
      const res = await axios.get(
        `https://mailbox-19799-default-rtdb.firebaseio.com/${name}/receive.json`
      );
      if (res.statusText === "OK") {
        let index = 0;
        for (const key in res.data) {
          arr[index] = res.data[key];
          arr[index].id = key;
          index++;
        }
        setmsg([...arr]);
      }
    } catch (err) {
      console.log(`${err}`);
    }
  };
  useEffect(() => {
    loadInbox();
  });
  console.log(msg);

  const mails = msg.map((element) => {
    console.log(element.body);

    return (
      <MailInbox
        body={element.body}
        sender={element.sender}
        subject={element.subject}
        receiver={element.receiver}
        key={element.id}
        id={element.id}
      />
    );
  });
  const sendBoxHandler = () => {
    dispatch(InboxActions.setInbox(false));
  };
  const InBoxHandler = () => {
    dispatch(InboxActions.setInbox(true));
  };

  return (
    <div className="mailboxpage">
      <div className="sideBar">
        <div className="sideBarContent">
          <button className="ComposeBtn" onClick={composeHandler}>
            compose
          </button>
          <div className="inbox" onClick={InBoxHandler}>
            <label>Inbox</label>
          
          </div>
          <div className="inbox" onClick={sendBoxHandler}>
            <label> Sent</label>
          </div>
        </div>
      </div>
      {isCompose && (
        <div className="mailcontent">
          <Compose />
        </div>
      )}
      {!isCompose && isInbox && <div className="mailitems">{mails}</div>}
    </div>
  );
};

export default MailBoxBody;
