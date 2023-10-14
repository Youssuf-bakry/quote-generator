import "./App.css";
import React, { useState } from "react";
import {
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WorkplaceShareButton,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  const share = async () => {
    await navigator.share({
      text: quote.content,
    });
  };
  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="share">
          <WorkplaceShareButton quote={quote.content}>
            <WhatsappShareButton
              url="http://localhost:3000/"
              children={<WhatsappIcon round={true} />}
              title={`${quote.content} ${quote.author}`}
              separator="#"
            ></WhatsappShareButton>
            <FacebookShareButton
              url="www.google.com"
              children={<FacebookIcon round={true} />}
              quote={`${quote.content} ${quote.author}`}
            ></FacebookShareButton>
            <LinkedinShareButton
              url="http://localhost:3000/"
              children={<LinkedinIcon round={true} />}
              title={`${quote.content} ${quote.author}`}
              // summary={quote.content}
            ></LinkedinShareButton>
            <TwitterShareButton
              url="#"
              children={<TwitterIcon round={true} />}
              title={`${quote.content} ${quote.author}`}
              onClick={share}
            ></TwitterShareButton>
          </WorkplaceShareButton>
        </div>
      </div>
    </>
  );
};

export default App;
