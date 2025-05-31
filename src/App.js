import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('portfolio');
  const [activePoemTab, setActivePoemTab] = useState('long');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      
      // Check if we're near the bottom of the page
      const isNearBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100);
      
      // If near bottom, always set contact as active
      if (isNearBottom) {
        setActiveSection('contact');
        return;
      }
      
      // Otherwise, find the section that's currently in view
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 50;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const longPoems = [
    {
      title: "Chasing the Dawn",
      content: `Beneath the stars, I wonder why,
The moon will wink and say goodbye.
I spread my wings, I long to fly,
To pierce the dark and learn to fly.

The world is wide, but still I cry,
For fleeting dreams that fade and die.
Yet through it all, I cant deny,
I'll chase the dawn and touch the sky.`,
      date: "2025"
    }
  ];

  const shortPoems = [
    // Short poems will be added here (4 lines each)
    // Example:
    // {
    //   title: "Sample Short Poem",
    //   content: `Line one here,
    // Line two here,
    // Line three here,
    // Line four here.`,
    //   date: "2025"
    // }

    {
    title: "Women",
    content: `Women,
You're a poem.
Written in ink,
After a drink.`,
    date: "2023"
     }
  ];

  // ============ EASY EDIT SECTION: PROJECTS ============
  // Add new projects here - just copy the structure below
  const projects = [
    {
      title: "Wifi-FTP",
      description: "Web-interfaced file transfer software using Python and HTML for seamless WiFi/LAN file sharing over intranet.",
      tech: ["Python", "HTML", "Networking", "Web Interface"],
      github: "https://github.com/clamesys/Wifi-FTP",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23"
    },
    {
      title: "IoT Agricultural Sensor Node",
      description: "Low-cost IoT sensor node for agricultural and environmental monitoring with real-time data collection.",
      tech: ["IoT", "Embedded Systems", "Sensors", "Data Analytics"],
      github: "https://github.com/clamesys/Low-Cost-IoT-Sensor-Node-for-Agricultural-and-Environmental-Monitoring",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0"
    },
    {
      title: "Security Research Tools",
      description: "Advanced tools for security research including undetected mining malware and cryptographic utilities.",
      tech: ["Security", "Cryptography", "Malware Analysis", "Research"],
      github: "https://github.com/clamesys/mining-malware-and-tools",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48"
    },
    {
      title: "Encoder-Decoder Suite",
      description: "Simple yet effective encoding and decoding tools for various cryptographic and data transformation needs.",
      tech: ["Cryptography", "Python", "Data Security", "Algorithms"],
      github: "https://github.com/clamesys/Encoder-Decoder",
      image: "https://images.unsplash.com/photo-1645760051467-9d61131d133e"
    }
    // To add a new project, copy this template:
    // {
    //   title: "Your Project Name",
    //   description: "Your project description here...",
    //   tech: ["Tech1", "Tech2", "Tech3"],
    //   github: "https://github.com/clamesys/your-repo",
    //   image: "https://your-image-url.com/image.jpg"
    // }
  ];

  const skills = {
    "Programming": ["Python", "C", "Linux", "Bash", "Data Structures", "Algorithms"],
    "Cybersecurity": ["Digital Forensics", "Ethical Hacking", "Cryptography", "Vulnerability Assessment", "SIEM", "Malware Analysis"],
    "IoT & Hardware": ["PCB Design", "Embedded Systems", "3D Modeling", "Prototyping", "Sensor Integration", "Hardware R&D"],
    "System Administration": ["Windows Troubleshooting", "Server Management", "System Analysis", "Network Configuration", "Event Viewer", "Process Management"],
    "Creative & Design": ["Graphics Design", "Video Editing", "3D Modeling", "UI/UX Basics", "Technical Documentation"]
  };

  // ============ EASY EDIT SECTION: CERTIFICATIONS ============
  // Add new certifications here - just copy the structure below
  const certifications = [
    {
      title: "Play It Safe: Manage Security Risk",
      provider: "Google",
      link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      icon: "🛡️"
    },
    {
      title: "Foundations of Cybersecurity",
      provider: "Google",
      link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
      icon: "🔒"
    },
    {
      title: "Programming For Everybody",
      provider: "University of Michigan",
      link: "https://www.coursera.org/specializations/python",
      icon: "🐍"
    },
    {
      title: "Digital Forensics Essentials",
      provider: "EC-Council",
      link: "https://www.eccouncil.org/programs/digital-forensics-essentials-dfe/",
      icon: "🔍"
    },
    {
      title: "CodeRed Anonymity Course",
      provider: "EC-Council",
      link: "https://www.eccouncil.org/",
      icon: "🎭"
    },
    {
      title: "Ethical Hacking From Scratch",
      provider: "7Security",
      link: "https://7security.com/",
      icon: "💻"
    },
    {
      title: "Scientific Computing with Python",
      provider: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/fcc8f8c8c8c/scientific-computing-with-python-v7",
      icon: "🧮"
    },
    {
      title: "Data Analysis with Python",
      provider: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/fcc8f8c8c8c/data-analysis-with-python-v7",
      icon: "📊"
    },
    {
      title: "All Things 101",
      provider: "Infosys Springboard",
      link: "https://infyspringboard.onwingspan.com/",
      icon: "🎓"
    }
    // To add a new certification, copy this template:
    // {
    //   title: "Certification Name",
    //   provider: "Organization Name",
    //   link: "https://certification-link.com",
    //   icon: "🏆"
    // }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-primary">
      {currentPage === 'portfolio' ? (
        <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-glow' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold font-accent text-white glow-text">
              Debayangshu Sen
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-white transition-all duration-300 nav-item ${activeSection === item.toLowerCase() ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage('poems')}
                className="text-gray-400 hover:text-white transition-all duration-300 nav-item"
              >
                Poetry
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-accent">
              <span className="hero-text glow-text">
                Debayangshu Sen
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-2 font-mono">
              aka <span className="text-white font-semibold glow-text">"Clame"</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              IoT Engineer • Cybersecurity Researcher • The Troubleshooter
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            From fixing Windows 98 as a kid to designing IoT systems and conducting security research. 
            I bridge the gap between hardware and software, solving problems others can't.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="glass-button-primary"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="glass-button-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-accent glow-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-accent glow-text">The Origin Story</h3>
              <p className="text-gray-300 leading-relaxed">
                My journey began in Class 2 when I accidentally broke my Windows 98 OS. With no internet and only curiosity, 
                I repaired it over a phone call with my uncle at IBM. That moment sparked a lifelong passion for understanding 
                systems from the inside out.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Over the years, I became known as <span className="text-white font-semibold glow-text">"the troubleshooter"</span> - 
                the person hundreds of students, staff, and professionals call when they have technical issues. 
                I can identify malware just by its file path and solve complex system problems manually through Safe Mode.
              </p>

              <h3 className="text-2xl font-semibold font-accent glow-text pt-4">Current Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Now pursuing Computer Science & Engineering while working as an IoT Engineer Consultant, 
                I'm leading hardware R&D and embedded systems design. My expertise spans from cybersecurity 
                research to PCB design, bridging the gap between hardware and software innovation.
              </p>

              <h3 className="text-2xl font-semibold font-accent glow-text pt-4">My Strengths & Passions</h3>
              <p className="text-gray-300 leading-relaxed">
                My core strengths lie in <span className="text-white glow-text">organization, problem-solving, communication, and troubleshooting</span>. 
                I excel at grasping technical concepts quickly and conducting thorough research to find solutions to any challenge.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about <span className="text-white glow-text">R&D because I'm curious as hell</span> - 
                so much so that "I am so curious that I tasted the poisonous food that I made myself to kill the rat in my house." 😅
              </p>

              <p className="text-gray-300 leading-relaxed">
                When I'm not troubleshooting systems or designing IoT solutions, you'll find me writing poetry, 
                riding and modifying bikes, or exploring the beautiful landscapes of Meghalaya alone with my 2-wheeled machine. 
                I love the peace time with nature and the freedom of the open road.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 font-accent glow-text">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-white glow-text">📍</span>
                  <span>Guwahati, Assam, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white glow-text">🎓</span>
                  <span>B.Tech CSE at Assam Down Town University (2022-2026)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white glow-text">💼</span>
                  <span>IoT Engineer Consultant at NINUR TECH</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white glow-text">🔧</span>
                  <span>Hundreds of successful system repairs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white glow-text">🏆</span>
                  <span>GDSC Core Member & Multiple Certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white glow-text">🏍️</span>
                  <span>Poetry, Bike Riding & Modifications, R&D</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white glow-text">🌲</span>
                  <span>Loves exploring Meghalaya solo on 2 wheels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-accent glow-text">
            Experience
          </h2>
          
          <div className="space-y-8">
            <div className="glass-card p-8 border-l-4 border-white">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white font-accent">IoT Engineer Consultant</h3>
                  <p className="text-white font-medium glow-text">NINUR TECH PRIVATE LIMITED</p>
                  <p className="text-gray-400">Internship • Hybrid, India</p>
                </div>
                <span className="text-gray-400 glass-tag mt-2 md:mt-0">
                  Feb 2025 - Present
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Leading hardware R&D projects including PCB design, 3D modeling, assembly, and testing. 
                Focused on sensor integration and ensuring seamless device-software communication. 
                Conducting research to optimize IoT product performance and functionality.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-gray-400">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white font-accent">Database Management Intern</h3>
                  <p className="text-gray-300 font-medium">Assam Down Town University - IT Cell</p>
                  <p className="text-gray-400">Internship</p>
                </div>
                <span className="text-gray-400 glass-tag mt-2 md:mt-0">
                  May 15 - Jul 15, 2025
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Managed and optimized database systems for the university's IT infrastructure. 
                Handled data integrity, performance tuning, and system maintenance.
              </p>
            </div>

            <div className="glass-card p-8 border-l-4 border-gray-600">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white font-accent">GDSC Core Member</h3>
                  <p className="text-gray-300 font-medium">Assam Down Town University</p>
                  <p className="text-gray-400">Core Team Member</p>
                </div>
                <span className="text-gray-400 glass-tag mt-2 md:mt-0">
                  Aug 2023 - Sep 2023
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Active core member of Google Developer Student Clubs, organizing tech events, 
                workshops, and contributing to the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 section-bg">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-accent glow-text">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-card project-card">
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-accent glow-text">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="glass-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white hover:glow-text transition-all duration-300 font-mono"
                  >
                    <span>View on GitHub</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-accent glow-text">
            Skills & Expertise
          </h2>
        <p className="text-xl text-center mb-1 font-accent glow-text">
            (jack of all trades, master of some)
        </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4 font-accent glow-text">{category}</h3>
                <div className="space-y-2">
                  {skillList.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full glow-dot"></span>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 section-bg">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-accent glow-text">
            Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-6 hover:glass-card-hover transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-white text-xl glow-text group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold font-accent glow-text group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-mono mt-1 group-hover:text-gray-300 transition-colors">
                      {cert.provider}
                    </p>
                    <div className="flex items-center space-x-1 mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-gray-500 font-mono">View Certificate</span>
                      <span className="text-xs text-gray-500">↗</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-accent glow-text">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 font-accent glow-text">Get In Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Whether you need a system troubleshooted, an IoT solution designed, or want to discuss 
                  cybersecurity research, I'm always up for interesting technical challenges.
                </p>
                <p className="text-gray-400 font-mono">
                  Response time: Usually within 24 hours ⚡
                </p>
              </div>
              
              <div className="space-y-4">
                <a href="mailto:debayangshusen@gmail.com" className="contact-link">
                  <span className="text-2xl">📧</span>
                  <span className="font-mono">debayangshusen@gmail.com</span>
                </a>
                <a href="tel:+918822866953" className="contact-link">
                  <span className="text-2xl">📞</span>
                  <span className="font-mono">+91 8822866953</span>
                </a>
                <a href="https://wa.me/918403099279" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="text-2xl">💬</span>
                  <span className="font-mono">WhatsApp: +91 8403099279</span>
                </a>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 font-accent glow-text">Find Me Online</h3>
              <div className="space-y-4">
                <a href="https://linkedin.com/in/debayangshusen" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn - Professional Profile</span>
                </a>
                <a href="https://github.com/clamesys" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="text-2xl">🐙</span>
                  <span>GitHub - Code & Projects</span>
                </a>
                <a href="https://instagram.com/clame_sys" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="text-2xl">📸</span>
                  <span>Instagram - Behind the Scenes</span>
                </a>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm font-mono">
                    📍 Based in Guwahati, Assam, India • Open to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-bg border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-mono">
            © 2025 Debayangshu Sen. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "You Just Cant SocialEnginner Me. Its just impossible. Dont u Even try." 😎
          </p>
        </div>
      </footer>
        </>
      ) : (
        <div className="min-h-screen bg-black text-white">
          {/* Poetry Navigation */}
          <nav className="fixed top-0 w-full z-50 glass-nav shadow-glow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="text-2xl font-bold font-accent text-white glow-text">
                  Poetry Corner
                </div>
                <button
                  onClick={() => setCurrentPage('portfolio')}
                  className="text-gray-400 hover:text-white transition-all duration-300 nav-item font-mono"
                >
                  ← Back to Portfolio
                </button>
              </div>
            </div>
          </nav>

          <div className="pt-20 p-8">
            <h1 className="text-4xl font-bold text-center mb-12 font-accent glow-text">
              Poetry Collection
            </h1>
            
            {/* Poem Category Tabs */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setActivePoemTab('long')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-mono ${
                    activePoemTab === 'long' ? 'glass-button-active' : 'glass-button-inactive'
                  }`}
                >
                  Long Poems
                </button>
                <button
                  onClick={() => setActivePoemTab('short')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-mono ${
                    activePoemTab === 'short' ? 'glass-button-active' : 'glass-button-inactive'
                  }`}
                >
                  Short Poems
                </button>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
              {activePoemTab === 'long' ? (
                longPoems.length > 0 ? (
                  longPoems.map((poem, index) => (
                    <div key={index} className="glass-card p-8">
                      <h2 className="text-2xl font-semibold mb-4 font-accent glow-text">{poem.title}</h2>
                      <pre className="text-gray-300 whitespace-pre-wrap font-serif leading-relaxed">
                        {poem.content}
                      </pre>
                      <p className="text-gray-500 mt-4 font-mono">{poem.date}</p>
                    </div>
                  ))
                ) : (
                  <div className="glass-card p-8 text-center">
                    <p className="text-gray-400 font-mono">More long poems coming soon...</p>
                  </div>
                )
              ) : (
                shortPoems.length > 0 ? (
                  shortPoems.map((poem, index) => (
                    <div key={index} className="glass-card p-8">
                      <h2 className="text-2xl font-semibold mb-4 font-accent glow-text">{poem.title}</h2>
                      <pre className="text-gray-300 whitespace-pre-wrap font-serif leading-relaxed">
                        {poem.content}
                      </pre>
                      <p className="text-gray-500 mt-4 font-mono">{poem.date}</p>
                    </div>
                  ))
                ) : (
                  <div className="glass-card p-8 text-center">
                    <p className="text-gray-400 font-mono">Short poems (4 lines each) coming soon...</p>
                    <p className="text-gray-500 text-sm mt-2 font-mono">Perfect for quick inspiration bursts!</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
