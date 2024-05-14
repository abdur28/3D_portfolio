import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Portfolio, Contact, Home } from "./pages";
import World from "./pages/World";


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
                  <Route path='/world' element={<World />} />
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
