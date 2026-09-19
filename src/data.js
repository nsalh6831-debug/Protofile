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
    image: "/transgo/dashboard-overview.jpg",
    heroImage: "/transgo/dashboard-overview.jpg", // غيّري بس هالسطر لتبدّلي صورة الـ hero بالمشروع
    summary:
      "A web-based transportation management system for managing trips, bookings, reports, notifications, and live trip tracking.",
    overview:
      "TransGo is a transportation management platform that lets an operations team manage trips, bookings, drivers, and reporting from a central dashboard, with live trip tracking for both riders and dispatchers. It's a collaborative graduation project with a shared codebase — I worked on the frontend admin panel: the interfaces an operator actually uses day to day.",
    context: "Collaborative graduation project — shared codebase, private repository.",
    highlights: [
      "Built driver management with wallet balances, ratings, and status",
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
      { label: "Dashboard overview", category: "Dashboard", pattern: "dashboard", image: "/transgo/dashboard-overview.jpg" },

      { label: "Trips management", category: "Trips", pattern: "list", image: "/transgo/trips-list.jpg" },
      { label: "Trip filters & status", category: "Trips", pattern: "cards", image: "/transgo/trips-filters.jpg" },
      { label: "Trips list (development view)", category: "Trips", pattern: "list", image: "/transgo/trips-dev-view.jpg" },

      { label: "Bookings overview", category: "Bookings", pattern: "list", image: "/transgo/02-bookings.jpg" },
      { label: "Booking detail", category: "Bookings", pattern: "cards", image: "/transgo/booking-detail.jpg" },
      { label: "Bookings management", category: "Bookings", pattern: "list", image: "/transgo/bookings-management.jpg" },
      { label: "Bookings — filtered view", category: "Bookings", pattern: "list", image: "/transgo/bookings-list-sidebar.jpg" },
      { label: "Booking details per trip", category: "Bookings", pattern: "list", image: "/transgo/bookings-trip-detail.jpg" },

      { label: "Live trip tracking", category: "Tracking", pattern: "map", image: "/transgo/live-tracking.jpg" },
      { label: "Live tracking — before start", category: "Tracking", pattern: "map", image: "/transgo/tracking-idle.jpg" },
      { label: "Live tracking — trip start", category: "Tracking", pattern: "map", image: "/transgo/tracking-12-start.jpg" },
      { label: "Live tracking — active route", category: "Tracking", pattern: "map", image: "/transgo/tracking-12-active.jpg" },
      { label: "Live tracking — route map", category: "Tracking", pattern: "map", image: "/transgo/tracking-8-map.jpg" },
      { label: "Live tracking — moving vehicle", category: "Tracking", pattern: "map", image: "/transgo/tracking-8-moving.jpg" },

      { label: "Revenue report", category: "Reports", pattern: "dashboard", image: "/transgo/revenue-report.jpg" },
      { label: "Driver earnings", category: "Reports", pattern: "cards", image: "/transgo/driver-earnings.jpg" },
      { label: "Driver performance", category: "Reports", pattern: "dashboard", image: "/transgo/driver-performance.jpg" },
      { label: "Driver performance report", category: "Reports", pattern: "list", image: "/transgo/reports-drivers-performance.jpg" },
      { label: "App usage report", category: "Reports", pattern: "cards", image: "/transgo/app-usage-report.jpg" },

      { label: "Complaints report", category: "Complaints", pattern: "cards", image: "/transgo/complaints-report.jpg" },
      { label: "Complaints report (English)", category: "Complaints", pattern: "cards", image: "/transgo/reports-complaints-en.jpg" },

      { label: "Send notification", category: "Notifications", pattern: "list", image: "/transgo/send-notification.jpg" },
      { label: "Notifications panel", category: "Notifications", pattern: "list", image: "/transgo/notifications-panel.jpg" },
    ],
    liveDemo: "", // ضيفي رابط الـ deploy هون إذا عملتيه
    github: "", // اتركيه فاضي لأنو الريبو خاص
  },
  {
    id: "beauty-center",
    order: "02",
    name: "Masa Beauty",
    subtitle: "Beauty Center Management System",
    category: "Admin Dashboard",
    duration: "4th year ",
    role: "Full-cycle Developer",
    tags: ["React", "JavaScript", "REST API", "CSS3"],
    tools: ["React.js", "JavaScript", "CSS3", "REST API", "Git / GitHub"],
    image: "/masa-beauty/public-landing.jpg",
    heroImage: "/masa-beauty/public-landing.jpg", // غيّري بس هالسطر لتبدّلي صورة الـ hero بالمشروع
    summary:
      "A full management system for a real beauty center — staff, scheduling, payroll, bookings, and payments, built solo from requirements gathering to integration and testing.",
    overview:
      "Masa Beauty is a management dashboard built for an actual beauty center as a 4th-year project. I partnered directly with the client, gathered and analyzed their real operational requirements, then designed and built the full admin system myself — through API integration and testing — covering staff, scheduling, client sessions, and finances.",
    context: " built with a real client: requirements gathering, analysis, implementation, integration, and testing.",
    highlights: [
      "Gathered requirements directly from a real beauty center and translated them into working features",
      "Built staff management for doctors, specialists, and secretaries, including per-day work schedules",
      "Built attendance tracking with monthly/yearly present-absent breakdowns",
      "Built payroll management with salary, bonus, and discount calculations per employee",
      "Built client session tracking per service, with remaining sessions and payment progress",
      "Built a bookings system with daily booking views and status tracking",
      "Built a notifications center for new reservations and payment confirmations",
      "Built employee complaints tracking with open/resolved states",
      "Built payment methods management (cash providers and bank transfer) and admin authentication",
    ],
    problem:
      "The beauty center was running staff schedules, client sessions, and payments manually, with no single place to see who's working, who's been paid, and where each client's package of sessions stood.",
    solutionSteps: [
      {
        title: "Requirements & analysis",
        description: "Worked directly with the center's staff to map their real day-to-day workflow before writing any code.",
      },
      {
        title: "Staff & scheduling",
        description: "Doctor, specialist, and secretary profiles with per-day work schedules and attendance tracking.",
      },
      {
        title: "Client sessions & payments",
        description: "Per-client service history with session progress, remaining balances, and multiple payment methods.",
      },
      {
        title: "Operations dashboard",
        description: "Daily bookings, notifications, complaints, and payroll, all built and tested against the real API.",
      },
    ],
    gallery: [
      { label: "Landing page", category: "Public site", pattern: "cards", image: "/masa-beauty/public-landing.jpg" },
      { label: "Admin login", category: "Public site", pattern: "dashboard", image: "/masa-beauty/01-admin-login.jpg" },
     

      { label: "Employees hub", category: "Staff", pattern: "cards", image: "/masa-beauty/02-employees-hub.jpg" },
      //  { label: "Employees hub (alt)", category: "Staff", pattern: "cards", image: "/masa-beauty/employees-hub.jpg" },
      // { label: "Doctors & work days", category: "Staff", pattern: "list", image: "/masa-beauty/03-doctors-workdays.jpg" },
      { label: "Doctors & work days (alt)", category: "Staff", pattern: "list", image: "/masa-beauty/doctors-workdays.jpg" },
      { label: "Doctor profile & services", category: "Staff", pattern: "list", image: "/masa-beauty/doctor-form.jpg" },
      // { label: "Specialists", category: "Staff", pattern: "cards", image: "/masa-beauty/04-specialists.jpg" },
      { label: "Specialists (alt)", category: "Staff", pattern: "cards", image: "/masa-beauty/specialists.jpg" },
      { label: "Secretaries", category: "Staff", pattern: "cards", image: "/masa-beauty/secretaries-list.jpg" },
      { label: "Add staff form", category: "Staff", pattern: "list", image: "/masa-beauty/add-secretary-form.jpg" },

      { label: "Attendance tracking", category: "Attendance & payroll", pattern: "dashboard", image: "/masa-beauty/05-attendance.jpg" },
      // { label: "Attendance overview", category: "Attendance & payroll", pattern: "dashboard", image: "/masa-beauty/attendance-overview.jpg" },
      { label: "Attendance — collapsed view", category: "Attendance & payroll", pattern: "dashboard", image: "/masa-beauty/attendance-collapsed.jpg" },
      { label: "Staff attendance detail", category: "Attendance & payroll", pattern: "list", image: "/masa-beauty/secretary-attendance.jpg" },
      { label: "Payroll management", category: "Attendance & payroll", pattern: "dashboard", image: "/masa-beauty/11-payroll.jpg" },
      // { label: "Payroll management (alt)", category: "Attendance & payroll", pattern: "dashboard", image: "/masa-beauty/payroll-management.jpg" },
      { label: "Add salary", category: "Attendance & payroll", pattern: "list", image: "/masa-beauty/add-salary-modal.jpg" },

      { label: "Today's bookings", category: "Bookings & sessions", pattern: "list", image: "/masa-beauty/06-bookings.jpg" },
      // { label: "Today's bookings (alt)", category: "Bookings & sessions", pattern: "list", image: "/masa-beauty/todays-bookings.jpg" },
      { label: "Service sessions", category: "Bookings & sessions", pattern: "list", image: "/masa-beauty/07-sessions.jpg" },
      // { label: "Service sessions (alt)", category: "Bookings & sessions", pattern: "list", image: "/masa-beauty/service-sessions.jpg" },

      // { label: "Customer profile & history", category: "Customers", pattern: "cards", image: "/masa-beauty/08-customer-profile.jpg" },
      { label: "Customer session history", category: "Customers", pattern: "cards", image: "/masa-beauty/customer-profile.jpg" },
      { label: "Customer file", category: "Customers", pattern: "cards", image: "/masa-beauty/customer-file-top.jpg" },

      // { label: "Payment methods", category: "Payments & complaints", pattern: "cards", image: "/masa-beauty/09-payment-methods.jpg" },
      { label: "Payment methods (alt)", category: "Payments & complaints", pattern: "cards", image: "/masa-beauty/payment-methods.jpg" },
      { label: "Employee complaints", category: "Payments & complaints", pattern: "list", image: "/masa-beauty/10-complaints.jpg" },
      // { label: "Employee complaints (alt)", category: "Payments & complaints", pattern: "list", image: "/masa-beauty/complaints.jpg" },

      { label: "Notifications inbox", category: "Notifications", pattern: "list", image: "/masa-beauty/12-notifications.jpg" },
      // { label: "Notifications inbox (alt)", category: "Notifications", pattern: "list", image: "/masa-beauty/notifications-inbox.jpg" },
      { label: "Notifications feed", category: "Notifications", pattern: "cards", image: "/masa-beauty/notifications-feed.jpg" },
    ],
    liveDemo: "",
    github: "https://github.com/nsalh6831-debug/Masa-beauty-center-.git",
  },
];

// export const skills = [
//   {
//     group: "Frontend",
//     items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
//   },
//   {
//     group: "API & Backend Integration",
//     items: ["REST APIs", "Axios", "JSON", "Authentication"],
//   },
//   {
//     group: "Tools",
//     items: ["Git", "GitHub", "VS Code"],
//   },
//   {
//     group: "Specialized",
//     items: ["Google Maps API", "Live Tracking", "Polling", "Route Visualization"],
//   },
// ];
export const skills = [
  {
    group: "Frontend Development",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "React Bootstrap", "Responsive Design"],
  },
  {
    group: "API & Integration",
    items: ["REST APIs", "Axios", "JSON", "Authentication"],
  },
  {
    group: "Maps & Tracking",
    items: ["Google Maps API", "Live Tracking", "Route Visualization", "Polling"],
  },
  {
    group: "Development",
    items: ["Component-Based Architecture", "React Hooks", "State Management", "Git", "GitHub"],
  },
  {
    group: "Office & Tools",
    items: ["Microsoft Office (Word, Excel, PowerPoint)", "Google Workspace", "Data Entry & Organization", "Internet Research"],
  },
  {
    group: "Personal Skills",
    items: ["Fast Learner", "Attention to Detail", "Time Management", "Problem Solving", "Communication", "Team Collaboration"],
  },
  {
    group: "Languages & Systems",
    items: ["Comfortable Learning New Software & Systems Quickly", "Basic Reporting & Documentation"],
  },
];