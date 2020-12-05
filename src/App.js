import './App.css';

import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer'

function App() {
  return (
    <div className="App">
      <h1>App.js - Loaded</h1>
      <Header />
      <MoviesContainer />
    </div>
  );
}

export default App;
