import { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

const WordCloud = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const loadWish = async () => {
      const url = "/api/wish";
      const response = await fetch(url);
      const json = await response.json();
      const data = [];
      for (let word in json) {
        data.push({ text: word, value: json[word] });
      }
      setWords(data);
    };
    loadWish();
  }, []);

  const show = true;
  if (words.length === 0) {
    return null;
  } else {
    // https://react-wordcloud.netlify.app/usage/basic
    return <ReactWordcloud words={words} />;
  }
};

export default WordCloud;
