import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./coinscomponents/Header";
import Home from "./coinscomponents/Home";
import Coins from "./coinscomponents/Coins";
import Exchanges from "./coinscomponents/Exchanges";
import CoinDetails from "./coinscomponents/CoinDetails";
import CoinCard from "./coinscomponents/CoinCard";
import Footer from "./coinscomponents/Footer";

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer />
    </Router>
          </div>
  );
}

export default App;
