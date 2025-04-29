import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import PrevProjects from "./components/PrevProjects";

const Navbar = () => (
  <nav className="sticky top-0 bg-white shadow-md z-50 p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Walla</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/about" className="hover:text-blue-600">About</Link>
      <Link to="/skills" className="hover:text-blue-600">Skills</Link>
      <Link to="/projects" className="hover:text-blue-600">Projects</Link>
      <Link to="/contact" className="hover:text-blue-600">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="p-8 text-center">
    <h2 className="text-4xl font-bold mb-4">Welcome to Ajasegun John Portfolio</h2>
    <p className="text-lg">Explore my work and skills</p>
    <img src="https://images.unsplash.com/photo-1728044849236-5e8a061e1895?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Splash" className="mx-auto mt-6 rounded-xl" />
  </div>
);

const About = () => (
  <div className="p-8">
    <AboutMe />
  </div>
);

const Skills = () => (
  <div className="p-8">
    <MySkills />
  </div>
);

const Projects = () => (
  <div className="p-8">
    <PrevProjects />
  </div>
);

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="w-full p-2 border rounded"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <div className="p-8 bg-gray-100 text-center">
      <h3 className="text-2xl font-semibold mb-2">Subscribe to My Newsletter</h3>
      <form onSubmit={subscribe} className="flex flex-col md:flex-row justify-center items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-64"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Subscribe</button>
      </form>
    </div>
  );
};

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Newsletter />
  </Router>
);

export default App;
