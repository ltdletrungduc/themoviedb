import "normalize.css";
import "App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header";

function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<Users />} />
      </Routes> */}
      <Header />
    </Router>
  );
}

function Home() {
  return (
    <div>
      <p>THIS IS HOME</p>
    </div>
  );
}

function Users() {
  return (
    <div>
      <p>THIS IS USERS</p>
    </div>
  );
}

export default App;
