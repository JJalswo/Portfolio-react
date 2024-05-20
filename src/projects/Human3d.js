let projectLogo =  require('../asset/HumanBlood.png');
let githubImg = require('../asset/github.png');
export default function HumanBlood(){
    function handleGithubClick() {
        window.open('https://github.com/Kaggler-uofa', '_blank');
    }
    return(
        <div className='project'>
            <img src={projectLogo} alt="HumanBlood" />
            <h1>Hack the Human Vasculature in 3D! </h1>
            <h2>What is this project?</h2>
            <p>
               This is a project from Kaggle competetion "SenNet + HOA - Hacking the Human Vasculature in 3D".
            </p>
            <h2> What does it do?</h2>
            <p>
            It is a trained AI model that can segment blood vessels from human organs. By looking at 3D created
            Hierarchical Phase-Contrast Tomography (HiP-CT) data from human kidneys.
            </p>
            <h2>What techniques did we use?</h2>
            <p>
               For our making AI model, we used one of deep learning techniques called U-Net which is an Convolutional Neural Network.
               Also, in order to increase our data, we agumented images by rotating the original image, as a results, it gets 4x datasets to  
               train for.
            </p>
            <h2>What is U-Net?</h2>
            <p>
            The U-Net architecture features a U-shaped encoder-decoder network comprising four encoder and decoder blocks interconnected by a bridge.
            The encoder progressively reduces spatial dimensions and increases feature channels using two 3x3 convolutions
            followed by Rectified Linear Unit (ReLU) activation functions, which introduce non-linearity crucial for better generalization. 
            Skip connections and 2x2 max-pooling enhance gradient flow and computational efficiency. 
            The bridge facilitates information transfer between encoder and decoder blocks via 3x3 convolutions with ReLU activation. In the decoder, 
            transpose convolutions upscale features, concatenated with skip connections to recover lost information, followed by two 3x3 convolutions with ReLU activation. 
            The final layer utilizes 1x1 convolutions with sigmoid activation to produce a pixel-wise segmentation mask.
            </p>

            <h2>Check out the github of this project!</h2>
            <a href="#" onClick={handleGithubClick}><img src={githubImg} alt="GitHub" /></a>
        </div>
    )
}