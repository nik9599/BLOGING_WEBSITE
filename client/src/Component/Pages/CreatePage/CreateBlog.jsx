import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import JoditEditor from "jodit-react";

export default function CreateBlog() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <form>
          <div>
            <label>Tittle</label>
            <input type="text" placeholder="enter the Tittle" />
          </div>
          <div>
            <label>Intro</label>
            <input type="text" placeholder="enter the intro" />
          </div>
          <div>
            <div></div>
            <div>
              <label>Upload Image</label>
              <input type="file" />
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <label>Tag</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <label>Content</label>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={newContent=>{setContent(newContent)}}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
