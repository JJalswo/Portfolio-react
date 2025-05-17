let NeuroTuneLogo =  require('../asset/neurotuneLogo.png');
let DevPostImg = require('../asset/devpost.png');
export default function NeuroTune(){
    function handleGithubClick() {
        window.open('https://devpost.com/software/neurotune', '_blank');
    }
    return(
        <div className='project'>
            <img src={NeuroTuneLogo} alt="NeuroTune" />
            <h1> Your personal music therapy: NeuroTune</h1>
            <h2>What is NeuroTune?</h2>
            <p>
                This is the project from NatHacks 2024 competetion held at Neuro Alberta Technology.
                Our project My NeuroTune is a web application that could be used as an aid tools for    
                personal music therapy. NeuroTune is ranked at 1st place in standard division of this competetion.
            </p>

            <h2> What does it do?</h2>
            <p>
                NeuroTune is a music analyzer that uses EEG technology to enhance music therapy by objectively evaluating song suitability based on real-time brain responses. 
                Aimed at individuals with dementia or aphasia—conditions that impair communication and preference expression—NeuroTune labels
                songs as “liked,” “neutral,” or “not liked,” eliminating the need for verbal feedback. 
                It empowers caregivers to conduct personalized music therapy sessions without a therapist, 
                addressing challenges like limited therapist access and unreliable patient reports. 
                By tailoring therapy to individual brain responses, NeuroTune supports more effective, patient-centered care.
            </p>
            <h2>What techniques did we use?</h2>
            <p>
                We utilized the XGBoost machine learning model alongside Python BrainFlow libraries to analyze EEG data. 
                For music selection, we integrated the Google API, and the application was built using React for the front end and Python Flask for the back end.
            </p>
            <h2>Check out the project!</h2>
            <a href="#" onClick={handleGithubClick}><img src={DevPostImg} alt="DevPost" /></a>
        </div>
    )
}