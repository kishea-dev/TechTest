import React, { useEffect, useState } from "react";
import "./Articles.scss";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchArticles(currentPage);
    }, [currentPage]);

    const fetchArticles = (page) => {
        fetch(`/api/articles?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.data);
                setCurrentPage(data.current_page);
                setTotalPages(data.last_page);
            });
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="articles">
            <h1>Articles</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        <small>
                            {new Date(article.created_at).toLocaleDateString()}
                        </small>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Articles;
