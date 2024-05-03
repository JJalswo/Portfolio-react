let github = require('../asset/github.png')
let linkedIn = require('../asset/linkedIn.png')
let email = require('../asset/email.png')
export default function Contacts(){
    function handleGithubClick() {
        window.open('https://github.com/JJalswo', '_blank');
    }

    function handleLinkedInClick() {
        window.open('https://www.linkedin.com/in/minjae-jeong-406970260/', '_blank');
    }

    function handleEmailClick() {
        window.open('mailto:mjeong@ualberta.ca', '_blank');
    }
    return(
        <div className="contacts">
            <h2> Hear are the links to my github, linkedIn and gmail! </h2>
            <div className="icons-container">
                <a href="#" onClick={handleGithubClick}><img src={github} alt="GitHub" /></a>
                <a href="#" onClick={handleLinkedInClick}><img src={linkedIn} alt="LinkedIn" /></a>
                <a href="#" onClick={handleEmailClick}><img src={email} alt="Email" /></a>
            </div>
        </div>
    );
}
