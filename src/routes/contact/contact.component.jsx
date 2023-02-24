// import contactphone from '../../assets/contact.svg';

const Contact = () => {
    return (
        <div className="h-full">
            <div className="flex bg-white pr-3">
                <div className="px-12 h-80">
                    <div className="text-3xl pt-12 pb-3 text-gray-500">CONTACT ME</div>
                    <div className="pt-1 pb-4 text-slate-700 font-light">I am available for interview and open to any ideas of cooperation.</div>
                    <div className="flex py-1 text-slate-700 font-light">
                        <div className="w-24">Email: </div><div className="font-medium text-sky-900">hakeemdaho@hotmail.co.uk</div>
                    </div>
                    <div className="flex py-1 text-slate-700 font-light">
                        <div className="w-24">GitHub: </div><div className="font-medium text-sky-900">hdahou</div>
                    </div>
                    <div className="flex py-1 text-slate-700 font-light">
                        <div className="w-24">LinkedIn: </div><div className="font-medium text-sky-900">Hakeem Dahou</div>
                    </div>
                    <div className="flex py-1 text-slate-700 font-light">
                        <div className="w-24"> Mobile: </div><div className="font-medium text-sky-900">07926 684 366</div>
                    </div>
                </div>
                {/* <img src={contactphone} alt="contact-phone"></img> */}
            </div>
        </div>

    )
};

export default Contact;