import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Prevent body scroll when menu is open and handle window resize
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Close menu when clicking outside or on window resize (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMenuOpen(false);
      }
    };

    // Only add click outside handler if menu is open
    const handleClickOutside = (event) => {
      // Don't close if clicking inside the navbar or backdrop
      if (isMenuOpen && 
          !event.target.closest('.navbar') && 
          !event.target.closest('.mobile-menu-backdrop')) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Only listen for outside clicks when menu is open
    if (isMenuOpen) {
      // Small delay to prevent immediate closure from the click that opened it
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skill', 'resume', 'projects', 'service', 'contact'];
    
    const handleScroll = () => {
      const navbarHeight = 75;
      const triggerOffset = 200; // Distance from top to trigger section change
      const scrollPosition = window.scrollY + navbarHeight + triggerOffset;

      let currentSection = 'home';

      // Method 1: Check which section is currently in the viewport center
      const viewportCenter = window.scrollY + (window.innerHeight / 2);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          // If viewport center is within this section, select it
          if (viewportCenter >= sectionTop && viewportCenter <= sectionBottom) {
            currentSection = sections[i];
            break;
          }
        }
      }

      // Method 2: Fallback - find the section we've scrolled past
      if (currentSection === 'home' && window.scrollY > 100) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const sectionTop = section.offsetTop;
            // Check if we've scrolled past this section's trigger point
            if (scrollPosition >= sectionTop) {
              currentSection = sections[i];
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Check on mount

    // Also check on hash change (when clicking nav links)
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (sections.includes(hash)) {
        setActiveSection(hash);
        // Also trigger scroll check after navigation
        setTimeout(handleScroll, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
    // Remove focus after clicking to prevent persistent outline
    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (section) => {
    closeMenu();
    setActiveSection(section);
  };

  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a 
                      href="/#home" 
                      style={{ textDecoration: "none" }}
                      onClick={() => handleNavClick('home')}
                      aria-label="Home - Ahsan Tariq"
                    >
                      <h3>Ahsan Tariq</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className={`navbar-toggle ${isMenuOpen ? "" : "collapsed"}`}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-controls="bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className={`icon-bar ${isMenuOpen ? "icon-bar-open" : ""}`}></span>
                    <span className={`icon-bar ${isMenuOpen ? "icon-bar-open" : ""}`}></span>
                    <span className={`icon-bar ${isMenuOpen ? "icon-bar-open" : ""}`}></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  {/* Mobile menu backdrop */}
                  {isMenuOpen && (
                    <div 
                      className="mobile-menu-backdrop" 
                      onClick={closeMenu}
                      aria-hidden="true"
                    ></div>
                  )}
                  <div
                    className={`navbar-collapse ${isMenuOpen ? "collapse in show" : "collapse"}`}
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a 
                          href="/#home" 
                          className={activeSection === 'home' ? "active" : ""}
                          onClick={() => handleNavClick('home')}
                          aria-label="Navigate to Home section"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#about"
                          className={activeSection === 'about' ? "active" : ""}
                          onClick={() => handleNavClick('about')}
                          aria-label="Navigate to About section"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#skill"
                          className={activeSection === 'skill' ? "active" : ""}
                          onClick={() => handleNavClick('skill')}
                          aria-label="Navigate to Skills section"
                        >
                          Skill
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#resume"
                          className={activeSection === 'resume' ? "active" : ""}
                          onClick={() => handleNavClick('resume')}
                          aria-label="Navigate to Education section"
                        >
                          Education
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#projects"
                          className={activeSection === 'projects' ? "active" : ""}
                          onClick={() => handleNavClick('projects')}
                          aria-label="Navigate to Projects section"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#service"
                          className={activeSection === 'service' ? "active" : ""}
                          onClick={() => handleNavClick('service')}
                          aria-label="Navigate to Services section"
                        >
                          Service
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/#contact"
                          className={activeSection === 'contact' ? "active" : ""}
                          onClick={() => handleNavClick('contact')}
                          aria-label="Navigate to Contact section"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Header;
