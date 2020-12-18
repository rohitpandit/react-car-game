import Board from './Board';
import './App.css';
import Grass from './Grass.js';

function App() {
  return (
    <div className="App">
      <Grass />
      <div>
        <Board />
      </div>
      <Grass />
    </div>
  );
}

export default App;
