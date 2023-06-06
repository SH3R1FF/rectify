import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Footer from './components/Footer';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar title="RECTIFY" />
          <Routes>
            {/* <Route exact path="/" element={<TextForm key="Home" heading="MANIPULATE THE TEXT" />} /> */}
            <Route
            index element={<TextForm key="Home" heading="MANIPULATE THE TEXT" />}  />
            <Route exact path="/About" element={<About key="About" heading="ABOUT US" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>

  );
}

export default App;
