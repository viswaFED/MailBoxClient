import parse from "html-react-parser"
import './MailBox.css';

const MailInbox=(props)=>{
    console.log(props)
    return(
        <div >
            <div className="inboxlist">
                <label className="iblist">{props.sender}</label>
                <label  className="iblist">{props.subject}</label><br/>
                <label className="iblist">{parse(props.body)}</label>
            </div>
        </div>
    )
}

export default MailInbox;