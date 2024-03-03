import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Productive from "./components/Productive";

const App = () => {
  return (
    <main className="main">
      <Navbar />
      <Hero />
      <Features />
      <Productive />
    </main>
  );
};

export default App;
