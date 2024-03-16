import React, { useState } from "react";

const Edit = ({
  currArticleEdit,
  setCurrArticleEdit,
  articles,
  setArticles,
}) => {
  const [title, setTitle] = useState(currArticleEdit.title);
  const [description, setDescription] = useState(currArticleEdit.description);

  const handleEdit = () => {
    const editedArticle = { id: currArticleEdit.id, title, description };
    const newArray = articles.map((el) =>
      el.id === editedArticle.id ? editedArticle : el
    );
    setArticles([...newArray]);
    setCurrArticleEdit(null);
  };
  return (
    <div
      style={{
        zIndex: "1",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: "0",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        opacity: "0.8",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          width: "40%",
          height: "40%",
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        <form className="w-75 bg-secondary-subtle mt-1 d-flex flex-column align-items-center justify-content-center py-5">
          <div className="w-75 mb-3  text-start fw-bold">
            <label className="form-label ps-1">Title</label>
            <input
              type="text"
              className="form-control w-100 "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-75 mb-3  text-start fw-bold ">
            <label className="form-label ps-1">Article</label>
            <textarea
              type="text"
              className="w-100 form-control"
              style={{ overflow: "hidden" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-success me-1"
              onClick={() => handleEdit()}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => setCurrArticleEdit(null)}
            >
              Cancle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
