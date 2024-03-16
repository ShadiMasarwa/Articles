import { useState } from "react";
import Article from "./Article";
import Edit from "./Edit";

const Articles = ({ articles, handleDeleteArticle, setArticles }) => {
  const [currArticleEdit, setCurrArticleEdit] = useState(null);
  const handleEditArticle = (id) => {
    setCurrArticleEdit(articles.find((el) => el.id === id));
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {articles.map((el) => {
          return (
            <Article
              article={el}
              handleDeleteArticle={handleDeleteArticle}
              handleEditArticle={handleEditArticle}
              key={el.id}
            />
          );
        })}
      </div>
      {console.log(currArticleEdit)}
      {currArticleEdit ? (
        <Edit
          currArticleEdit={currArticleEdit}
          setCurrArticleEdit={setCurrArticleEdit}
          articles={articles}
          setArticles={setArticles}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Articles;
