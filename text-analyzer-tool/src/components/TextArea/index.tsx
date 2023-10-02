import { ChangeEvent, useEffect, useRef } from 'react'
import './index.scss'
import { on } from 'events';

const TextArea = (onTextChange: { onTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void; }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange.onTextChange(event);
  };

  return <textarea ref={textAreaRef} className="text-area" placeholder="Paste your text here..." onChange={handleInputChange}/>
}

export default TextArea
