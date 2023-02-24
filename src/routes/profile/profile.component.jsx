import webDevLogo from '../../assets/web-dev.svg';

const Profile = () => {
    return (
        <div className="px-12 text-gray-800 bg-white h-full">
            <div className="text-3xl pt-12 pb-3 text-gray-500">PROFILE</div>
            <div className="font-light pb-6">
                <p className="py-2 font-medium">A <span className="text-sky-700">front-end developer</span> with over <span className="text-sky-700">2 years of experience</span>.</p>
                <p className="py-2"><span className="font-medium">I have maintained, developed and launched multiple projects from scratch,</span> with a focus on the front-end codebases.</p>
                <p className="py-2">My current toolset includes <span className="font-medium">JavaScript & TypeScript (bits of Node.js as well), React, Redux, AWS</span> and all the other various frameworks, libraries and technologies associated with them.</p>
                <p className="py-2 font-medium">I can help you with all sides of your project:</p>
                <li>verifying good UI/UX design</li>
                <li>developing the front-end user interface</li>
                <li>requirements gathering and consultation</li>
                <li>leading, launching and monitoring a project</li>
            </div>
            <hr className="w-full border-slate-300 h-2 pt-5"></hr>
            <div className="flex">
                <img className="pr-3" src={webDevLogo} alt="web-development-logo"></img>
                <div className="text-3xl pt-3 pb-3 text-sky-800">FRONT-END WEB DEVELOPMENT</div>
            </div>
            <div className="font-light pb-6">
                <p className="py-2"><span className="font-medium">I specialise in developing applications using React.</span> Recently, I've been learning about the benefits of one-way data flow and Redux-like architecture, as well as typed languages like TypeScript.</p>
                <p className="py-2">In my current role, I'm responsible for <span className="font-medium">UI development,</span> to deliver personalised, custom experiences to our existing clients and prospects. Part of that is gathering requirements by consulting with the client and then building the solution for demonstration purposes to fit those needs.</p>
                <p className="py-2">I have a good sense of <span className="font-medium">design and UX,</span> which I incorporate into my work. I have extensive experience working with various JavaScript & CSS ecosystems and libraries, including <span className="font-medium">Next.js, React, Redux, TailwindCSS, Jest and others.</span></p>
            </div>
            <hr className="w-full border-slate-300 h-2 pt-5"></hr>
        </div>
    )
};

export default Profile;