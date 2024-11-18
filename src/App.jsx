import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HighLights from "./component/Highlights";
import Model from "./component/Model";
// import * as Sentry from "@sentry/react";
import Features from "./component/Features";
import HowItsWorks from "./component/HowItsWorks";
import Footer from "./component/Footer";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItsWorks />
      <Footer />
    </main>
  );
}

export default App;
