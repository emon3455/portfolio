import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className="cursor-pointer" href="https://www.facebook.com/profile.php?id=100011417689239">
                        <span className="text-2xl"><FaFacebook></FaFacebook></span>
                    </a>
                    <a className="cursor-pointer" href="https://github.com/emon3455">
                        <span className="text-2xl"><FaGithubSquare></FaGithubSquare></span>
                    </a>
                    <a className="cursor-pointer" href="https://www.linkedin.com/in/md-emon-24b6ab234/">
                        <span className="text-2xl"><FaLinkedin></FaLinkedin> </span>
                    </a>
                    <a className="cursor-pointer" href="mailto:emon.mhk69@gmail.com">
                        <span className="text-2xl"> <GrMail></GrMail> </span>
                    </a>
                   
                </div>
            </div>
            <div>
                <p>Copyright © 2023 || Developed by Emon</p>
            </div>
        </footer>
    );
};

export default Footer;