import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = () => {
  const editorRef = useRef(null);
  const [editorcontent, setEditorcontent] = useState();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setEditorcontent(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey="sll6iit1di4smvja7pni78xbs2zsmb9c5j3yif1suer1x13b"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Type Your Request here</p>"
        init={{
          height: 200,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          file_picker_callback: (callback, value, meta) => {
            let input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();
            input.onchange = () => {
              let file = input.files[0];
              let reader = new FileReader();
              reader.onload = () => {
                callback(reader.result);
              };

              reader.readAsDataURL(file);
            };
          },

          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist  | fullscreen preview |" +
            "outdent indent help | removeformat",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {/* <button onClick={log}>Log editor content</button> */}
      {/* <div dangerouslySetInnerHTML={{ __html: editorcontent }} /> */}
    </>
  );
};

export default RichTextEditor;
