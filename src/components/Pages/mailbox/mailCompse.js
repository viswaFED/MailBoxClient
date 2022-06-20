import { useRef, useState } from "react";
import axios from 'axios';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./mailcompose.css";

const Compose = () => {
    const emailidRef = useRef();
    const SubjectRef = useRef();

  const [text, setText] = useState("");

  const submitHandler=async(event)=>{
    event.preventDefault();   
    const receiver = emailidRef.current.value;
    const sender = localStorage.getItem('Email');
    
    const name   = receiver.substring(0, receiver.lastIndexOf("@"));
    const Sendername  = sender.substring(0, sender.lastIndexOf("@"));
    console.log(Sendername);
    const data={
        sender:sender,
        receiver:receiver,
        subject:SubjectRef.current.value,
        body:text,
        read:false,
    }
    try{
        const res = await axios.post(`https://mailbox-19799-default-rtdb.firebaseio.com/${name}/receive.json`,data);
        console.log(res.statusText==='OK');
        if(res.statusText==='OK'){
            
            const res2 = await axios.post(`https://mailbox-19799-default-rtdb.firebaseio.com/${Sendername}/send.json`,data);
            if(res2.statusText==='OK'){
              alert('Mail Send Successfull');
            }else{
                throw new Error('Something Went wrong!');
            }

        }else{
          throw new Error('Something Went wrong!');
        }
    }catch(err){
        alert(err);
    }

}
  return (
    <>
      <div className="composediv">
        <div className="composeip">
          <label> To</label>
          <input type="email"  ref={emailidRef} className="inputemail"></input>
        </div>
        <div className="composeip">
          <input
            type="text"
            ref={SubjectRef}
            placeholder="Subject"
            className="inputSubject"
          ></input>
        </div> 
        <div className="composeiptext">
          <CKEditor editor={ClassicEditor} 
          className='texteditor'
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data);
          }}/>
        </div>
        <div className="composebutm">
          <button className="sendbtn" onSubmit={submitHandler}>Send</button>
        </div>
      </div>
    </>
  );
};
export default Compose;
