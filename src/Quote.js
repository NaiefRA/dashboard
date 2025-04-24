import { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState({
    text: "If my mind can conceive it, if my heart can believe it, then I can achieve it.",
    author: "Muhammad Ali",
  });
  return (
    <div className="quote container">
      <h2>Quote of the Day</h2>
      <div className={`quote-content`}>
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">— {quote.author}</p>
      </div>
    </div>
  );
};
export default Quote;
