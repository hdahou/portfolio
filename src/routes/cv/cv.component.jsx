import cvpdf from '../../assets/cv.pdf';

const CV = () => {
    return (
        <div className="w-full h-full">
            <iframe src={cvpdf + "#toolbar=0"} title="cv" width="100%" className="h-full" />
        </div>
    )
};

export default CV;