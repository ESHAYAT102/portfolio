import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";

function App() {
  return (
    <TooltipProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </TooltipProvider>
  );
}

export default App;
