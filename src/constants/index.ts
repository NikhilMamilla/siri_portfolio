export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "profile", title: "Profile" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const heroContent = {
  name: "Sahithi Siri",
  titles: [
    "AI/ML Engineer",
    "Full-Stack Developer",
    "Data Scientist",
    "Python Developer"
  ],
  socials: [
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "GitHub", url: "#", icon: "github" },
    { name: "Instagram", url: "#", icon: "instagram" },
  ]
};

export const aboutContent = {
  title: "A Glimpse Into My Journey",
  subtitle: "Blending Technical Precision with Creative Intelligence",
  bio: [
    "I am a passionate AI/ML Engineer and Full-Stack Developer currently pursuing my B.Tech in Computer Science and Engineering at B.V. Raju Institute of Technology. My journey is defined by a relentless curiosity for how data can be transformed into intelligent solutions that solve real-world problems.",
    "With a strong foundation in Python, TensorFlow, and React, I bridge the gap between complex backend algorithms and intuitive frontend experiences. I believe that technology should not only be powerful but also accessible and human-centric.",
    "Beyond coding, I am an active contributor to technical communities and a winner of multiple hackathons, constantly pushing the boundaries of what's possible with artificial intelligence."
  ],
  highlights: [
    { label: "Location", value: "Hyderabad, India" },
    { label: "Education", value: "B.Tech in CSE " },
    { label: "Interests", value: "Building Web Apps, AI / ML" },
  ]
};

export const profileContent = {
  education: [
    {
      title: "Computer Science Engineering",
      type: "Bachelor of Technology (GPA: 9.34)",
      institution: "B V Raju Institute of Technology, Narsapur",
      dates: "Aug 2024 - Jul 2028",
      status: "In Progress"
    },
    {
      title: "Intermediate (MPC)",
      type: "Higher Secondary (Score: 966/1000)",
      institution: "Sri Chaitanya Junior College",
      dates: "2022 - 2024",
      status: "Completed"
    },
    {
      title: "Secondary Education",
      type: "Matriculation (GPA: 9.8)",
      institution: "Sri Chaitanya Techno School",
      dates: "2021 - 2022",
      status: "Completed"
    }
  ],
  certifications: [
    {
      title: "Programming Essentials in C",
      type: "Certification",
      institution: "Cisco Networking Academy",
      dates: "2024"
    },
    {
      title: "Python Essentials",
      type: "Certification",
      institution: "Cisco Networking Academy",
      dates: "2024"
    },
    {
      title: "Python for Data Science",
      type: "NPTEL Certification",
      institution: "Swayam",
      dates: "2024"
    }
  ],
  accomplishments: [
    {
      title: "Winner - 36-Hour Hackathon",
      type: "Hackathon",
      institution: "CVR College of Engineering (GDG)",
      dates: "2024"
    },
    {
      title: "Top 5% Academic Performer",
      type: "Academic Excellence",
      institution: "B V Raju Institute of Technology",
      dates: "2024"
    },
    {
      title: "Research Paper Presentation",
      type: "Conference",
      institution: "ICCPCT-2025 (IEEE Kerala)",
      dates: "Aug 2025"
    }
  ]
};

export const skillsContent = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "C", "SQL", "C++"]
  },
  {
    category: "AI & Data Science",
    skills: ["TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib", "NLP", "Scikit-Learn"]
  },
  {
    category: "Web Technologies",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "Firebase", "Vercel", "VS Code", "Postman"]
  }
];

export const projectsContent = [
  {
    name: "StudyGuardian AI",
    description: "AI-powered computer vision system for real-time study productivity monitoring. Features face tracking, eye analysis, and intent detection to optimize focus and detect distractions.",
    tags: [
      { name: "Python", color: "text-wine-light" },
      { name: "OpenCV", color: "text-gold-mist" },
      { name: "NumPy", color: "text-smoke" },
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    source_code_link: "https://github.com/Sahithi-Siri",
    live_demo_link: "#",
  },
  {
    name: "GramShiksha",
    description: "A voice-first gamified learning platform for rural students. Built with adaptive learning algorithms and offline-first capabilities to bridge the digital divide in education.",
    tags: [
      { name: "React.js", color: "text-wine-light" },
      { name: "Node.js", color: "text-gold-mist" },
      { name: "GeminiAPI", color: "text-smoke" },
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    source_code_link: "https://github.com/Sahithi-Siri",
    live_demo_link: "#",
  },
  {
    name: "NyxWell",
    description: "AI-driven mental health platform addressing youth emotional well-being. Integrates sentiment analysis and real-time guidance with NGO support systems for holistic care.",
    tags: [
      { name: "Firebase", color: "text-wine-light" },
      { name: "GrokAPI", color: "text-gold-mist" },
      { name: "NLP", color: "text-smoke" },
    ],
    image: "/nyxwell.png",
    source_code_link: "https://github.com/Sahithi-Siri",
    live_demo_link: "#",
  }
];
