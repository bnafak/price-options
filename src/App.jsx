
import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3xl text-center mb-6 bg-red-300">React Price Options</h1>
      <PriceOptions></PriceOptions>
      <div className="stats shadow"></div>
      <LineChart></LineChart>
    
    </>
  );
}

export default App;
