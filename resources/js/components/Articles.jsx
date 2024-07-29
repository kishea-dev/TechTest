import { useEffect, useState } from "react";
import "./Articles.scss";

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/api/articles")
            .then((response) => response.json())
            .then((data) => setArticles(data));
    }, []);

    return (
        <div className="articles">
            <h1>Articles</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <small>{article.created_at}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Articles;
