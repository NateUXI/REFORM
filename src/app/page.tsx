import CanvasFeatures from "@/components/CanvasFeatures";
import Closing from "@/components/Closing";
import CreateAnywhere from "@/components/CreateAnywhere";
import DesktopShowcase from "@/components/DesktopShowcase";
import ElementShowcase from "@/components/ElementShowcase";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div
      className="framer-tL4DK framer-g8sek framer-3rAUa framer-ugtRg framer-4s4IH framer-72rtr7"
      style={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <Hero />
      <CanvasFeatures />
      <ElementShowcase />
      <DesktopShowcase />
      <CreateAnywhere />
      <Closing />
    </div>
  );
}
