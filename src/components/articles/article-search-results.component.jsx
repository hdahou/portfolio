import { useState } from "react";
import ArticleCard from "./article-card.component";

const ArticleSearchResults = ({ filteredData }) => {
    
    const [articleCount, setArticleCount] = useState(4);

    // eslint-disable-next-line
    let articlesList = filteredData.map(({ ...props }, i) => {
        while (i < articleCount) {
            return <ArticleCard key={i} props={props} />
        }
    });

    const loadMoreArticles = () => {
        setArticleCount(8);
        // eslint-disable-next-line
        articlesList = filteredData.map(({ ...props }, i) => {
            while(i < articleCount) {
                return <ArticleCard key={i} props={props} /> 
            }
        });
    }

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-2">{articlesList}</div>
            {filteredData.length > 4 && articleCount < 8 && <button onClick={loadMoreArticles} className="border border-slate-200 py-1 px-2 rounded-md bg-slate-800 text-xs text-white mx-2 w-fit">Show more results</button>}
        </div>
    )
};

export default ArticleSearchResults;