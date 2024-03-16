import { useState } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import Form from "./Components/Form";

function App() {
  const [articles, setArticles] = useState([]);
  const [id, setId] = useState(0);
  const handleDeleteArticle = (id) => {
    const tempArticles = articles.filter((el) => el.id !== id);
    setArticles([...tempArticles]);
  };

  return (
    <div className="App position-relative">
      {/* In this project I used PROPS only */}
      <Form
        setArticles={setArticles}
        articles={articles}
        id={id}
        setId={setId}
      />
      <Articles
        articles={articles}
        setArticles={setArticles}
        handleDeleteArticle={handleDeleteArticle}
      />
    </div>
  );
}

export default App;
