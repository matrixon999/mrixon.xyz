import {AiFillGithub, AiFillHome, AiFillLinkedin, AiFillProject} from 'react-icons/ai';

export default function SideBar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-zinc-900 shadow-lg text-white">
            <SideBarBtn icon={<AiFillGithub size="28"/>} text="Github" dst="https://github.com/matrixon999"/>
            <SideBarBtn icon={<AiFillLinkedin size="28"/>} text="Linked In" dst="https://www.linkedin.com/in/mathew-rixon-4ab89013a/"/>
            <hr className="flex my-10 border-zinc-900" />
            <SideBarBtn icon={<AiFillHome size="28"/>} text="Home" dst="/"/>
            <SideBarBtn icon={<AiFillProject size="28"/>} text="Projects" dst="/projects"/>
        </div>
    );
}


function SideBarBtn({icon, text, dst}:any) {
    return (
        <a href={dst} className="sidebar-btn group flex">
            {icon}
            <span className="sidebar-title group-hover:scale-100 group-hover:flex">
                {text}
            </span>
        </a>
    );
}