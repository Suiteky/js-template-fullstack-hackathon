import Home from "./pages/Home";
import { WebcamContextProvider } from "./contexts/WebcamContext";

function App() {
  return (
    <WebcamContextProvider>
      <Home />
    </WebcamContextProvider>
  );
}

export default App;
