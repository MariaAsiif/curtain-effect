import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Suspense
        fallback={
          <div className="flone-preloader-wrapper">
            <div className="flone-preloader">
              <span></span>
              <span></span>
            </div>
          </div>
        }
      > */}
      {/* <Routes >
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Home}
          />

        </Routes > */}
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
