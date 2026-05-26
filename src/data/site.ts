import uk from "@/assets/uk.jpg";
import canada from "@/assets/canada.jpg";
import nz from "@/assets/newzealand.jpg";
import au from "@/assets/australia.jpg";
import uae from "@/assets/uae.jpg";
import usa from "@/assets/usa.jpg";
import schengen from "@/assets/schengen.jpg";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/countries", label: "Countries" },
  // { to: "/tour-packages", label: "Tour Packages" },
  { to: "/success-stories", label: "Success Stories" },
  // { to: "/free-counselling", label: "Free Counselling" },
  { to: "/contact", label: "Contact" },
] as const;

export const COUNTRIES = [
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    image: uk,
    blurb: "World-class universities and post-study work pathways.",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    image: canada,
    blurb: "PR-friendly policies and a welcoming student climate.",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    image: nz,
    blurb: "Quality education with breathtaking landscapes.",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    image: au,
    blurb: "Top global rankings and lifestyle that students love.",
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    image: uae,
    blurb: "A global hub for work, business and family relocation.",
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    image: usa,
    blurb: "Ivy League dreams and unmatched career exposure.",
  },
  {
    slug: "schengen",
    name: "Schengen Europe",
    flag: "🇪🇺",
    image: schengen,
    blurb: "26 countries, one elegant visa — for travel done right.",
  },
] as const;

export const SERVICES = [
  {
    slug: "student-visa",
    title: "Student Visa",
    icon: "GraduationCap",
    desc: "End-to-end university shortlisting, SOP and visa filing.",
  },
  {
    slug: "visitor-visa",
    title: "Visitor Visa",
    icon: "Plane",
    desc: "Documentation, financials and interview prep that wins approvals.",
  },
  {
    slug: "tourist-visa",
    title: "Tourist Visa",
    icon: "MapPin",
    desc: "Curated itineraries paired with rock-solid visa applications.",
  },
  {
    slug: "work-visa",
    title: "Work Visa Guidance",
    icon: "Briefcase",
    desc: "Eligibility profiling for skilled and sponsored work routes.",
  },
  {
    slug: "dependent-visa",
    title: "Dependent Visa",
    icon: "Users",
    desc: "Bring family along — spouse, children and parent applications.",
  },
  {
    slug: "passport",
    title: "Passport Services",
    icon: "BookOpen",
    desc: "Fresh issue, renewal, tatkal and re-issue, fully assisted.",
  },
  {
    slug: "tour-packages",
    title: "Tour Packages",
    icon: "Compass",
    desc: "Hand-picked international holidays with visa, stay and flights.",
  },
  // {
  //   slug: "counselling",
  //   title: "Free Counselling",
  //   icon: "MessageCircle",
  //   desc: "Honest, no-obligation profile evaluation by senior advisors.",
  // },
] as const;

export const WHY_US = [
  {
    title: "Free Counselling",
    desc: "Talk to a senior advisor before you commit. Zero pressure.",
    icon: "Sparkles",
  },
  {
    title: "Expert Guidance",
    desc: "12+ years across student, visitor and work visa categories.",
    icon: "Award",
  },
  {
    title: "High Success Rate",
    desc: "98% approval rate across our top filing categories.",
    icon: "TrendingUp",
  },
  {
    title: "Transparent Process",
    desc: "Fixed fees, clear timelines, no hidden surprises.",
    icon: "ShieldCheck",
  },
  {
    title: "Personalized Support",
    desc: "One dedicated case manager from day one to landing.",
    icon: "HeartHandshake",
  },
  {
    title: "Documentation Help",
    desc: "We draft, review and certify every single document.",
    icon: "FileCheck",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "Tell us your goal. We map the right country and visa route.",
  },
  {
    step: "02",
    title: "Profile Evaluation",
    desc: "Academics, finances and intent reviewed by senior advisors.",
  },
  {
    step: "03",
    title: "Documentation",
    desc: "We prepare SOPs, LORs, financials and supporting evidence.",
  },
  {
    step: "04",
    title: "Visa Application",
    desc: "Filing, biometrics and interview coaching — handled for you.",
  },
  {
    step: "05",
    title: "Approval & Landing",
    desc: "Pre-departure briefing, forex, SIM and accommodation help.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "DipeshKumar Kothari & Family",
    country: "USA",
    program: "Visitor Visa",
    quote:
      "Successfully obtained my USA visitor visa. Highly satisfied with the seamless process and expert guidance provided.",
  },
  {
    name: "Dr. RasheshKumar Nahar & Family",
    country: "USA",
    program: "Visitor Visa",
    quote:
      "Had a prior refusal on our USA visitor visa, but Priority Visa Consultants got it approved in just one attempt. Truly grateful for their expertise",
  },
  {
    name: "Mansi Bendre",
    country: "Canada",
    program: "PGWP",
    quote:
      "Successfully obtained my Post-Graduation Work Permit (PGWP). Very satisfied with the professional guidance provided throughout the process.",
  },
  {
    name: "Dhruv Patel",
    country: "UK",
    program: "Visitor Visa",
    quote:
      "Successfully selected for the UK Young Professionals Scheme visa. Extremely satisfied with the guidance and support throughout the process.",
  },
  {
    name: "Hitendra Patel & Family",
    country: "UK",
    program: "Visitor Visa",
    quote:
      "After two rejections from other consultancies, our visa was finally approved with Priority Visa Consultants. The professionalism and attention to detail were outstanding.",
  },
  {
    name: "Kamlesh Shah & Family",
    country: "Canada",
    program: "Visitor Visa",
    quote:
      "Received our visitor visa within 3 weeks. Thoroughly satisfied with the professionalism and service",
  },
  {
    name: "Maheshkumar Jani & Family",
    country: "UK",
    program: "Visitor Visa",
    quote:
      "Received my UK visitor visa within just 2 weeks. Impressively fast and smooth process. Highly recommend Priority Visa Consultants.",
  },
] as const;

export const TOUR_PACKAGES = [
  {
    title: "Swiss Alps & Paris",
    duration: "8 Days / 7 Nights",
    image: schengen,
    blurb: "Lucerne, Interlaken, Zurich and a romantic Parisian finale.",
  },
  {
    title: "Dubai Luxe Escape",
    duration: "5 Days / 4 Nights",
    image: uae,
    blurb: "Burj Khalifa, desert safari and a sunset yacht cruise.",
  },
  {
    title: "Highlights of Australia",
    duration: "10 Days / 9 Nights",
    image: au,
    blurb: "Sydney, Gold Coast and the Great Barrier Reef.",
  },
  {
    title: "Canadian Rockies",
    duration: "9 Days / 8 Nights",
    image: canada,
    blurb: "Banff, Lake Louise, Whistler and Vancouver.",
  },
  {
    title: "Best of New Zealand",
    duration: "8 Days / 7 Nights",
    image: nz,
    blurb: "Auckland, Queenstown, Milford Sound and Rotorua.",
  },
  {
    title: "London & Edinburgh",
    duration: "7 Days / 6 Nights",
    image: uk,
    blurb: "Royal London, Highland views and Scottish whisky country.",
  },
] as const;

export const FAQS = [
  {
    q: "How long does visa processing take?",
    a: "It varies by country and category — typically 2 to 8 weeks. We share a realistic timeline at the consultation stage.",
  },
  {
    q: "Is IELTS mandatory for every country?",
    a: "Not always. Some universities and visa categories accept PTE, Duolingo, or waive English testing for eligible profiles.",
  },
  {
    q: "What documents are required?",
    a: "Passport, academic transcripts, financials, work experience (if any), photographs, and country-specific supporting documents. We share a tailored checklist.",
  },
  {
    q: "Can dependents be applied together?",
    a: "Yes. Spouse and children visas can usually be filed alongside the primary applicant, and we handle the full family file.",
  },
  {
    q: "Which country is best for students?",
    a: "It depends on your budget, course, and long-term goals. Canada, UK and Australia lead for ROI — but our counsellor will recommend honestly.",
  },
] as const;

export const STATS = [
  { value: "20+", label: "Visa Approvals" },
  { value: "25+", label: "Happy Clients" },
  { value: "25+", label: "Countries Served" },
  { value: "5+", label: "Years Experience" },
] as const;

export const COMPANY = {
  name: "Priority Visa Consultants",
  short: "Priority Visa",
  tagline: "Your Global Journey Starts Here.",
  phone: "91 90164 23501",
  whatsapp: "9016423501",
  email: "info@priorityvisaconsultants.com",
  address:
    "704, Beside SBI ATM, Main Market, Station Road, Palej - 392220, Bharuch, Gujarat, India",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/priorityvisaconsultants/",
  facebook:
    "https://www.facebook.com/profile.php?id=61577972340228&mibextid=wwXIfr&rdid=GNJQijGnrOygIhKZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19VZhzCUNf%2F%3Fmibextid%3DwwXIfr%26ref%3D1#",
  linkedin: "https://www.linkedin.com/company/priorityvisaconsultants/",
};
