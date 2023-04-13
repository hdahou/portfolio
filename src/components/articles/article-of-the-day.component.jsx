import articleOfTheDayRight from '../../assets/article-of-the-day-right.jpg';
import './article-of-the-day.styles.css';

const ArticleOfTheDay = () => {
    return <div className="">
        <h1 className="pb-2 text-xl md:text-2xl font-semibold text-slate-800">Article of The Day</h1>
        <div className="w-full flex py-3">
            <div className="h-72 lg:h-64 w-full lg:w-1/2 bg-slate-900 text-white shadow-xl p-6 grid content-around rounded lg:rounded-r-none article-of-the-day-image">
                <h1 className="text-3xl font-medium text-center">Learn to Learn</h1>
                <h3 className="text-center">The Best Advice I`ve Ever Received on How to Learn Programming Languages and Concepts Quickly</h3>
                <div className="flex justify-center">
                    <button className="px-2 py-1 bg-white font-semibold rounded-full text-black w-24 hover:bg-slate-200">Read Now</button>
                </div>
            </div>
            <img src={articleOfTheDayRight} className="object-cover hidden lg:block lg:w-1/2 lg:h-64 shadow-md rounded-r-md" alt="aotd"></img>
        </div>

    </div>
};

export default ArticleOfTheDay;