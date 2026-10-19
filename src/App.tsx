import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import SmoothScroll from "./components/motion/SmoothScroll";

function App() {
  return (
    <TooltipProvider>
      <SmoothScroll>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </SmoothScroll>
    </TooltipProvider>
  );
}

export default App;
