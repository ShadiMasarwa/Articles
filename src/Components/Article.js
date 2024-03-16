import React from "react";

const Article = ({ article, handleDeleteArticle }) => {
  return (
    <div className="card w-50 mt-2 text-start" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <div className="text-end">
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteArticle(article.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
