let myDetectivelogo =  require('../asset/myDetective.png');
let githubImg = require('../asset/github.png');
export default function MyDetective(){
    function handleGithubClick() {
        window.open('https://github.com/KREATORS-2-0/MyDetective', '_blank');
    }
    return(
        <div className='project'>
            <img src={myDetectivelogo} alt="myDetective" />
            <h1> Revolutionizing Security Interviews with AI: The MyDetective</h1>
            <h2>What is My Detective?</h2>
            <p>
                This is the project from NatHacks 2023 competetion held at University of Alberta.
                Our project My Detective is a web application that could be used as an aid tools for    
                interrogation processes. MyDetective is ranked at 2nd place in standard division of this competetion.
            </p>

            <h2> What does it do?</h2>
            <p>
                This is a tool to help for interrogator. It collects EEG(electroencephalogram) data from suspects and anlayze the data.
                Our analyzation includes lie detections, face emotion detections and transcribed word detections.
                After analyzing these data, results are being displayed to interrogator and automatically, results also sent to 
                GPT4 API. GPT4 will analyze the results of data and pre-informed information about the cases, it will provide a guide for 
                interrogator how to proceed the intterogation.
            </p>
            <h2>What techniques did we use?</h2>
            <p>
                Beside GPT4, we used three other Machine Learning model. For lie detection, our group collected two hundreds data and used
                Random Forest method to anlayze and train our model. In the testing process, we were able to get about 85% accuracys.
                Also for facial analyzation, we used Deepface model from python and MoritzLaure model for transcription.
            </p>
            <h2>Check out the github of this project!</h2>
            <a href="#" onClick={handleGithubClick}><img src={githubImg} alt="GitHub" /></a>
        </div>
    )
}