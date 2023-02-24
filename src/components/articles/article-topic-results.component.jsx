import { useState } from 'react';
import ArticleCard from './article-card.component';
import { articles } from '../../data/articles';

const ArticleTopicResults = () => {

    const [selectedTopic, setSelectedTopic] = useState('JavaScript');

    // eslint-disable-next-line
    const filteredTopic = articles.filter((item) => {
        if (item.topic.toLowerCase() === selectedTopic.toLowerCase()) {
            return item;
        }
    })

    const filteredArticles = filteredTopic.map(({ ...props }, i) => {
        return <ArticleCard key={i} props={props}/>
    })

    const changeTopic = (event) => {
        setSelectedTopic(event.target.name);
    }

    const topicButtons = ['JavaScript', 'TypeScript', 'React', 'Data Structures'].map((item, i) => {
        if (item.toLowerCase() === selectedTopic.toLowerCase()) {
            return <div key={i} className="pr-3 pb-3"><button name={item} className="py-1 px-3 border rounded-full shadow-lg bg-slate-900/[0.95] text-white cursor:pointer">{item}</button></div>
        } else {
            return <div key={i} className="pr-3 pb-3"><button onClick={changeTopic} name={item} className="py-1 px-3 border bg-slate-100 hover:bg-slate-200 hover:border-slate-400 shadow-md rounded-full cursor:pointer">{item}</button></div>
        }
    })

    return (
        <div className="center pb-2">
            <div className="w-full pt-4"></div>
            <h1 className="pb-2 text-2xl font-semibold text-slate-800">Topic Match for You</h1>
            <div className="flex text-sm pt-2 pb-2 flex-wrap">{topicButtons}</div>
            <div className="grid grid-cols-2">{filteredArticles}</div>
            <div className="pt-4 w-full"></div>
        </div>
    )
}
export default ArticleTopicResults;