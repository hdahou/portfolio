import { useState } from "react";
import { portfolio } from "../../data/portfolio";
import './portfolio-card.styles.css';

const PortfolioCard = () => {

    const [index, setIndex] = useState(0);
    const selectedPortfolio = portfolio[index];

    const setIndexFunc = (event) => {
        setIndex(event.target.id);
    };

    const { title, description, image1, stack, github } = selectedPortfolio;

    const stackButtons = stack.map((tech) => {
        return <button key={tech} className="text-sm bg-sky-900/[0.7] text-white mr-2 mt-2 p-1">{tech}</button>
    })

    return (
        <div className="p-12">
            <div className="portfolio-container">
                <div className="bg-sky-900/[0.9]">
                    <h1 className="text-5xl font-semibold text-white p-2">{title}</h1>
                </div>
                <div className="h-full pt-5 pl-1">
                    <a href={github}><img className="w-full h-auto md:h-3/5 drop-shadow-2xl py-2" src={image1} alt='1'></img></a>
                    <p className="pt-4 text-slate-700 font-light">{description}</p>
                    <div>
                        <h2 className="text-sm text-slate-800 pt-5">Technologies:</h2>
                        <div>
                            {stackButtons}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="w-20 flex justify-between pt-16">
                    <div onClick={setIndexFunc} id="0" className={Number(index) === 0 ? "border h-4 w-4 rounded-full bg-gray-800 cursor-pointer" : "border h-4 w-4 rounded-full bg-gray-400 cursor-pointer hover:border-gray-700"}></div>
                    <div onClick={setIndexFunc} id="1" className={Number(index) === 1 ? "border h-4 w-4 rounded-full bg-gray-800 cursor-pointer" : "border h-4 w-4 rounded-full bg-gray-400 cursor-pointer hover:border-gray-700"}></div>
                    <div onClick={setIndexFunc} id="2" className={Number(index) === 2 ? "border h-4 w-4 rounded-full bg-gray-800 cursor-pointer" : "border h-4 w-4 rounded-full bg-gray-400 cursor-pointer hover:border-gray-700"}></div>
                </div>
            </div>
        </div>
    )
};

export default PortfolioCard;