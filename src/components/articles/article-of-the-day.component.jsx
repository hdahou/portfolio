import articleOfTheDayRight from '../../assets/article-of-the-day-right.jpg';
import './article-of-the-day.styles.css';

const ArticleOfTheDay = () => {
    return <div className="">
    <h1 className="pb-2 text-2xl font-semibold text-slate-800">Article of The Day</h1>
    <div className="w-full flex py-3">
        <div className="w-1/2 bg-slate-900 text-white shadow-xl p-6 grid content-around rounded-l-md article-of-the-day-image">
            <h1 className="text-3xl font-medium">Learn to Learn</h1>
            <h3 className="">The Best Advice I`ve Ever Received on How to Learn Programming Languages and Concepts Quickly</h3>
            <button className="px-2 py-1 bg-white font-semibold rounded-full text-black w-24 hover:bg-slate-200">Read Now</button>
        </div>
        <img src={articleOfTheDayRight} className="w-1/2 h-64 shadow-md rounded-r-md" alt="aotd"></img>
    </div>
    
</div>
};

export default ArticleOfTheDay;