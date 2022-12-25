
import './App.css';
import Card from  './components/Card'
import Clock from './components/Clock';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center"> Kim Dahyun</h1>
        <Card/>
        <span id="res"></span>
        <Clock/>
      </header>
      
      
    </div>
  );

}

export default App;
