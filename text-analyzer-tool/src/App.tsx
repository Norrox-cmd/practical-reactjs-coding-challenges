import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [pronounCount, setPronounCount] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const [longestWord, setLongestWord] = useState('-');


  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(event.target.value);
    setCharCount(event.target.value.length);
    setWordCount(event.target.value.split(/[ ]{1,}./).length);
    setSentenceCount(event.target.value.split(/[.!?]/).length - 1);
    setParagraphCount(event.target.value.split('\n\n').length);
    setPronounCount(event.target.value.split(/[ \n]/).filter((word) => pronouns.includes(word.replace(/[.!?,\n]/, '').toLowerCase())).length);
    if (event.target.value.length === 0) {
      setWordCount(0);
      setParagraphCount(0);
    }
    setLongestWord(wordCount == 0 ? '-' : event.target.value.split(/[ \n]/).sort((a, b) => b.replace(/[.!?,\n]/, '').length - a.replace(/[.!?,\n]/, '').length)[0].replace(/[.!?,\n]/, ''));
  };

  useEffect(() => {
    setReadTime(wordCount == 0 ? 0 : Math.ceil(wordCount / 225));
  }, [wordCount]);

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox charCount={charCount} wordCount={wordCount} sentenceCount={sentenceCount} paragraphCount={paragraphCount} pronounCount={pronounCount} />
          <TextArea onTextChange={handleTextChange} />
          <BottomResultBox readTime={readTime} longestWord={longestWord} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
