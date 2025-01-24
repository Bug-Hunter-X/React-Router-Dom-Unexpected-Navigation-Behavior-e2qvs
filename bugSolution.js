```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  let location = useLocation();
  console.log("Home location:", location);
  return(
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

function About(){
  let location = useLocation();
  console.log("About location:", location);
  return(
    <div>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
```