import "normalize.css";
import "App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes> */}
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
