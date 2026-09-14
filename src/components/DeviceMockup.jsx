// Placeholder "بلوبرنت" بدل الصورة الحقيقية. لما يجهز عندك سكرين شوت حقيقي،
// استبدلي محتوى هالكومبوننت بـ <img src="..." /> ببساطة، وسيبي باقي الكود متل ما هو.

const patterns = {
  dashboard: (
    <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
      <rect x="8" y="8" width="46" height="30" rx="2" />
      <rect x="60" y="8" width="46" height="30" rx="2" />
      <rect x="8" y="44" width="98" height="40" rx="2" />
      <path d="M14 74 L28 60 L40 68 L56 50 L70 58 L100 40" />
    </g>
  ),
  map: (
    <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
      <path d="M6 70 Q 30 20, 60 50 T 110 20" strokeDasharray="3 4" />
      <circle cx="6" cy="70" r="3" fill="currentColor" stroke="none" />
      <circle cx="110" cy="20" r="3" fill="currentColor" stroke="none" />
      <circle cx="60" cy="50" r="2.5" />
    </g>
  ),
  list: (
    <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
      <line x1="8" y1="14" x2="108" y2="14" />
      <line x1="8" y1="32" x2="108" y2="32" />
      <line x1="8" y1="50" x2="108" y2="50" />
      <line x1="8" y1="68" x2="108" y2="68" />
      <rect x="8" y="6" width="16" height="6" opacity="0.8" />
      <rect x="8" y="24" width="16" height="6" opacity="0.8" />
      <rect x="8" y="42" width="16" height="6" opacity="0.8" />
      <rect x="8" y="60" width="16" height="6" opacity="0.8" />
    </g>
  ),
  cards: (
    <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
      <rect x="8" y="10" width="30" height="24" rx="2" />
      <rect x="43" y="10" width="30" height="24" rx="2" />
      <rect x="78" y="10" width="30" height="24" rx="2" />
      <rect x="8" y="42" width="30" height="24" rx="2" />
      <rect x="43" y="42" width="30" height="24" rx="2" />
      <rect x="78" y="42" width="30" height="24" rx="2" />
    </g>
  ),
};

export default function DeviceMockup({ label, pattern = "dashboard", tall = false }) {
  return (
    <div className={`mockup ${tall ? "mockup--tall" : ""}`}>
      <span className="mockup__tick mockup__tick--tl" aria-hidden="true" />
      <span className="mockup__tick mockup__tick--br" aria-hidden="true" />
      <svg
        className="mockup__art"
        viewBox="0 0 116 90"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {patterns[pattern] || patterns.dashboard}
      </svg>
      <span className="mockup__caption">screenshot — {label}</span>
    </div>
  );
}
