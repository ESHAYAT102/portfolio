import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import SmoothScroll from "./components/motion/SmoothScroll";

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <SmoothScroll>
            <Navbar />
            <RouterProvider router={router} />
            <Footer />
          </SmoothScroll>
        </TooltipProvider>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
