// ---------------------------------------------------------------
// كل محتوى البروتوفايل هون. عدلي النصوص، الروابط، والصور من هالملف
// بس، ما في داعي تلمسي باقي ملفات الكود.
// ---------------------------------------------------------------

export const profile = {
  name: "Nawal Saleh",
  role: "Frontend Developer & Software Engineer",
  tagline:
    "I build responsive web applications with React, REST APIs, and modern frontend technologies.",
  email: "nsalh6831@gmail.com",
  phone: "0998283818",
  github: "https://github.com/nsalh6831-debug",
  linkedin: "", // ضيفي رابط LinkedIn هون لما يكون جاهز
  cvFile: "/Nawal_Saleh_CV.docx", // حطي ملف الـCV بمجلد public وبيصير جاهز للتنزيل
};

export const about = {
  text: "I'm a Software Engineering graduate focused on frontend development. I enjoy turning requirements into responsive, practical interfaces and working with APIs to build complete web experiences.",
  education: {
    school: "Damascus University",
    faculty: "Faculty of Informatics Engineering",
    years: "2021 – 2026",
  },
};

// المشروع الأول هو TransGo وعندو case study موسّعة (شوفي CaseStudy.jsx)
export const projects = [
  {
    id: "transgo",
    order: "01",
    name: "TransGo",
    subtitle: "Transportation Management System",
    tags: ["React", "JavaScript", "Bootstrap", "REST API", "Google Maps"],
    summary:
      "A web-based transportation management system for managing trips, bookings, reports, notifications, and live trip tracking.",
    role: "Frontend development and API integration, including dashboard interfaces, trip and booking management, reports, notifications, and live tracking.",
    context: "Collaborative graduation project — shared codebase, private repository.",
    stack: ["React.js", "JavaScript", "Bootstrap", "Axios", "REST API", "Google Maps API", "Git / GitHub"],
    features: [
      {
        name: "Dashboard",
        note: "Main overview screen for admins.",
      },
      {
        name: "Trips Management",
        note: "Trip creation and status handling.",
      },
      {
        name: "Bookings",
        note: "Booking list and detail views.",
      },
      {
        name: "Financial Reports",
        note: "Revenue and driver earnings reports.",
      },
      {
        name: "Notifications",
        note: "Broadcast, geo-targeted, and direct notifications.",
      },
      {
        name: "Live Tracking",
        note: "Real-time trip tracking on the map.",
      },
    ],
    liveDemo: "", // ضيفي رابط الـ deploy هون إذا عملتيه
    github: "", // اتركيه فاضي لأنو الريبو خاص
  },
  {
    id: "beauty-center",
    order: "02",
    name: "Beauty Center",
    subtitle: "Responsive Business Website",
    tags: ["React", "JavaScript", "CSS3"],
    summary:
      "A responsive website for a beauty center — service browsing and a clean, mobile-first, booking-oriented layout.",
    role: "Designed and built the entire frontend independently, from component structure to styling.",
    context: "Solo project.",
    stack: ["React.js", "JavaScript", "CSS3"],
    features: [],
    liveDemo: "",
    github: "", // حطي رابط الريبو هون لما ترفعيه
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    group: "API & Backend Integration",
    items: ["REST APIs", "Axios", "JSON", "Authentication"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    group: "Specialized",
    items: ["Google Maps API", "Live Tracking", "Polling", "Route Visualization"],
  },
];
