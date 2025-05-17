let EmploiF1rstLogo =  require('../asset/EmploiF1rstLogo.jpg');
let InternetImg = require('../asset/internet.png');
export default function EmploiF1rst(){
    function handleGithubClick() {
        window.open('https://cmput401.ca/projects/1ec5f721-b6bf-42a7-81fe-b65437b9ffa8', '_blank');
    }
    return(
        <div className='project'>
            <img src={EmploiF1rstLogo} alt="EmploiF1rst" />
            <h1>  Fresh Jobs for Fresh Grads!: EmploiF1rst.com</h1>
            <h2>What is EmploiF1rst?</h2>
            <p>
                This is the project for CMPUT401 - Software Process and Product Management from University of Alberta.
                EmploiF1rst is a dedicated job platform designed specifically for recent graduates, making it easier for them to discover
                and secure their first professional opportunities.
            </p>

            <h2> What does it do?</h2>
            <p>
               EmploiF1rst aims to tackle the challenges faced by recent graduates in Canada as they navigate a competitive job market that often prioritizes experience. 
               The platform offers tailored services to help graduates easily find entry-level opportunities while providing companies a space to post jobs specifically intended for fresh talent.
               By analyzing each graduate’s skills and experience, EmploiF1rst intelligently matches them with roles that best align with their abilities and potential.
            </p>
            <h2>What techniques did we use?</h2>
            <p>
                We built EmploiF1rst using React.js with TypeScript for the front end and Node.js for backend operations. 
                Authentication is handled through Google OAuth and email verification via Gmail.
                Additionally, we developed a Python program that extracts keywords from job descriptions and matches them with student profiles, 
                generating a compatibility score to help identify the most suitable job opportunities.
            </p>
            <h2>Check out the project!</h2>
            <a href="#" onClick={handleGithubClick}><img src={InternetImg} alt="Website" /></a>
        </div>
    )
}