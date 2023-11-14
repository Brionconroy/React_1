// import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting= "Well!!!!" name= "It Is I Tommey" age="102" /> */}
      <StatefulGreeting greeting= "Im a tool!!!" name= "Me tommy"/>
    </div>
  );
}

export default App;
