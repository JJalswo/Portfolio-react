let github = require('../asset/github.png')
let linkedIn = require('../asset/linkedIn.png')
let email = require('../asset/email.png')
let devpost = require('../asset/devpost.png')
export default function Contacts(){
    function handleGithubClick() {
        window.open('https://github.com/JJalswo', '_blank');
    }

    function handleLinkedInClick() {
        window.open('https://www.linkedin.com/in/minjaejeong', '_blank');
    }

    function handleEmailClick() {
        window.open('mailto:mjeong@ualberta.ca', '_blank');
    }
     function handleDevPostClick() {
        window.open('https://devpost.com/jongg1012?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav', '_blank');
    }
    return(
        <div className="contacts">
            <h2> Explore more about me! </h2>
            <div className="icons-container">
                <a href="#" onClick={handleGithubClick}><img src={github} alt="GitHub" /></a>
                <a href="#" onClick={handleLinkedInClick}><img src={linkedIn} alt="LinkedIn" /></a>
                <a href="#" onClick={handleEmailClick}><img src={email} alt="Email" /></a>
                <a href="#" onClick={handleDevPostClick}><img src={devpost} alt="DevPost" /></a>
            </div>
        </div>
    );
}
