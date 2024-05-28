import {FaLinkedin, FaGithub} from 'react-icons/fa';
import './Social.css'

export  function SocialIcons() {
    return (
        <div className="social-icon-pack">
            <a href='https://github.com/ziddigsm' target='_blank' className='icon github'><FaGithub className='sass github'/></a>
            <a href='https://linkedin.com/in/mohammadziddi' target='_blank' className='icon linkedin '><FaLinkedin className='sass linkedin'/></a>
        </div>
    )
}