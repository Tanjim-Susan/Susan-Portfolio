import Certificates from "./pages/certificates";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectViewer from "./pages/projectViewer";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Projects from "./pages/Projects";
import CertificateViewer from "./pages/CertificateViewer";

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
<Route
  path="/certificate/:id"
  element={<CertificateViewer />}
/>
    <Route
  path="/projects"
  element={<Projects />}
/>
    <Route
  path="/project/:id"
  element={<ProjectViewer />}
/>
    <Route
      path="/"
      element={
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
      

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      }
    />

   <Route
  path="/certificates"
  element={<Certificates />}
/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
