import CheckList from "@editorjs/checklist";
// import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
// import Image from "@editorjs/image";
// import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
// import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Marker from '@editorjs/marker'
import Header from "@editorjs/header"

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
  checklist: CheckList,
  marker: Marker,
  embed: Embed,
  link: Link,
  list: List,
  quote: Quote,
  // image: Image,
  // code: Code,
  // inlineCode: InlineCode,
  // simpleImage: SimpleImage,
  react: ReactTool,
  delimiter: Delimiter
};