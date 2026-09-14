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
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Good" },
  ],
};

// كل مشروع هلق عندو صفحة تفصيلية خاصة فيه (زي بروتوفايلات الـ UI/UX).
// لإضافة صور حقيقية: حطي الصورة جوا public/ وبدّلي
// <DeviceMockup label="..." pattern="..." /> بـ <img src="/اسم-الصورة.png" className="mockup" />
// بأي مكان شايفاه — بالكارد الرئيسي (Work.jsx) أو بالـ gallery تحت.

export const projects = [
  {
    id: "transgo",
    order: "01",
    name: "TransGo",
    subtitle: "Transportation Management System",
    category: "Dashboard System",
    duration: "Ongoing",
    role: "Frontend Developer",
    tags: ["React", "JavaScript", "Bootstrap", "REST API", "Google Maps"],
    tools: ["React.js", "JavaScript", "Bootstrap", "Axios", "REST API", "Google Maps API", "Git / GitHub"],
    summary:
      "A web-based transportation management system for managing trips, bookings, reports, notifications, and live trip tracking.",
    overview:
      "TransGo is a transportation management platform that lets an operations team manage trips, bookings, drivers, and reporting from a central dashboard, with live trip tracking for both riders and dispatchers. It's a collaborative graduation project with a shared codebase — I worked on the frontend admin panel: the interfaces an operator actually uses day to day.",
    context: "Collaborative graduation project — shared codebase, private repository.",
    highlights: [
      "Built the notifications system with three modes: broadcast, geo-targeted, and direct",
      "Built financial reporting pages: revenue reports and driver earnings breakdowns",
      "Built the complaints tracking report and list views",
      "Implemented server-side filtering and polling for live data updates",
      "Integrated Google Maps for live trip tracking and route visualization",
      "Leading Arabic/English localization of the admin panel with react-i18next",
    ],
    problem:
      "An operations team needs to see what's happening across trips, bookings, and drivers in real time — without digging through raw data or refreshing pages manually. Reports also needed to be readable at a glance, not just accurate.",
    solutionSteps: [
      {
        title: "Live dashboard views",
        description: "Server-side filtering plus polling so trip and booking data stays current without a manual refresh.",
      },
      {
        title: "Notification system",
        description: "Three distinct notification types (broadcast, geo-targeted, direct) so operators reach exactly the right riders or drivers.",
      },
      {
        title: "Financial reporting",
        description: "Revenue and driver-earnings reports built for quick scanning, not just raw tables.",
      },
      {
        title: "Live map tracking",
        description: "Google Maps integration to visualize driver location and trip routes in real time.",
      },
    ],
    gallery: [
      { label: "Dashboard", pattern: "dashboard" },
      { label: "Trips management", pattern: "map" },
      { label: "Bookings", pattern: "list" },
      { label: "Financial reports", pattern: "cards" },
      { label: "Notifications", pattern: "list" },
      { label: "Live tracking", pattern: "map" },
    ],
    liveDemo: "", // ضيفي رابط الـ deploy هون إذا عملتيه
    github: "", // اتركيه فاضي لأنو الريبو خاص
  },
  {
    id: "beauty-center",
    order: "02",
    name: "Beauty Center",
    subtitle: "Responsive Business Website",
    category: "Business Website",
    duration: "Solo project",
    role: "Frontend Developer",
    tags: ["React", "JavaScript", "CSS3"],
    tools: ["React.js", "JavaScript", "CSS3"],
    summary:
      "A responsive website for a beauty center — service browsing and a clean, mobile-first, booking-oriented layout.",
    overview:
      "A responsive marketing website for a beauty center, built solo end to end — from component structure to styling. The focus was a clean, mobile-first layout that makes it easy to browse services and get in touch.",
    context: "Solo project.",
    highlights: [
      "Designed and built the entire frontend independently",
      "Mobile-first, responsive layout across all screen sizes",
      "Clean service-browsing structure aimed at conversion",
    ],
    problem:
      "A small business needed an online presence that felt professional on mobile first, since most visitors would land on it from Instagram or WhatsApp links.",
    solutionSteps: [
      {
        title: "Mobile-first layout",
        description: "Designed for small screens first, then scaled up, since that's where most traffic comes from.",
      },
      {
        title: "Service showcase",
        description: "A clean, scannable layout for browsing services without clutter.",
      },
    ],
    gallery: [
      { label: "Home page", pattern: "cards" },
      { label: "Services", pattern: "list" },
    ],
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
