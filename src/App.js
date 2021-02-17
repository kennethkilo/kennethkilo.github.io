import logo from './KlogoGreen.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="KlogoGreen" />
        <p>
          Recruiters: Website password is contained in my resume :)
        </p>

        <form>
          
          <input type="text" id="pass" name="pass" ></input><br></br>
          <input type="submit" value="Submit"></input>
        </form>
        <br></br>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/wukenneth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;

