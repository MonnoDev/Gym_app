import Providers from "./context/Providers";
import AppRoutes from "./routes/Routes";
import "./index.css"

function App() {
  return (
    <Providers>
        <AppRoutes />
    </Providers>
  );
}

export default App;
