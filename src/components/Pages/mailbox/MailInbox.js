import parse from "html-react-parser"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './MailBox.css';
import {MailItemActions} from '../../../Store/MailBodyBox'
import {InboxActions} from '../../../Store/inboxToggle'

const MailInbox=(props)=>{
    const dispatch = useDispatch();
    console.log(props)

    const mailBoxHandler=async()=>{ 
        console.log(props)
        dispatch(MailItemActions.addNewItem(props))
        dispatch(MailItemActions.setClicked(true));
        dispatch(InboxActions.setInbox(false));
        console.log(props.id)
        const receiver = props.receiver;
        const name   = receiver.substring(0, receiver.lastIndexOf("@"));
        const id = props.id;
        const data ={
            "read": true
        }
        try{
            const res = await axios.patch(`https://mailbox-client-default-rtdb.firebaseio.com/${name}/receive/${id}.json`,data)
            console.log(res)
        }catch(err){
            console.log(err);
        }
    }
    console.log(props)
    return(
        <div >
            <div className="inboxlist" onClick={mailBoxHandler}>
            {!props.isRead && <span className={props.isRead? 'read' : 'unread'}>•</span>}
                <label className="iblist">{props.sender}</label>
                <label  className="iblist">{props.subject}</label><br/>
                <label className="iblist">{parse(props.body)}</label>
            </div>
        </div>
    )
}

export default MailInbox;