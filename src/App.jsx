import "./App.css";
import Candies from "./Candies.jsx";
import CandyList from "./components/CandyList.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const name = "Isaiah";

  return (
    <>
      <header>
        <h1>Candy Listing For {name}</h1>
        <p>This is a test to see if I can commit a change to GitHub</p>
        <p>This is the test where I actually know stuff!!</p>
      </header>
      <Navbar />
      <CandyList />
      <Candies />

      {/* Footer component - Footer.jsx [rafce - footer>p>Made by name], Footer.css  */}
      <Footer />
    </>
  );
}

export default App;
