import React, { useRef, useEffect } from "react";
import autosize from "autosize";

type textAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaAutosize = (props: textAreaProps) => {
  var textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef && textAreaRef.current) autosize(textAreaRef.current);
  });

  return <textarea ref={textAreaRef} {...props} />;
};
