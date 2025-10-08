const portfolioData = {
  work: [
    {
      company: "Hexagon — Software Engineer (May - Dec 2024)",
      projects: [
        {
          title: "SDX Copilot",
          image: require('../assets/images/SDX copilot.png'),
          tagline: "Automated SDX workflow creation using AI",
          genres: ["LangChain", "LangGraph", "FastAPI"],
          synopsis: "Built a multi-agent AI framework using LangChain, LangGraph, and FastAPI to automate SDX workflow generation. Reduced manual effort by 80% and significantly accelerated development cycles.",
          badge: "🤝",
          episodes: [
            {
              title: "AI Framework Implementation",
              description: "Architected a multi-agent system using the latest LLM frameworks to automate complex workflow generation."
            },
            {
              title: "FastAPI Backend Development",
              description: "Built a scalable backend system to handle workflow generation requests and integrate with existing SDX systems."
            }
          ]
        },
        {
          title: "The Machine",
          image: require('../assets/images/The Machine.png'),
          tagline: "Parallel multi-agent chatbot system",
          genres: ["Agents", "RAG", "Python"],
          synopsis: "Engineered a supervisor-based multi-agent architecture that executes parallel responses, reducing overall processing time by over 50%.",
          badge: "🧠",
          episodes: [
            {
              title: "Parallel Processing Architecture",
              description: "Designed a novel approach to run multiple agent tasks in parallel to optimize response time."
            },
            {
              title: "Supervisor Agent Development",
              description: "Created a supervisor agent to coordinate and synthesize outputs from multiple specialized agents."
            }
          ]
        }
      ]
    },
    {
      company: "Hexagon — Software Engineer Intern (2023–24)",
      projects: [
        {
          title: "HxGN SurveyHub",
          image: require('../assets/images/SurveyHub.png'),
          tagline: "Automated schema and form generation platform",
          genres: ["Django", "MSSQL", "Azure"],
          synopsis: "Designed a full-stack Django + MSSQL application to dynamically generate database schemas and forms, reducing administrative workload by 80%.",
          badge: "🗂️",
          episodes: [
            {
              title: "Multi-Role Authentication System",
              description: "Implemented role-based access control to manage permissions for administrators, surveyors, and reviewers."
            },
            {
              title: "Multi-Survey Management",
              description: "Enabled users to create, manage, and deploy multiple survey configurations simultaneously."
            },
            {
              title: "Data Synchronization System",
              description: "Built conflict resolution mechanisms for merging changes when devices reconnect to the network."
            }
          ]
        },
        {
          title: "Tech Dashboards",
          image: require('../assets/images/Tech Dashboards.png'),
          tagline: "Interactive analytics dashboards for data-driven insights",
          genres: ["Power BI", "Analytics"],
          synopsis: "Built and deployed Power BI dashboards that consolidated technology metrics to guide engineering decisions.",
          badge: "📊",
          episodes: [
            {
              title: "Data Integration Pipeline",
              description: "Created a system to automatically collect and process data from multiple sources for unified visualization."
            },
            {
              title: "Interactive Visualization Design",
              description: "Designed user-friendly dashboards with drill-down capabilities for detailed analysis."
            }
          ]
        }
      ]
    },
    {
      company: "Barclays — Software Engineer Intern (Summer 2023)",
      projects: [
        {
          title: "Dynamic Visualization Tool",
          image: require('../assets/images/Dynamic Vis image.png'),
          tagline: "Real-time analytics through Flask dashboards",
          genres: ["Flask", "Python", "Analytics"],
          synopsis: "Created a Flask-based visualization tool to join and analyze data from multiple systems for operational decision-making.",
          badge: "📈",
          episodes: [
            {
              title: "Flask Backend Development",
              description: "Built a responsive backend system to process and serve complex financial data."
            },
            {
              title: "Data Integration Solutions",
              description: "Implemented methods to consolidate data from disparate systems into a unified view."
            }
          ]
        },
        {
          title: "Database Monitoring Automation",
          image: require('../assets/images/DB monitoring.png'),
          tagline: "Automated monitoring between production and DR databases",
          genres: ["Python", "Autosys", "Database"],
          synopsis: "Built a Python + Autosys workflow to automate monitoring and alerting of database consistency between production and disaster recovery environments.",
          badge: "🗄️",
          episodes: [
            {
              title: "Automation Workflow Development",
              description: "Created an end-to-end system for automated monitoring without manual intervention."
            },
            {
              title: "Alert System Implementation",
              description: "Designed a robust alerting mechanism for immediate notification of consistency issues."
            }
          ]
        }
      ]
    }
  ],
  
  projects: [
    {
      title: "Road Safety Enforcement System",
      image: require('../assets/images/Road_safety_proj.png'),
      tagline: "Deep Learning–based integrated system for traffic safety",
      badge: "🚦",
      genres: ["Django", "Computer Vision", "Deep Learning", "YOLO", "TrOCR"],
      synopsis: "Built an integrated system for vehicle detection, helmet violation detection, and vehicle emission analysis using YOLOv5–YOLOv9 and TrOCR, unified through Django. Achieved mAP: 69% (emission), 88% (plates), 83% (helmet), 86.5% (vehicle).",
      links: [
        {
          title: "Journal Paper",
          url: "https://openurl.ebsco.com/EPDB%3Agcd%3A5%3A23468901/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A181715085&crl=c&link_origin=www.google.com"
        }
      ]
    },
    {
      title: "Brand Name Generator for Drugs",
      image: require('../assets/images/Brand Name generator.png'),
      tagline: "GRU-based NLP model for pharmaceutical brand name generation",
      badge: "💊",
      genres: ["Python", "TensorFlow", "GRU", "NLP"],
      synopsis: "Built a TensorFlow GRU model to generate novel, legally and phonetically viable brand names for drugs. Achieved 90% accuracy.",
      links: []
    },
    {
      title: "VitaGuardian",
      image: require('../assets/images/Vitaguardian.png'),
      tagline: "AI-powered disaster preparedness and response assistant",
      badge: "🧭",
      genres: ["LangChain", "LangGraph", "GPT-4o-mini", "FEMA", "NOAA", "Azure Maps"],
      synopsis: "Designed a multi-agent system using LangChain, LangGraph, and GPT-4o-mini to assist during disasters by suggesting shelters, routes, and safety plans. Integrated FEMA, NOAA, Red Cross, and Azure Maps data for live decision-making.",
      links: []
    },
    {
      title: "FinQuest",
      image: require('../assets/images/FinQUest_img.png'),
      tagline: "Gamified financial wellness companion for students",
      badge: "💰",
      genres: ["React", "FastAPI", "Gemini API", "Nessie API"],
      synopsis: "Developed a web app to unify finances, send smart payment reminders, and visualize savings as digital gardens.",
      links: [
        {
          title: "Devpost",
          url: "https://devpost.com/software/finquest-utsoek"
        },
        {
          title: "GitHub",
          url: "https://github.com/Mokshitha4/VTFinQuest"
        }
      ]
    },
    {
      title: "Aura",
      image: require('../assets/images/AUra_img.png'),
      tagline: "Proactive AI assistant for contextual browsing",
      badge: "🪶",
      genres: ["Browser Extension", "Contextual AI", "LangChain"],
      synopsis: "Browser extension that builds a \"Living Knowledge Graph\" of user context and web interactions. Provides contextual chat about any webpage and evolves with the user over time.",
      links: [
        {
          title: "GitHub",
          url: "https://github.com/Mokshitha4/Aura"
        }
      ]
    }
  ],
  
  hackathons: [
    {
      title: "Hexathon: Code for Planet",
      image: require('../assets/images/Hacakthons Background.png'),
      badge: "🏆",
      tagline: "Sustainable manufacturing through AI — 24-hour challenge",
      genres: ["AI", "Sustainability", "Team Enigma", "Hexagon"],
      synopsis: "Secured 1st position in Hexagon's global 24-hour hackathon Hexathon: Code for Planet 2023, outperforming 1,600+ teams with the four-member team Enigma. Developed an AI-driven solution for sustainable manufacturing, leveraging data-driven insights to optimize resource use and reduce waste.",
      episodes: [
        {
          title: "The Challenge",
          description: "Create innovative solutions for sustainable manufacturing within a 24-hour timeframe."
        },
        {
          title: "The Solution",
          description: "Developed an AI system that optimizes resource allocation and reduces waste in manufacturing processes."
        },
        {
          title: "The Result",
          description: "1st Place Winner out of 1,600+ teams globally."
        }
      ]
    },
    {
      title: "Smart India Hackathon",
      image: require('../assets/images/Hacakthons Background.png'),
      badge: "🏅",
      tagline: "Building social impact with technology",
      genres: ["HTML", "CSS", "JavaScript", "PostgreSQL", "GovTech"],
      synopsis: "Led a four-member team to develop a web portal for pension eligibility identification in India, improving access to benefits for underserved communities. Used HTML, CSS, JavaScript, and PostgreSQL for implementation. Selected as a National Finalist from a pool of over 20,000 idea submissions.",
      episodes: [
        {
          title: "The Challenge",
          description: "Create a system to improve pension benefits accessibility for underserved communities."
        },
        {
          title: "The Solution",
          description: "Developed a user-friendly web portal that simplifies the eligibility identification process."
        },
        {
          title: "The Result",
          description: "National Finalist from over 20,000 submissions across India."
        }
      ]
    },
    {
      title: "VitaGuardian @ Hackathon",
      image: require('../assets/images/Vitaguardian.png'),
      badge: "🧭",
      tagline: "Real-time disaster navigation and safety intelligence",
      genres: ["Agents", "Routing", "Disaster Tech"],
      synopsis: "Built a multi-agent AI system that plans evacuation routes, suggests nearby shelters, and provides wellness guidance during natural disasters. Integrated live data from FEMA, NOAA, Red Cross, and Azure Maps for context-aware responses.",
      episodes: [
        {
          title: "The Challenge",
          description: "Create a solution to help people navigate safely during disaster situations."
        },
        {
          title: "The Solution",
          description: "Developed a multi-agent system that provides real-time guidance using multiple data sources."
        },
        {
          title: "The Features",
          description: "Route planning, shelter suggestions, and wellness guidance in disaster contexts."
        }
      ]
    },
    {
      title: "FinQuest @ Hackathon",
      image: require('../assets/images/FinQUest_img.png'),
      badge: "💰",
      tagline: "Gamifying financial wellness for students",
      genres: ["FinTech", "AI", "FastAPI", "React"],
      synopsis: "Developed FinQuest, a gamified finance companion that helps students manage expenses, avoid late fees, and visualize progress through a digital \"growth garden.\" Focused on motivation and financial literacy through React, FastAPI, and AI-driven insights.",
      episodes: [
        {
          title: "The Challenge",
          description: "Help students better manage their finances through engaging interfaces."
        },
        {
          title: "The Solution",
          description: "Created a gamified app that visualizes savings as a digital garden that grows with progress."
        },
        {
          title: "The Impact",
          description: "Provides students with motivation to save money and avoid late fees through visual feedback."
        }
      ]
    }
  ],
  
  research: [
    {
      title: "AI-Assisted Learning System for Program Diagrams",
      image: require('../assets/images/Diagram to code.png'),
      badge: "🎯",
      tagline: "Turning student-drawn diagrams into runnable code",
      genres: ["NLP", "Education", "AI-Assisted Learning"],
      synopsis: "Developing a system that parses hand-drawn program diagrams and generates code, while identifying ambiguities using token-level confidence scores for better learning support.",
      episodes: [
        {
          title: "Research Goal",
          description: "Create a bridge between visual learning and code implementation for computer science education."
        },
        {
          title: "Methodology",
          description: "Using computer vision and NLP to interpret student diagrams and provide educational feedback."
        },
        {
          title: "Current Progress",
          description: "Working on confidence score metrics for ambiguity identification in diagram interpretation."
        }
      ]
    },
    {
      title: "Fish-Cutting Robot with 3D Reconstruction",
      image: require('../assets/images/Fish cutting robot.png'),
      badge: "🐟",
      tagline: "Computer vision and 3D reconstruction for industrial automation",
      genres: ["Computer Vision", "3D Reconstruction", "Robotics"],
      synopsis: "Designing a robot that optimizes fish-cutting precision by using 3D reconstruction to analyze geometry and depth for precise cutting paths.",
      episodes: [
        {
          title: "Research Problem",
          description: "Improve precision in industrial fish processing through advanced computer vision."
        },
        {
          title: "Technical Approach",
          description: "Implementing 3D reconstruction algorithms to create detailed models for robotic path planning."
        },
        {
          title: "Industrial Application",
          description: "Working toward a system that increases efficiency and reduces waste in food processing."
        }
      ]
    },
    {
      title: "Identifying Safety-Critical Layers in Vision-Language Models",
      image: require('../assets/images/LVM safety layers.png'),
      badge: "🧠",
      tagline: "Analyzing and aligning internal VLM layers for safer outputs",
      genres: ["Vision-Language Models", "Safety Alignment", "Activation Divergence"],
      synopsis: "Vision-Language Models (VLMs) demonstrate powerful multimodal understanding but are vulnerable when handling unsafe or adversarial inputs. This research identifies and manipulates safety-critical layers through inference-time interventions—without retraining—to improve robustness and alignment.",
      episodes: [
        {
          title: "Research Objective",
          description: "Identify safety-critical layers in VLMs and develop methods to improve robustness."
        },
        {
          title: "Methodology",
          description: "Using Activation Divergence Analysis to locate sensitive layers and analyze parameter scaling."
        },
        {
          title: "Significance",
          description: "Working toward safer AI systems that can resist adversarial inputs without complete retraining."
        }
      ]
    }
  ],
  
  personal: [
    {
      title: "Painting Portfolio",
      image: require('../assets/images/Art_img.png'),
      badge: "🎨",
      tagline: "Acrylic and color-study artworks",
      genres: ["Art", "Creativity", "Expression"],
      synopsis: "Acrylic and color-study artworks exploring emotion through texture and color.",
      episodes: [
        {
          title: "Color Studies Series",
          description: "Exploring the impact of color combinations on emotional response in abstract compositions."
        },
        {
          title: "Texture Experiments",
          description: "Mixed media works focusing on the interplay between different textures and materials."
        }
      ]
    },
    {
      title: "Trekking Diaries",
      image: require('../assets/images/Nature_img.png'),
      badge: "🥾",
      tagline: "Trail journals and photographs from personal hikes",
      genres: ["Adventure", "Nature", "Photography"],
      synopsis: "Trail journals and photographs from personal hikes and explorations.",
      episodes: [
        {
          title: "Mountain Trail Expeditions",
          description: "Documentation of challenging mountain trails and the unique ecosystems encountered."
        },
        {
          title: "Urban Nature Walks",
          description: "Finding and documenting natural spaces hidden within urban environments."
        }
      ]
    },
    {
      title: "Soundtrack of Coding",
      image: require('../assets/images/Sound track.png'),
      badge: "🎧",
      tagline: "Curated playlists that fuel late-night coding",
      genres: ["Music", "Productivity", "Creativity"],
      synopsis: "Curated playlists that fuel late-night coding and creativity.",
      episodes: [
        {
          title: "Focus Flow: Deep Work Sessions",
          description: "Ambient and instrumental tracks designed to enhance concentration during complex problem-solving."
        },
        {
          title: "Coding Beats: Rhythm Programming",
          description: "Energetic electronic music that maintains momentum during marathon coding sessions."
        }
      ]
    }
  ]
};

export default portfolioData;