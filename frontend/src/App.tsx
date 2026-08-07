import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { Stats } from "./components/Stats";
import { HowItWorks } from "./components/HowItWorks";
import { PredictionDemo } from "./components/PredictionDemo";
import { Features } from "./components/Features";
import { RegistrationForm } from "./components/RegistrationForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { HttpRegistrationService } from "./services/registrationService";
import { env } from "./config/env";

const registrationService = new HttpRegistrationService(env.registrationApiUrl);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06100c]">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Stats />
        <HowItWorks />
        <PredictionDemo />
        <Features />
        <RegistrationForm service={registrationService} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
