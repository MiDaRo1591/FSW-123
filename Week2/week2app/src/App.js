import Card from "./card.js";
import './App.css';

function App() {
  return (
    <div className="App">
    <Card title="Red title" subtitle="Red Subtitle" desc="Red description!" BGcolor="red" wide="250"/>
    <Card title="Orange title" subtitle="Orange subtitle" desc="Orange description!" BGcolor="orange" wide="200"/>
    <Card title="Yellow title" subtitle="Yellow subtitle" desc="Yellow description!" BGcolor="yellow" wide="150"/>
    <Card title="Green title" subtitle="Green subtitle" desc="Green description!" BGcolor="green" wide="100"/>
    </div>
  );
}

export default App;
