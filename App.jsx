import "./App.css";

//COMPONENTS
import Header from "./Header";
import Hero from "./Hero";
import ShortenForm from "./ShortenForm";
import Stat from "./Stats";
import CtaBanner from "./CtaBanner";
import Footer from "./Footer";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputProvider } from "./context/inputContext";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2ACFCF",
      },

      secondary: {
        main: "hsl(257, 27%, 26%)",
      },
      error: {
        main: "#F46262",
      },
    },
  });
  return (
    <InputProvider>
      <ThemeProvider theme={theme}>
        <div className="mainContainer">
          <Header />
          <Hero />
          <ShortenForm />
          <Stat />
          <CtaBanner />
          <Footer />
        </div>
      </ThemeProvider>
    </InputProvider>
  );
}

export default App;
