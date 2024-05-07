import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Hello name="all" />
      <p>Welcome to my website!</p>
      <img className="logo" src={makersLogo}></img>
    </>
  );
}

export default App;
