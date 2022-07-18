import { useEffect, useState } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';

const App: React.FC = () => {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  const fetchQuote = () => {
    const index = Math.floor(Math.random() * 103)
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quotes[index].quote)
        setAuthor(data.quotes[index].author)
      })
  }

  function getColor() {
    let letters = '0123456789ABCDEF'.split('')
    var color = '#'
    for (let i = 0; i < 6; i++)
      color += letters[Math.round(Math.random() * 15)]
    // 於 body style 新增一屬性
    document.body.style.setProperty('--mainColor', color);
  }

  useEffect(() => {
    fetchQuote()
    getColor()
  }, [])

  return <>
    <main className="px-14 py-10 bg-white rounded">
      <div className="quote-box">
        <div className="text-3xl">
          <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
        </div>
        <div className="my-6 text-right">- {author}</div>
      </div>
      <div className="text-left">
        <button className="btn mr-2"><a href="https://twitter.com/intent/tweet"><FontAwesomeIcon icon={faTwitter} /></a></button>
        <button className="btn"><a href="https://www.tumblr.com/new/quote"><FontAwesomeIcon icon={faTumblr} /></a></button>
        <button className="changeBtn" onClick={() => {
          fetchQuote()
          getColor()
        }
        }>New quote</button>
      </div>
    </main>
    <footer className="mt-3 text-sm">by kir4che</footer>
  </>
}

export default App;
