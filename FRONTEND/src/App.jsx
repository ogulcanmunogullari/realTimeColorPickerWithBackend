import Palette from "./components/Palette";
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
import "./App.css";
function App() {
  const [activeColor, setActiveColor] = useState("#000");
  useEffect(() => {
    init();
    subscribe((color) => setActiveColor(color));
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palette activeColor={activeColor} />
      selami
    </div>
  );
}

export default App;
