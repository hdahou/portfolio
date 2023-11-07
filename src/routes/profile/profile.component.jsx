import webDevLogo from '../../assets/web-dev.svg';

const Profile = () => {
    return (
        <div className="px-12 text-gray-800 bg-white h-full">
            <div className="text-3xl pt-12 pb-3 text-gray-500">PROFILE</div>
            <div className="font-light pb-6">
                <p className="py-2 font-medium">An <span className="text-sky-700">SC Cleared Software Engineer</span> with over <span className="text-sky-700">3 years of hands-on experience</span>.</p>
                <p className="py-2"><span className="font-medium">I have maintained, developed and launched multiple projects from scratch,</span> with a focus on the front-end codebases.</p>
                <p className="py-2">My current toolset includes <span className="font-medium">JavaScript & TypeScript (bits of Node.js & Python as well), React, Redux, AWS</span> and all the other various frameworks, libraries and technologies associated with them.</p>
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
                <p className="py-2"><span className="font-medium">I specialise in developing applications using React/Next.js.</span> Recently, I've been focussing on shifting all my existing codebases across to Typescript and diving into to DSA to write more performant code.</p>
                <p className="py-2">In my current role, I'm responsible for <span className="font-medium">UI development,</span> in which I have been taking a lead on re-designing (figma) and implementing a more modern UI on a greenfield project, the Data Analytics Framework. More information can be provided on this if required.</p>
                <p className="py-2">I have a good sense of <span className="font-medium">design and UX,</span> which I incorporate into my work. I have extensive experience working with various JavaScript & CSS ecosystems and libraries, including <span className="font-medium">Next.js, React, Redux, TailwindCSS, Jest, Figma and others.</span></p>
            </div>
            <hr className="w-full border-slate-300 h-2 pt-5"></hr>
        </div>
    )
};

export default Profile;