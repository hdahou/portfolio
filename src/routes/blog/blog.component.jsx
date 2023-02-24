import { useState } from "react";
import ArticleOfTheDay from "../../components/articles/article-of-the-day.component";
import ArticleSearchResults from "../../components/articles/article-search-results.component";
import ArticleTopicResults from "../../components/articles/article-topic-results.component";
import SearchBox from "../../components/search-box/search-box.component";
import { articles } from "../../data/articles";

const Blog = () => {

    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (event) => {
        const articleArray = [];
        // eslint-disable-next-line
        articles.filter((article) => {
            if ((article.title.toLocaleLowerCase().includes(event.target.value)
                || article.description.toLocaleLowerCase().includes(event.target.value)) && event.target.value !== '') {
                articleArray.push(article);
            }
        })
        setFilteredData(articleArray);
    }

    return (
        <div className="h-full bg-white p-12">
            <SearchBox handleInputChange={handleInputChange} />
            <ArticleSearchResults filteredData={filteredData}/>
            {!filteredData.length && <ArticleOfTheDay />}
            {!filteredData.length && <ArticleTopicResults /> }

        </div>
    )
};

export default Blog;