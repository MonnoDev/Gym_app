import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
