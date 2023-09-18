import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <h1 className="text-3xl text-center bg-red-300">React Price Options</h1>
      <PriceOptions></PriceOptions>
      <div className="stats shadow"></div>
    </>
  );
}

export default App;
