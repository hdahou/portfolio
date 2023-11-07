import cvpdf from '../../assets/cv.pdf';

const CV = () => {
    return (
        <div className="w-[full] h-full">
            <iframe src={cvpdf + "#toolbar=0"} title="cv" className="h-[100vh] w-full"/>
        </div>
    )
};

export default CV;