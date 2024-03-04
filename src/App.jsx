import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Portfolio, Contact, Home } from "./pages";


const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
