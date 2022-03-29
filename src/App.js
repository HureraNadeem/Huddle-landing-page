import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Styles/Global";
import { theme } from "./components/Styles/theme";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />


        <Navbar />
        <Header />
        <Body />
        <Footer />

      </ThemeProvider>



    </>
  );
}

export default App;
