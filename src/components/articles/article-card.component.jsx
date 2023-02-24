const ArticleCard = ({ props }) => {
    const { id, title, description, topic, date, image, alt, time, link } = props;

    return <div key={id} className="p-2">
        <div className="flex flex-col rounded shadow border-2 p-2 bg-slate-100 h-96">
            <img className="h-1/2 rounded" src={image} alt={alt}></img>
            <div className="flex py-2">
                <div className="rounded-full bg-slate-800 py-1 px-2 text-xs text-white">{topic}</div>
                <div className="p-1 pl-2 text-xs text-slate-700">{time + ' min read'}</div>
            </div>
            <a target="_blank" rel="noreferrer" href={link} className="font-bold"><p className="">{title}</p></a>
            <p className="text-sm pt-1">{description}</p>
            <p className="text-sm text-slate-700 pt-2">{date}</p>
        </div>
        <br></br>
    </div>
};

export default ArticleCard;