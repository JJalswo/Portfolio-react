let projectLogo = require('../asset/microphone.png');
let githubImg = require('../asset/github.png');
export default function VoiceScorer(){
    function handleGithubClick() {
        window.open('https://github.com/Voice-Scorer/Voice-Scorer', '_blank');
    }
    return(
        <div className='project'>
            <img src={projectLogo} alt="voiceScorer" />
            <h1>grade your voice similarity!</h1>
            <h2>What is vocieScorer?</h2>
            <p>
                This is an web application that scores your voice similarity with popular celebrities.
            </p>
            <h2>What techniques did we use?</h2>
            <p>
              The software is developed on Flask libaray which is web development library in python environment.
              We collected samples of celebrities voices, then we trained our model with theses voices. We used K-nearest
              neighbor algorithms for our model Training. Since it does not provide performance levels that we expect, it still needs 
              to be imporved with fine tuning.
            </p>
            <h2>Check out the github of this project!</h2>
            <a href="#" onClick={handleGithubClick}><img src={githubImg} alt="GitHub" /></a>
        </div>
    )
}