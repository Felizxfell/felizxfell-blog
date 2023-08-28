'use client'

import { ThemeQuill } from "@/types/types.p";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type PropsQuill = {
  theme?: ThemeQuill
  readonly?: boolean
}

export default function Quill({ theme = ThemeQuill.snow, readonly = false }: PropsQuill) {
  const [value, setValue] = useState("");

  const toolbarOptions = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      ['link', 'blockquote'],                           //'code-block'
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      //[{ 'script': 'sub'}, { 'script': 'super' }],    // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{
        'align': []
      }],
      //[{ 'direction': 'rtl' }],                         // text direction
      ['clean']                                         // remove formatting button
    ]
  }

  return <ReactQuill theme={theme} modules={toolbarOptions} value={value} onChange={setValue} readOnly={readonly} />;
}
