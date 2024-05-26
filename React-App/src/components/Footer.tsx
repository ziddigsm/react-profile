import {DarkModeToggle} from './DarkMode';
import './Footer.css'
import FooterColumn from './FooterColumn'

interface Theme {
    theme: string
}

function Footer(theme: Theme) {
    return (
        <div className = "footer-container" data-theme = {theme.theme}>
            <div className="footer-1">
                <div className="footer-name">
                    <h1 className='footer-name-title'>
                        Ghouse Shahe Meera Ziddi Mohammad
                    </h1>
                    <div className="footer-intro" data-theme = {theme}>
                        <p>I am a Student pursuing masters at University of Cincinnati specialising in Data Science.</p>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <div className="footer-redirect">
                    <FooterColumn title = "Important Links" theme = {theme} list = {
                        [{
                            title: "Home",
                            type: "Link"
                        },
                        {
                            title: "Education",
                            type: "Link"
                        },
                        {
                            title: "Experience",
                            type: "Link"
                        },
                        {
                            title: "Projects",
                            type: "Link"
                        },
                        {
                            title: "Skills & Certifications",
                            type: "Link"
                        }
                    ]
                    }/>                    
                </div>
            </div>
            <div className='footer-3'>
                <FooterColumn title = "Contact Me" theme={theme} list = {[{
                    title: "+1 (513) 399-0297",
                    type: "Link"
                },
                {
                    title: "mdziddi197@gmail.com",
                    type: "Link"
                },
                {
                    title: "mohammgi@mail.uc.edu",
                    type: "Link"
                },
                {
                    title: "Cincinnati, Ohio, US",
                    type: "Link"
                }
                ]}/>
            </div>
            <DarkModeToggle theme = {theme.theme}/>
        </div>
    )
}

export default Footer