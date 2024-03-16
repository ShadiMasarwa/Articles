import React, { useState } from "react";

const Form = ({ setArticles, articles, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getArticle = () => {
    setId(id + 1);
    const newEntry = { id, title, description };
    setArticles([...articles, newEntry]);
  };

  return (
    <div className="d-flex justify-content-center ">
      <form className="w-50 bg-secondary-subtle mt-1 d-flex flex-column align-items-center py-5">
        <div className="mb-3 w-75 text-start fw-bold">
          <label className="form-label ps-1">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 w-75 text-start fw-bold ">
          <label className="form-label ps-1">Article</label>
          <textarea
            type="text"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => getArticle()}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Form;
