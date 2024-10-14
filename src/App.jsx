import { Box } from "@chakra-ui/react";
import Header from "./Components/Head/Header";
import Heropage from "./Components/Hero/Heropage";
import "@fontsource/poppins/700.css";
import AdvanceStatistic from "./Components/AdvancedStats/AdvanceStatistic";
import Boost from "./Components/Boost/Boost";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Box
        fontFamily={"Poppins, sans-serif"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Header />
        <Heropage />
        <AdvanceStatistic />
        <Boost />
        <Footer />
      </Box>
    </>
  );
}

export default App;
