import cvpdf from '../../assets/cv.pdf';

const CV = () => {
    return (
        <div className="w-full h-full">
            <iframe src={cvpdf + "#toolbar=0"} title="cv" width="100%" height="1000px"/>
        </div>
    )
};

export default CV;