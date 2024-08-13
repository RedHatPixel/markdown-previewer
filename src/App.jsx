import React, { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
const App = () => {
  const [text, setText] = useState(`
# Markdown Previewer

## Subheading
### Sub-subheading

an example of [link](https://www.freecodecamp.org)

inline-code: \`<div></div>\`

a code block: 
\`\`\`
let x = 10;
while (x < 200) {
  x++;
  console.log(x);
}
\`\`\`

a blockquote: 
> blockquote

an image: 
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

an unordered list:
* item 1
* item 2

an ordered list:
1. item 1
2. item 2

a bolded text: **bolded text**
`);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const sanitizedHTML = DOMPurify.sanitize(marked(text));

  return (
    <>
      <div className="card">
        <div className="title">Editor</div>
        <textarea
          name="editor"
          id="editor"
          value={text}
          onChange={handleChange}
          placeholder="# TITLE EXAMPLE ..."
          rows="10"
        ></textarea>
      </div>
      <div className="card full-width">
        <div className="title">Preview</div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        ></div>
      </div>
    </>
  );
};

export default App;
