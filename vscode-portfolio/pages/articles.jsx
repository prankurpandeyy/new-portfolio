import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";
import axios from "axios";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  console.log("🚀 ~ file: articles.jsx:8 ~ ArticlesPage ~ articles:", articles);

  async function fetchArticles() {
    try {
      const blogs = await axios.get(
        "https://dev.to/api/articles?username=prankurpandeyy"
      );

      setArticles(blogs.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <h3>
        Recent Posts from{" "}
        <a
          href="https://dev.to/prankurpandeyy"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles &&
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
      </div>
    </>
  );
};

export default ArticlesPage;
