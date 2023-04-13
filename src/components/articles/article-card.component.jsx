const ArticleCard = ({ props }) => {
    const { id, title, description, topic, date, image, alt, time, link } = props;

    return <div key={id} className="p-2">
        <div className="flex flex-col rounded shadow border-2 p-2 bg-slate-100 h-96">
            <div className="h-3/5 md:h-3/5 sm:h-1/2 lg:h-1/2">
                <img className="h-full w-full object-cover rounded" src={image} alt={alt}></img>
            </div>
            <div>
                <div className="flex py-2">
                    <div className="rounded-full bg-slate-800 py-1 px-2 text-xs text-white">{topic}</div>
                    <div className="p-1 pl-2 text-xs text-slate-700">{time + ' min read'}</div>
                </div>
                <a target="_blank" rel="noreferrer" href={link} className="font-bold"><p className="">{title}</p></a>
                <p className="text-sm pt-1">{description}</p>
                <p className="text-xs text-slate-700 pt-2">{date}</p>
            </div>
        </div>
        <br></br>
    </div>
};

export default ArticleCard;