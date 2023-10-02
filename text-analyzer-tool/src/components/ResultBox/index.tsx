import { useEffect, useState } from 'react';
import './index.scss'

const ResultBox = (props: {charCount: number, wordCount: number, sentenceCount: number, paragraphCount: number, pronounCount: number}) => {

  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [pronounCount, setPronounCount] = useState(0);

  useEffect(() => {
    setCharCount(props.charCount);
    setWordCount(props.wordCount);
    setSentenceCount(props.sentenceCount);
    setParagraphCount(props.paragraphCount);
    setPronounCount(props.pronounCount);
  }, [props.charCount, props.wordCount, props.sentenceCount, props.paragraphCount, props.pronounCount]);

  const resultBar = [
    {
      title: 'Words',
      value: wordCount,
    },
    {
      title: 'Characters',
      value: charCount,
    },
    {
      title: 'Sentences',
      value: sentenceCount,
    },
    {
      title: 'Paragraphs ',
      value: paragraphCount,
    },
    {
      title: 'Pronouns',
      value: pronounCount,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
