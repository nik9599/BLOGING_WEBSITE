import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';


const JoditEditorModule = ({ value, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    toolbarAdaptive: false,
    toolbarSticky: false,
    buttons: [
      'source', '|',
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'font', 'fontsize',
    ],
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    zIndex: 10000000000,
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={newContent => onChange(newContent)}
      onChange={newContent => {}}
    />
  );
};

export default JoditEditorModule;
