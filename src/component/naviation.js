import { useNavigate} from 'react-router-dom';
export default function HomepageNav() {
  const history = useNavigate();
  // Define the click handler function
  function handleClickContact(event) {
    event.preventDefault();
    history('/contacts');
  }
  function handleClickProfile(event) {
    event.preventDefault();
    history('/');
  }
  function handleClickProject(event) {
    event.preventDefault();
    history('/projects');
  }
    return (
        <nav>
            <div className="logo">
                <h1>Minjae Jeong</h1>
            </div>
            <ul>
                <li>
                    <a href="#" onClick={handleClickProfile}>Profile</a>
                </li>
                <li>
                    <a href="#" onClick={handleClickProject}>Projects</a>
                </li>
                <li>
                    <a href="#" onClick={handleClickContact}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}