import Home from "./pages/Home";
import { WebcamContextProvider } from "./contexts/ImagesContext";

function App() {
  return (
    <WebcamContextProvider>
      <Home />
    </WebcamContextProvider>
  );
}

export default App;
