import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HighLights from "./component/Highlights";
import Model from "./component/Model";

function App() {
  return (
    <main className="bg-black">
      <Navbar /> <Hero /> <HighLights /> <Model />
    </main>
  );
}

export default App;
