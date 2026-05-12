import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import Jobs from "./components/Jobs.jsx";
import Talent from "./components/Talent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Stats />
            <HowItWorks />
            <Features />
            <Jobs />
            <Talent />
            <Footer />
        </div>
    );
}

export default App;