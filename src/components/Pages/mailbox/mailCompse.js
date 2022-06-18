import "./mailcompose.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
const Compose = () => {
  return (
    <>
      <div className="composediv">
        <div className="composeip">
          <label> To</label>
          <input type="email" className="inputemail"></input>
        </div>
        <div className="composeip">
          <input
            type="text"
            placeholder="Subject"
            className="inputSubject"
          ></input>
        </div>
        <div className="composeip">
          <CKEditor editor={ClassicEditor} 
          className='texteditor'/>
        </div>
        <div className="composebutm">
          <button className="sendbtn">Send</button>
        </div>
      </div>
    </>
  );
};
export default Compose;
