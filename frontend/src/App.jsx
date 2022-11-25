import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { ImagesContextProvider } from "./contexts/ImagesContext";
import ContinentQuestion from "./components/ContinentQuestion";
import MerMontagneQuestion from "./components/MerMontagneQuestion";
import VilleCampagneQuestion from "./components/VilleCampagneQuestion";
import DetenteQuestion from "./components/DetenteQuestion";
import Finish from "./components/Finish";

function App() {
  return (
    <BrowserRouter>
      <ImagesContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/continent" element={<ContinentQuestion />} />
          <Route path="/mermontagne" element={<MerMontagneQuestion />} />
          <Route path="/villecampagne" element={<VilleCampagneQuestion />} />
          <Route path="/detente" element={<DetenteQuestion />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </ImagesContextProvider>
    </BrowserRouter>
  );
}

export default App;
