import { BrowserRouter, Router } from "react-router-dom";
import "./index.css";
import Routers from "./routes/Router";
import { Datos } from "./contexto/Context";

function App() {
  return (
    <>
      <BrowserRouter>
        <Datos>
          <Routers />
        </Datos>
      </BrowserRouter>
    </>
  );
}

export default App;
