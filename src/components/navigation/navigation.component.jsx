import { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/profile-image.jpg';
import githubLogo from '../../assets/github-logo.svg';
import linkedInLogo from '../../assets/linkedin-logo.svg';
import mailLogo from '../../assets/mail-logo.svg';

import './navigation.styles.css';

const Navigation = () => {

    const [routeSelected, setRouteSelected] = useState('profile');

    const updateSelectedRoute = (event) => {
        console.log(event.target.name);
        if(event.target.name) {
            setRouteSelected(event.target.name)
        } else setRouteSelected('');
    };

    return (
        <div className="bg-sky-900 bg-opacity-75 w-80 h-screen flex justify-center min-h-full">
            <div className="w-4/5">
                <Link onClick={updateSelectedRoute} name="profile" to='/' className="flex justify-center py-2.5">
                    <img className="w-60 h-auto rounded-full drop-shadow-2xl" name="profile" src={profileImage} alt="profile"></img>
                </Link>
                <div className="tracking-tight">
                    <h1 className="text-center text-slate-100 font-semibold text-2xl leading-10">HAKEEM DAHOU</h1>
                    <h2 className="text-center text-slate-100 text-base leading-10">FRONT-END SOFTWARE DEVELOPER</h2>
                </div>
                <div className="flex flex-col pt-9 text-slate-300 font-light tracking-tighter">
                    <div className="flex justify-between py-1">
                        <Link onClick={updateSelectedRoute} name='profile' className={routeSelected === 'profile' ? "text-white font-medium" : "hover:text-white"} to='/'>PROFILE</Link>
                        {routeSelected === 'profile' && <div className="triangle"></div>}
                    </div>
                    <div className="flex justify-between py-1">
                        <Link onClick={updateSelectedRoute} name='portfolio' className={routeSelected === 'portfolio' ? "text-white font-medium" : "hover:text-white"} to='/portfolio'>PORTFOLIO</Link>
                        {routeSelected === 'portfolio' && <div className="triangle"></div>}
                    </div>
                    <div className="flex justify-between py-1">
                        <Link onClick={updateSelectedRoute} name='contact' className={routeSelected === 'contact' ? "text-white font-medium" : "hover:text-white"} to='/contact'>CONTACT ME</Link>
                        {routeSelected === 'contact' && <div className="triangle"></div>}
                    </div>
                    <div className="flex justify-between pt-12">
                        <Link onClick={updateSelectedRoute} name='cv' className={routeSelected === 'cv' ? "text-white font-medium" : "hover:text-white"} to='/cv'>CV</Link>
                        {routeSelected === 'cv' && <div className="triangle"></div>}
                    </div>
                    <div className="flex justify-between py-1">
                        <Link onClick={updateSelectedRoute} name='blog' className={routeSelected === 'blog' ? "text-white font-medium" : "hover:text-white"} to='/blog'>BLOG</Link>
                        {routeSelected === 'blog' && <div className="triangle"></div>}
                    </div>
                    <p className="pt-12">GET IN TOUCH</p>
                </div>
                <div className="flex pt-3">
                    <a target="_blank" rel="noreferrer" href="https://github.com/hdahou"><img className="pr-6 cursor-pointer opacity-40 hover:opacity-90" src={githubLogo} alt="github-logo"></img></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hakeem-dahou-1abb29187/"><img className="pr-6 cursor-pointer opacity-40 hover:opacity-90" src={linkedInLogo} alt="linkedin-logo"></img></a>
                    <a target="_blank" rel="noreferrer" href="mailto:hakeemdaho@hotmail.co.uk"><img className="pr-6 cursor-pointer opacity-40 hover:opacity-90" src={mailLogo} alt="mail-logo"></img></a>
                </div>
            </div>
        </div>
    )
};

export default Navigation;