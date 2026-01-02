import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Initialize WOW.js after component mounts and scripts load
    const initWOW = () => {
      if (typeof window !== 'undefined' && window.WOW) {
        try {
          const wow = new window.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: true,
            live: true,
            scrollContainer: null
          });
          wow.init();
        } catch (error) {
          console.log('WOW.js initialization:', error);
        }
      } else {
        // Retry after a short delay if WOW is not yet available
        setTimeout(initWOW, 500);
      }
    };

    // Try to initialize immediately
    initWOW();

    // Also try after window load
    window.addEventListener('load', initWOW);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for additional animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections with IDs
    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => {
      if (section.id && section.id !== 'root' && section.id !== 'particles-js') {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup
      window.removeEventListener('load', initWOW);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Ahsan Tariq</b>
                          <b className="is-hidden">Full Stack</b>
                          <b className="is-visible">Developer</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="about-social">
                          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://www.linkedin.com/in/ahsan-tariq-5035a227b"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".3s">
                            <a
                              href="https://www.facebook.com/share/1ABdTqoXNq/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://wa.me/923125992836"
                              target="newtab"
                            >
                              <i
                                className="fa fa-whatsapp"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".1s">
                            <a
                              href="https://www.upwork.com/freelancers/~01829ff2578e45668a?mp_source=share"
                              target="newtab"
                            >
                              <i
                                className="fa fa-briefcase"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about" className="wow fadeInUp" data-wow-duration="1s">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeInDown" data-wow-duration="0.8s">
                      <h3>About Me</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Software Developer with hands-on experience building desktop, 
                        console, and web applications using C# and C++. Skilled in 
                        crafting efficient, reusable code within the .NET framework 
                        and applying object-oriented principles in agile environments. 
                        Proven ability to translate user requirements into functional, 
                        performance-optimized modules. Committed to enhancing productivity 
                        and user experience through creative, solution-driven software development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn" data-wow-duration="1s">
                  <div className="col-md-4 col-sm-6">
                    <div className="love-details wow fadeInLeft" data-wow-delay=".1s" data-wow-duration="0.8s">
                      <i
                        className="fa fa-code love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Full-Stack Development</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Expert in building end-to-end solutions from backend to frontend</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="love-details wow fadeInUp" data-wow-delay=".2s" data-wow-duration="0.8s">
                      <i
                        className="fa fa-cogs love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>.NET Expertise</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Specialized in ASP.NET Core, Entity Framework, and Windows Forms</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="love-details wow fadeInRight" data-wow-delay=".3s" data-wow-duration="0.8s">
                      <i
                        className="fa fa-mobile love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Cross-Platform Solutions</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Building applications for web, desktop, mobile, and console platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/myprofile.png"
                        alt="ahsan-tariq"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Hi! I'm Ahsan</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        I am a Full Stack Developer based in Islamabad, Pakistan,
                        currently working at Ark IT Services with extensive experience 
                        in .NET development. I specialize in full-stack development,
                        building robust solutions from desktop applications to complex, 
                        interactive web applications using .NET, React, Next.js, 
                        and MERN stack.
                        <br />
                        <br />I take pride in building scalable software solutions 
                        with clean, maintainable code. My expertise includes ASP.NET 
                        Core Web API, Entity Framework, React JS, Next.js, and MERN 
                        stack development. I'm passionate about creating efficient, 
                        performance-optimized applications that solve real-world 
                        business challenges.
                      </p>
                      <a
                        className="about-link-1"
                        href="assets/cv/AHSAN TARIQ_.NetDeveloper.pdf"
                        target="_blank"
                      >
                        See Resume
                      </a>
                      <a className="about-link-2" href="#contact">
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-pencil-square-o stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">5+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Projects Completed</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-code stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">2+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Years Experience</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-bolt stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">Full Stack</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Developer</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-coffee stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">100+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Cups Coffee Taken</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill" className="wow fadeInUp" data-wow-duration="1s">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeInDown" data-wow-duration="0.8s">
                    <h3>My Skill</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I value simple content structure, clean design patterns,
                      and thoughtful interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-6">
                  <div className="skill-details text-left">
                    <p>
                      I specialize in full-stack development, with expertise in 
                      .NET framework, React, Next.js, and MERN stack. My skills 
                      include building robust backend APIs using ASP.NET Core, 
                      creating interactive frontend applications with React and 
                      Next.js, and developing complete solutions from database 
                      design to deployment. I am passionate about leveraging 
                      cutting-edge technologies to deliver high-performance and 
                      reliable applications that meet the evolving needs of 
                      modern businesses.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>C# / ASP.NET Core - 90%</h3>
                          </li>
                          <li>
                            <h3>React JS / Next.js - 85%</h3>
                          </li>
                          <li>
                            <h3>MERN Stack - 80%</h3>
                          </li>
                          <li>
                            <h3>Entity Framework / Dapper - 85%</h3>
                          </li>
                          <li>
                            <h3>MySQL / MSSQL - 85%</h3>
                          </li>
                          <li>
                            <h3>HTML / CSS / JavaScript - 90%</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="resume" className="wow fadeInUp" data-wow-duration="1s">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeInDown" data-wow-duration="0.8s">
                      <h3>Educational Story</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I like to code things from scratch, and enjoy bringing
                        ideas to life in the browser.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn" style={{ display: "flex", flexWrap: "wrap" }} data-wow-duration="1s">
                  <div className="col-md-4 col-sm-4" style={{ display: "flex" }}>
                    <div className="resume-details wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%" }}>
                      <div className="resume-hover"></div>
                      <div className="resume-main" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                        <i
                          className="fa fa-home resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Matriculation</h3>
                        <h2>2017-2019</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Completed Matriculation in Computer Science from 
                          Sunny Model School.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4" style={{ display: "flex" }}>
                    <div className="resume-details wow fadeInUp" data-wow-delay=".3s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%" }}>
                      <div className="resume-hover"></div>
                      <div className="resume-main" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Intermediate</h3>
                        <h2>2019-2021</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Completed Intermediate in Computer Science from 
                          Steps College, Rawalpindi.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4" style={{ display: "flex" }}>
                    <div className="resume-details wow fadeInRight" data-wow-delay=".4s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%" }}>
                      <div className="resume-hover"></div>
                      <div className="resume-main" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Bachelor's Degree</h3>
                        <h2>2021-2025</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          BS Software Engineering from National University of 
                          Modern Languages (NUML), Islamabad with 3.76 CGPA.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row main-row wow fadeIn">
                  <div className="col-md-12">
                    <div className="main-title text-center">
                      <h3>Working Experience</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        My career is a canvas of innovation and growth, where
                        each experience paints a new stroke of achievement and
                        learning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn" style={{ display: "flex", flexWrap: "wrap" }} data-wow-duration="1s">
                  <div className="col-md-6 col-sm-12" style={{ display: "flex" }}>
                    <div className="exp-details wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%" }}>
                      <div className="exp-hover"></div>
                      <div className="exp-main" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Ark IT Services</h3>
                        <h4>.NET Developer</h4>
                        <h2>Aug 2025 - Present</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Working as a .NET Developer at Ark IT Services, 
                          Gulberg Greens, Islamabad. Developing and maintaining 
                          enterprise-level applications using ASP.NET Core and 
                          related technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12" style={{ display: "flex" }}>
                    <div className="exp-details wow fadeInRight" data-wow-delay=".3s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%" }}>
                      <div className="exp-hover"></div>
                      <div className="exp-main" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Mega Tech Inventiosoft</h3>
                        <h4>.NET Developer</h4>
                        <h2>Feb 2024 - Feb 2025</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Served as a .NET Developer at Mega Tech Inventiosoft, 
                          I-8, Islamabad. Developed desktop and web applications 
                          using C# and ASP.NET, working on various modules including 
                          user management, payment processing, and API development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ WORK =============================== --> */}

        {/* <div id="work">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Work Portfolio</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Here are a few design projects I've worked on recently.
                        Want to see more?{" "}
                        <a className="underline2" href="#contact">
                          contact me.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="gallery" style={{ paddingTop: "80px" }}>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <div className="gallery-item">
                    <img
                      className="gallery-image"
                      src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                      alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                    />
                  </div>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                        alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                        alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                        alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                        alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                        alt="sunset behind San Francisco city skyline"
                      />
                    </div>
                  </a>
                  <a href="#">
                    <div className="gallery-item">
                      <img
                        className="gallery-image"
                        src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                        alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service" className="wow fadeInUp" data-wow-duration="1s">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeInDown" data-wow-duration="0.8s">
                      <h3>My Services</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Custom Software Development for different platforms to meet your business needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn" style={{ display: "flex", flexWrap: "wrap" }} data-wow-duration="1s">
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".1s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px" }}>
                        <i
                          className="fa fa-globe service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Web-Based Applications</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          Custom web applications built with ASP.NET Core, React, 
                          Next.js, and MERN stack. Scalable and performance-optimized solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".2s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px" }}>
                        <i
                          className="fa fa-desktop service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Desktop Applications</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          Windows Forms and WPF applications using C# and .NET 
                          Framework. Custom desktop solutions for business operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".3s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px" }}>
                        <i
                          className="fa fa-mobile service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Mobile Applications</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          Cross-platform mobile apps using .NET MAUI. Native 
                          performance with shared codebase for iOS, Android, and Windows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".4s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px" }}>
                        <i
                          className="fa fa-terminal service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Console Applications</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          Command-line tools and console applications using C# 
                          and C++. Automation scripts, utilities, and backend services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".5s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px" }}>
                        <i
                          className="fa fa-code service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>API Development</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          RESTful APIs and Web Services using ASP.NET Core Web API. 
                          Secure, scalable backend services with Entity Framework and Dapper.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".6s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px" }}>
                        <i
                          className="fa fa-database service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Database Solutions</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          Database design and optimization using MySQL and MSSQL. 
                          Data modeling, stored procedures, and performance tuning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            People I've worked with have said some nice things
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      "Ahsan is a dedicated full-stack developer 
                                      with excellent skills in .NET and React. 
                                      His ability to deliver quality solutions 
                                      makes him a valuable team member."
                                      <br />
                                      <span>Client Testimonial</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      "Ahsan's expertise in both backend and 
                                      frontend technologies, combined with his 
                                      problem-solving skills, makes him an 
                                      outstanding developer."
                                      <br />
                                      <span>Team Lead</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      "Working with Ahsan has been a great 
                                      experience. His attention to detail and 
                                      commitment to writing clean, efficient 
                                      code is impressive."
                                      <br />
                                      <span>Colleague</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ PROJECTS =============================== --> */}

        <div id="projects" className="wow fadeInUp" data-wow-duration="1s">
          <div className="work-content">
            <div className="work-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeInDown" data-wow-duration="0.8s">
                      <h3>My Projects</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Here are some of the projects I've worked on. Each project 
                        represents a unique challenge and learning experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn" style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details" data-wow-delay=".1s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px", minHeight: "100%" }}>
                        <i
                          className="fa fa-cricket-bat service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Rooftop Cricket Web App</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          <strong>Tech Stack:</strong> ASP.NET Core Web API, React JS
                          <br />
                          <strong>Modules:</strong> Booking, Payment, Notification, 
                          Registration, User Management, Match Scheduling
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".2s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px", minHeight: "100%" }}>
                        <i
                          className="fa fa-lock service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Secure File Storage System</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          <strong>Tech Stack:</strong> ASP.NET Windows Forms
                          <br />
                          <strong>Modules:</strong> File/Folder Upload, Encryption, 
                          Access Control, File Retrieval
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".3s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px", minHeight: "100%" }}>
                        <i
                          className="fa fa-shopping-cart service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>POS Retail System</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          <strong>Tech Stack:</strong> .NET Framework, C#
                          <br />
                          <strong>Description:</strong> A comprehensive Point of Sale 
                          system for retail stores with inventory management, sales 
                          tracking, and reporting features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".4s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px", minHeight: "100%" }}>
                        <i
                          className="fa fa-cutlery service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>POS Restaurant System</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          <strong>Tech Stack:</strong> .NET Framework, C#
                          <br />
                          <strong>Description:</strong> A specialized Point of Sale 
                          system for restaurants with table management, order processing, 
                          kitchen display, and billing features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".5s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px", minHeight: "100%" }}>
                        <i
                          className="fa fa-mobile service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Rental Management Mobile App</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          <strong>Tech Stack:</strong> .NET MAUI, C#
                          <br />
                          <strong>Description:</strong> A cross-platform mobile application 
                          for rental property management with tenant tracking, payment 
                          processing, and maintenance scheduling.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".6s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px", minHeight: "100%" }}>
                        <i
                          className="fa fa-briefcase service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Assets Manager for HR</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          <strong>Description:</strong> A comprehensive HR asset 
                          management system for tracking and managing company assets.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6" style={{ marginBottom: "30px", display: "flex" }}>
                    <div className="service-details wow fadeInUp" data-wow-delay=".7s" data-wow-duration="0.8s" style={{ height: "100%", display: "flex", flexDirection: "column", width: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                      <div className="service-bottom" style={{ flex: "1", display: "flex", flexDirection: "column", padding: "20px", minHeight: "100%" }}>
                        <i
                          className="fa fa-calendar service-icon"
                          aria-hidden="true"
                          style={{ fontSize: "50px", marginBottom: "20px", color: "#efd236", display: "block" }}
                        ></i>
                        <h3>Event Management System</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p style={{ flex: "1", marginTop: "15px" }}>
                          <strong>Description:</strong> A complete event management 
                          system for universities to organize and manage various events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact" className="wow fadeInUp" data-wow-duration="1s">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeInDown" data-wow-duration="0.8s">
                        <h3>Contact Me</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I'm always open to discussing product design work or
                          partnership opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-4 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>Street 4, 668 Bhatta Road, Koral Town, Islamabad, Pakistan</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:ahsantariq173@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          ahsantariq173@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-phone contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="tel:03125992836"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          0312-5992836
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-fluid map-col">
                  <div className="col-md-12 col-sm-12 map-col">
                    <div className="google-maps">
                      <div className="map-wrap">
                        <iframe
                          title="google-maps"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.1234567890123!2d73.1234567890123!3d33.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf1234567890%3A0x1234567890abcdef!2sKoral%20Town%2C%20Islamabad!5e0!3m2!1sen!2spk!4v1234567890123!5m2!1sen!2spk"
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
