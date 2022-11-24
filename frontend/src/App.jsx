import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { ImagesContextProvider } from "./contexts/ImagesContext";

function App() {
  return (
    <BrowserRouter>
      <ImagesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ImagesContextProvider>
    </BrowserRouter>
  );
}

export default App;
