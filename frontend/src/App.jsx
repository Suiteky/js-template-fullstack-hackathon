import Home from "./pages/Home";
import { ImagesContextProvider } from "./contexts/ImagesContext";

function App() {
  return (
    <ImagesContextProvider>
      <Home />
    </ImagesContextProvider>
  );
}

export default App;
