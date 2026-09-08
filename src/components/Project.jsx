import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Bamboo Shop",
    title: (
      <>
        BAMBOO <br />
        <span className="font-light italic text-gray-300 font-serif">SHOP</span>
      </>
    ),
    category: "Multi-Platform E-commerce Management System",
    tools: "React, FastAPI, PostgreSQL, Tailwind, Docker, Redis, Tailwind CSS",
    description:
      "A full-stack multi-platform e-commerce management system similar to TikTok Seller Center. The project consists of 3 integrated websites: a customer-facing product browsing platform, a seller dashboard for product and order management, and a company admin system to manage all sellers. Designed with clean architecture, real-time data synchronization, and scalable database structure.",
    image: "/src/assets/project_section/bamboo_shop.jpg",
    githubLink: "#project",
  },
  {
    name: "Spice with Hassan",
    title: (
      <>
        SPICE WITH <br />
        <span className="font-light italic text-gray-300 font-serif">
          Hassan
        </span>
      </>
    ),
    category: "Boutique Restaurant & Ordering Management",
    tools: "React Native, Node.js, Express, MySQL, Tailwind CSS",
    description:
      "A full-stack restaurant management and food ordering application featuring dish customization, interactive menu browsing, live order tracking, and clean database architecture.",
    image:
      "https://raw.githubusercontent.com/Hxni786/Hxni-Ecommerce-Store/main/profile_docs/assets/spice_hassan_mockup.png",
    githubLink: "#project",
  },
  {
    name: "Building Materials Management System",
    title: (
      <>
        BUILDING MATERIALS <br />
        <span className="font-light italic text-gray-300 font-serif">
          MANAGEMENT
        </span>
      </>
    ),
    category: "Store Management & Accounting System",
    tools:
      "React, Node.js, Nest.js, PostgreSQL, Tailwind, Docker, Tailwind CSS",
    description:
      "A comprehensive management system designed for building materials store owners. The platform allows complete control over inventory, invoice generation and export, accounting tasks, vehicle fleet management (trucks, excavators, forklifts...), and employee administration. Built with a clean interface and efficient database architecture to streamline daily store operations.",
    image: "/src/assets/project_section/Building_materials_system_image.jpg",
    githubLink: "#project",
  },
  {
    name: "AI Travel Planner",
    title: (
      <>
        AI TRAVEL <br />
        <span className="font-light italic text-gray-300 font-serif">
          PLANNER
        </span>
      </>
    ),
    category: "AI-Powered Travel Planning & Booking Platform",
    tools:
      "React Native, React, Golang, OpenAI API, REST API, PostgreSQL, Tailwind CSS",
    description:
      "An intelligent travel application similar to Traveloka, enhanced with AI. Users can chat with AI to automatically generate personalized itineraries including places to eat, sleep, and visit. The system supports booking flights, trains, hotels, restaurant reservations, and more — all in one seamless platform.",
    image: "/src/assets/project_section/ai_travel_planner.png",
    githubLink: "#project",
  },
  {
    name: "Bamboo ",
    title: (
      <>
        BAMBOO <br />
        <span className="font-light italic text-gray-300 font-serif">
          Shoe Shop
        </span>
      </>
    ),
    category: "E-commerce Footwear Store with AI Chatbot",
    tools: "React, FastAPI, PostgreSQL, Docker, OpenAI API",
    description:
      "A full-stack online footwear store specializing in shoes and sandals. The application features an intelligent AI chatbot for product consultation and search, interactive product browsing, size selection, real-time inventory, and seamless online payment integration (Visa, MoMo, ZaloPay). Designed with a clean, modern UI and scalable architecture.",
    image: "/src/assets/project_section/Bamboo_shoe_shop.jpg",
    githubLink: "#project",
  },
  {
    name: "ItsVPT Social",
    title: (
      <>
        ITSVPT <br />
        <span className="font-light italic text-gray-300 font-serif">
          Social Engine
        </span>
      </>
    ),
    category: "Enterprise Multi-User Directory & Social Engine",
    tools: "React Native, Firebase, Node.js, REST API",
    description:
      "Scalable social directory mobile application featuring user authentication, user profiles, search, real-time messaging, and multi-user interactions.",
    image:
      "https://raw.githubusercontent.com/Hxni786/Nixh-A-social-Media-App/main/docs/assets/mobile_mockup.png",
    githubLink: "#project",
  },
  {
    name: "TicketVerse",
    title: (
      <>
        TICKET <br />
        <span className="font-light italic text-gray-300 font-serif">
          Verse
        </span>
      </>
    ),
    category: "Premium Full-Stack Event Booking Engine",
    tools: "React Native, Node.js, Express, MySQL",
    description:
      "Full-stack event ticket booking platform featuring seat selections, digital ticket generation, secure checkout, and event management dashboard.",
    image:
      "https://raw.githubusercontent.com/Hxni786/Ticket-Booking-App/main/mobile/assets/promo1.png",
    githubLink: "#project",
  },
  {
    name: "AI Sales Network",
    title: (
      <>
        AI Sales
        <br />
        <span className="font-light italic text-gray-300 font-serif">
          Network
        </span>
      </>
    ),
    category: "AI-Powered Sales Network & Team Management",
    tools: "React Native, Node.js, MySQL, Chart.js",
    description:
      "An intelligent sales network platform that helps businesses manage sales teams, track performance, and optimize revenue. Features AI-driven lead recommendations, real-time sales analytics, commission tracking, team hierarchy management, and detailed performance reports with interactive charts.",
    image: "/src/assets/project_section/ai-sales-network.svg",
    githubLink: "#project",
  },
];

const Project = ({ onCtaClick }) => {
  const headerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    cardRefs.current.forEach((card) => {
      if (card) {
        const imageBox = card.querySelector(".project-image-box");
        const img = card.querySelector(".project-image");
        const textBox = card.querySelector(".project-text-box");

        if (imageBox) {
          gsap.fromTo(
            imageBox,
            { y: 50, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        if (img) {
          gsap.to(img, {
            y: -25,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        if (textBox) {
          gsap.fromTo(
            textBox,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              delay: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      }
    });
  }, []);

  return (
    <div
      id="project"
      className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16"
    >
      {/* Top Header Section */}
      <div
        ref={headerRef}
        className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-8 lg:gap-0 mb-16 lg:mb-32"
      >
        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-2 sm:gap-3 flex-wrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-2 pt-1 md:pt-4">
              work
            </span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
            Full-stack developer passionate about modern ideas, simplicity in
            design, and creating a consistent visual identity that resonates
            with today’s market.
          </p>
          <button
            onClick={onCtaClick}
            className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={proj.name}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center justify-between gap-8 md:gap-12 lg:gap-16 w-full group`}
            >
              {/* Image Side */}
              <div className="project-image-box w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-lg">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="project-image  object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="project-text-box w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-3 md:mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-4 md:mb-6">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#ccff00]/10 text-[#ccff00] text-xs font-semibold px-3 py-1 rounded-full border border-[#ccff00]/20">
                    {proj.category}
                  </span>
                  <span className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
                    {proj.tools}
                  </span>
                </div>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6 md:mb-8">
                  {proj.description}
                </p>

                {/* <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  <a
                    href={proj.liveDemoLink || proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-6 py-3 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    {proj.liveDemoLink ? "Live Demo" : "Live Repository"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-6 py-3 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    GitHub Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
