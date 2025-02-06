import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Features from "./components/Features";

function App() {
  return (
    <Box>
      <Header />
      <Pricing />
      <Features />
    </Box>
  );
}

export default App;
