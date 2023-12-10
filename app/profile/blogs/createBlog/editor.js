'use client'
import { useRef, useMemo, useState } from 'react'
import JoditEditor from 'jodit-react'
import { CreateBlog } from './uploadBlog'
const Jodit = () => {
  const editor = useRef(null)
    const [content, setContent] = useState('')
    function uploadblog(){
      CreateBlog(content);
      setContent('');
        
  }
  return (
    <div className="py-20 h-screen bg-black">
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
        className="text-black"
      />
      <button onClick={() => uploadblog()} className="bg-white">
        submit{" "}
      </button>
    </div>
  );
}
export default Jodit