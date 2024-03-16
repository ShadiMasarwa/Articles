import Article from "./Article";

const Articles = ({ articles, handleDeleteArticle }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      {articles.map((el) => {
        return (
          <Article
            article={el}
            handleDeleteArticle={handleDeleteArticle}
            key={el.id}
          />
        );
      })}
    </div>
  );
};

export default Articles;
