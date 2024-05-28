import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <HomePage />
    // </div>
    <StyledEngineProvider injectFirst>
      {/* <Navbar /> */}
      <HomePage />
    </StyledEngineProvider>
  );
}

export default App;
