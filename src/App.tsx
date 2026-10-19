import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import SmoothScroll from "./components/motion/SmoothScroll";
import AsciiBackground from "./components/AsciiBackground";
import VimScroll from "./components/VimScroll";

function App() {
  return (
    <TooltipProvider>
      <AsciiBackground />
      <SmoothScroll>
        <VimScroll />
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </SmoothScroll>
    </TooltipProvider>
  );
}

export default App;
