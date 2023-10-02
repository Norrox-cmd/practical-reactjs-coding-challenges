import { useEffect, useState } from 'react';
import './index.scss'

const BottomResultBox = (props : {readTime: number, longestWord: string}) => {

  const [readTime, setReadTime] = useState(0);
  const [longestWord, setLongestWord] = useState('-');

  useEffect(() => {
    setLongestWord(props.longestWord);
  }, [props.longestWord])

  useEffect(() => {
    setReadTime(props.readTime);
  },[props.readTime]);

  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: readTime === 0 ? '-' : `~${readTime} minute`,
    },
    {
      title: 'Longest word:',
      value: longestWord,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
