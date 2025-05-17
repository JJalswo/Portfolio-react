let prof = require('../asset/profile_pic.jpg')
export default function Profile(){
    return(
        <div class="profile">
         <img src= {prof} alt= "profile" />
  <h2>Who Am I?</h2>
  <p>
    Hi, I'm Minjae Jeong — a Computer Science student at the University of Alberta.
    I'm passionate about pushing my boundaries and diving into new topics, whether they're within my field or beyond. 
    I thrive on challenges and love exploring uncharted territory, constantly seeking opportunities to grow, learn, and create.
  </p>
  <h2>What are the fields that I am interested in Computer Science?</h2>
  <p>
  Throughout my academic journey, I've developed a keen interest and gathered experience in various facets of computer science. 
  This includes diving into algorithms and implementing machine learning and reinforcement learning techniques 
  to solve practical problems. I've also delved into optimizing performance at the CPU and GPU levels through low-level programming languages.
  Additionally, I've explored web and software development using popular frameworks. My ultimate aim is to create cohesive and sustainable AI software solutions
  that make a meaningful impact in solving real-world challenges!
  </p>
  <h2>What other interests do I have?</h2>
  <p>
  I am also interested in astronomy, physics and world history. Learning about these fields allow me to understand the principle of the
  world that we are currently living and which directions should we go toward in cosmological and antropological prespectives. Also for my personal hobbies,
  I like to workout in gym, playing sports including soccer and American football!
  </p>
  </div>
    );
}