import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Marker from '@editorjs/marker'
import Header from "@editorjs/header"
import Paragraph from "@editorjs/paragraph";
// import Image from "@editorjs/image";
// import InlineCode from "@editorjs/inline-code";
// import SimpleImage from "@editorjs/simple-image";
// import CheckList from "@editorjs/checklist";
// import Code from "@editorjs/code";

import ReactTool from './react-tool'

export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: 'Enter a Header',
      levels: [2, 3, 4],
      defaultLevel: 2
    }
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder:
        'Enter blog description',
    },
  },
  marker: Marker,
  embed: Embed,
  link: Link,
  list: List,
  quote: Quote,
  delimiter: Delimiter,
  // checklist: CheckList,
  // image: Image,
  // code: Code,
  // inlineCode: InlineCode,
  // simpleImage: SimpleImage,
  react: ReactTool,
};