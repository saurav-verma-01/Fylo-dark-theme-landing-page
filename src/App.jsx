import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="main">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
};

export default App;
