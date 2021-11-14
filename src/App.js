import './App.css';

// import MastermindContainer from './components/MastermindContainer';
import GameContainer from './components/GameContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dMHxyulGrEk"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* LinkedIn */}
          <br />
          MASTERMIND
        </a>

      </header>


      {/* <MastermindContainer /> */}

      <GameContainer />

    </div>
  );
}

export default App;
