let projectLogo =  require('../asset/customInventory.png');
let githubImg = require('../asset/github.png');
export default function CustomInventory(){
    function handleGithubClick() {
        window.open('https://github.com/CMPUT301F23T29/agile-beast', '_blank');
    }
    return(
        <div className='project'>
            <img src={projectLogo} alt="customInventory" />
            <h1>Customize and utilize your items!</h1>
            <h2>What is Custom-Inventory?</h2>
            <p>
                This is a course-based project from University of Alberta.
                This android software allows users to customize and arrange their personal items and help items to be keep
                cleaned and organized.
            </p>

            <h2> What does it do?</h2>
            <p>
               This software allows user to store personal items with information about name, date, maker, model, descriptions
               disclosed with attachable images. It also let users to apply custom tags to each items and can be sorted and search by
               these parameters. All of these data are being stored in database, with unique username and passowrd, user can see their 
               inventory anywhere any devices!
            </p>
            <h2>What techniques did we use?</h2>
            <p>
                First as an team development, we selected Agile-methodology as our development principle, did sprint reiview weekly. We used 
                Object-Oriented-Programming as a programming tehcniques with Singleton instance design pattern. 
                Android Studio framework with Java and Firebase for our database were used. We customized camera design by using
                Camera-X API and Zxling library for barcode scanning. We also developed for unit and UI testing by using Android-Espresso.

            </p>
            <h2>Check out the github of this project!</h2>
            <a href="#" onClick={handleGithubClick}><img src={githubImg} alt="GitHub" /></a>
        </div>
    )
}