import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import { ThemeProvider } from "./context/ThemeContext";
import CustomCursor from "./components/ui/CustomCursor";
import StaggeredMenu from "./components/StaggeredMenu";
import Preloader from "./components/Preloader";
import Details from "./pages/Details";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Projects', ariaLabel: 'Learn about my projects', link: '/projects' },
  { label: 'Skills', ariaLabel: 'View my skills', link: '/skills' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
  { label: 'About', ariaLabel: 'About me', link: '/details' }
];



export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Preloader />
      <CustomCursor />
      <div className=" flex flex-col bg-[#fff8ee] text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar onMenuToggle={() => setMenuOpen(v => !v)} menuOpen={menuOpen} />
        <StaggeredMenu
          isFixed
          position="right"
          items={menuItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#000"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B497CF', '#5227FF']}
          accentColor="#5227FF"
          externalOpen={menuOpen}
          onMenuClose={() => setMenuOpen(false)}
        />
        <div className="flex min-h-0 flex-1 flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
