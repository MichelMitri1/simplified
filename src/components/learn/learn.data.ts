export type LearnItem = {
  id: string;
  title: string;
  meta?: string;
  href: string;
  image: string;
  badge?: string;
};

const u = (q: string) =>
  `https://images.unsplash.com/${q}&auto=format&fit=crop&w=1200&q=80`;

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const toHref = (title: string) => `/learn/${slugify(title)}`;

export const learnData: {
  featured: LearnItem;
  secondary: LearnItem[];
  engineering: LearnItem[];
  qualityAssurance: LearnItem[];
  uxDesign: LearnItem[];
  careerAdvice: LearnItem[];
  careerPath: LearnItem[];
} = {
  featured: {
    id: "f1",
    title: "The Best AI Tools for Productivity",
    meta: "",
    href: toHref("The Best AI Tools for Productivity"),
    image: u("photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3"),
    badge: "FEATURED",
  },
  secondary: [
    {
      id: "s1",
      title: "How to Become an AI Automation Engineer",
      meta: "AI • 6 min",
      href: toHref("How to Become an AI Automation Engineer"),
      image: u("photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"),
    },
    {
      id: "s2",
      title: "The Best Generative AI Tools for 2025",
      meta: "AI • 8 min",
      href: toHref("The Best Generative AI Tools for 2025"),
      image: u("photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3"),
    },
  ],

  engineering: [
    {
      id: "d1",
      title: "The Best Programming Languages to Learn in 2025",
      meta: "SOFTWARE ENGINEERING • 10 min",
      href: toHref("The Best Programming Languages to Learn in 2025"),
      image: u("photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3"),
    },
    {
      id: "d2",
      title: "What Skills Do You Need to Become a Software Engineer in 2025",
      meta: "SOFTWARE ENGINEERING • 7 min",
      href: toHref(
        "What Skills Do You Need to Become a Software Engineer in 2025"
      ),
      image: u("photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3"),
    },
    {
      id: "d3",
      title: "What Degree Do You Need to Become a Software Engineer",
      meta: "SOFTWARE ENGINEERING • 5 min",
      href: toHref("What Degree Do You Need to Become a Software Engineer"),
      image: u("photo-1508780709619-79562169bc64?ixlib=rb-4.0.3"),
    },
    {
      id: "d5",
      title: "How to Become a Front-End Developer",
      meta: "SOFTWARE ENGINEERING • 8 min",
      href: toHref("How to Become a Front-End Developer"),
      image: u("photo-1523475472560-d2df97ec485c?ixlib=rb-4.0.3"),
    },
    {
      id: "d6",
      title: "How Hard Is Software Engineering?",
      meta: "SOFTWARE ENGINEERING • 6 min",
      href: toHref("How Hard Is Software Engineering?"),
      image: u("photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3"),
    },
    {
      id: "d7",
      title: "The Entry-Level Software Engineer Salary You Can Earn",
      meta: "SOFTWARE ENGINEERING • 6 min",
      href: toHref("The Entry-Level Software Engineer Salary You Can Earn"),
      image: u("photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3"),
    },
    {
      id: "d9",
      title: "How to Become a Full-Stack Developer",
      meta: "SOFTWARE ENGINEERING • 11 min",
      href: toHref("How to Become a Full-Stack Developer"),
      image: u("photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3"),
    },
    {
      id: "d10",
      title: "Is Data Science a Good Career Choice in 2025?",
      meta: "DATA SCIENCE • 6 min",
      href: toHref("Is Data Science a Good Career Choice in 2025?"),
      image: u("photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3"),
    },
    {
      id: "d11",
      title: "How to Become a Data Engineer: Your Complete Career Guide for 2025",
      meta: "BI ANALYTICS • 8 min",
      href: toHref("How to Become a Data Engineer: Your Complete Career Guide for 2025"),
      image: u("photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3"),
    },
    {
      id: "d12",
      title: "The 9 Best Programming Languages to Learn in 2026",
      meta: "SOFTWARE ENGINEERING • 10 min",
      href: toHref("The 9 Best Programming Languages to Learn in 2026"),
      image: u("photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"),
    },
    {
      id: "d13",
      title: "How Hard is It to Learn HTML? Let's Break The Myths",
      meta: "SOFTWARE ENGINEERING • 7 min",
      href: toHref("How Hard is It to Learn HTML? Let's Break The Myths"),
      image: u("photo-1507209696998-3c532be9b2b5?ixlib=rb-4.0.3"),
    },
    {
      id: "d14",
      title: "Web Developer vs. Software Developer: Demystifying Two Great Tech Careers",
      meta: "SOFTWARE ENGINEERING • 8 min",
      href: toHref("Web Developer vs. Software Developer: Demystifying Two Great Tech Careers"),
      image: u("photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3"),
    },
    {
      id: "d15",
      title: "Full-Stack Developer vs. Software Engineer: Unraveling the Differences",
      meta: "SOFTWARE ENGINEERING • 9 min",
      href: toHref("Full-Stack Developer vs. Software Engineer: Unraveling the Differences"),
      image: u("photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"),
    },
    {
      id: "d16",
      title: "Medical Coding for Nurses",
      meta: "SOFTWARE ENGINEERING • 6 min",
      href: toHref("Medical Coding for Nurses"),
      image: u("photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3"),
    },
    {
      id: "d17",
      title: "The How and Why of Stunning CSS Art (with Examples)",
      meta: "SOFTWARE ENGINEERING • 7 min",
      href: toHref("The How and Why of Stunning CSS Art (with Examples)"),
      image: u("photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"),
    },
    {
      id: "d18",
      title: "Java vs JavaScript: What's the Difference and Which Language Should You Learn?",
      meta: "SOFTWARE ENGINEERING • 8 min",
      href: toHref("Java vs JavaScript: What's the Difference and Which Language Should You Learn?"),
      image: u("photo-1489749798305-4fea3ba63d60?ixlib=rb-4.0.3"),
    },
    {
      id: "d19",
      title: "How Long Does It Take to Learn Coding from Scratch?",
      meta: "SOFTWARE ENGINEERING • 7 min",
      href: toHref("How Long Does It Take to Learn Coding from Scratch?"),
      image: u("photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3"),
    },
    {
      id: "d20",
      title: "Becoming a React Engineer",
      meta: "SOFTWARE ENGINEERING • 8 min",
      href: toHref("Becoming a React Engineer"),
      image: u("photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3"),
    },
    {
      id: "d21",
      title: "Everything You Need to Know About Entry-Level Data Scientist Salaries",
      meta: "DATA SCIENCE • 9 min",
      href: toHref("Everything You Need to Know About Entry-Level Data Scientist Salaries"),
      image: u("photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3"),
    },
    {
      id: "d22",
      title: "Tools of the Trade: Do You Need the Best Laptop to Succeed in Programming?",
      meta: "SOFTWARE ENGINEERING • 8 min",
      href: toHref("Tools of the Trade: Do You Need the Best Laptop to Succeed in Programming?"),
      image: u("photo-1484788984921-03950022c9ef?ixlib=rb-4.0.3"),
    },
    {
      id: "d23",
      title: "Your Ultimate Guide to Breaking Into the Game Development Industry",
      meta: "SOFTWARE ENGINEERING • 10 min",
      href: toHref("Your Ultimate Guide to Breaking Into the Game Development Industry"),
      image: u("photo-1511512578047-dfb367046420?ixlib=rb-4.0.3"),
    },
  ],

  qualityAssurance: [
    {
      id: "m2",
      title: "How to Become a QA Engineer in 2025",
      meta: "QUALITY ASSURANCE • 6 min",
      href: toHref("How to Become a QA Engineer in 2025"),
      image: u("photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"),
    },
    {
      id: "m3",
      title:
        "The Entry-Level Quality Assurance Salaries That Bootcamp Grads Earn",
      meta: "QUALITY ASSURANCE • 7 min",
      href: toHref(
        "The Entry-Level Quality Assurance Salaries That Bootcamp Grads Earn"
      ),
      image: u("photo-1496307042754-b4aa456c4a2d?ixlib=rb-4.0.3"),
    },
    {
      id: "m4",
      title: "The Quality Assurance Engineer Skills You Need in 2025",
      meta: "QUALITY ASSURANCE • 5 min",
      href: toHref("The Quality Assurance Engineer Skills You Need in 2025"),
      image: u("photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3"),
    },
    {
      id: "m5",
      title: "Is Quality Assurance a Good Career?",
      meta: "QUALITY ASSURANCE • 6 min",
      href: toHref("Is Quality Assurance a Good Career?"),
      image: u("photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3"),
    },
  ],

  uxDesign: [
    {
      id: "b1",
      title: "How to Become a UX Designer in 2025",
      meta: "UX / UI DESIGN • 12 min",
      href: toHref("How to Become a UX Designer in 2025"),
      image: u("photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3"),
    },
    {
      id: "b2",
      title: "Why UX/UI Design Is the Career for Artists",
      meta: "UX / UI DESIGN • 9 min",
      href: toHref("Why UX/UI Design Is the Career for Artists"),
      image: u("photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3"),
    },
    {
      id: "b3",
      title: "How Long Does It Take to Learn CSS",
      meta: "CSS • 7 min",
      href: toHref("How Long Does It Take to Learn CSS"),
      image: u("photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3"),
    },
    {
      id: "b4",
      title:
        "Your Guide to Learning How to Code: Unleash Your Coding Potential",
      meta: "STUDENT STORIES • 11 min",
      href: toHref(
        "Your Guide to Learning How to Code: Unleash Your Coding Potential"
      ),
      image: u("photo-1553877522-43269d4ea984?ixlib=rb-4.0.3"),
    },
  ],

  careerAdvice: [
    {
      id: "n1",
      title: "How to Start a Tech Career with No Experience",
      meta: "STUDENT STORIES • 8 min",
      href: toHref("How to Start a Tech Career with No Experience"),
      image: u("photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3"),
    },
    {
      id: "n2",
      title: "8 Signs of a Toxic Workplace",
      meta: "STUDENT STORIES • 10 min",
      href: toHref("8 Signs of a Toxic Workplace"),
      image: u("photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3"),
    },
    {
      id: "n4",
      title: "How to Answer “Why Should We Hire You?”",
      meta: "CAREER ADVICE • 5 min",
      href: toHref("How to Answer “Why Should We Hire You?”"),
      image: u("photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3"),
    },
    {
      id: "n3",
      title: "The Best Remote Jobs for Stay-at-Home Moms",
      meta: "CAREER ADVICE • 6 min",
      href: toHref("The Best Remote Jobs for Stay-at-Home Moms"),
      image: u("photo-1461342249744-29a57cc8a561?ixlib=rb-4.0.3"),
    },
    {
      id: "n5",
      title: "How to Recover from Burnout",
      meta: "CAREER ADVICE • 7 min",
      href: toHref("How to Recover from Burnout"),
      image: u("photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3"),
    },
    {
      id: "n6",
      title: "How to Overcome Imposter Syndrome in Your Career",
      meta: "CAREER CHANGE • 6 min",
      href: toHref("How to Overcome Imposter Syndrome in Your Career"),
      image: u("photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3"),
    },
    {
      id: "n7",
      title: "Dignity in the Workplace: Ditch Your Bad Job, Even if It Pays Well",
      meta: "CAREER ADVICE • 8 min",
      href: toHref("Dignity in the Workplace: Ditch Your Bad Job, Even if It Pays Well"),
      image: u("photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"),
    },

  ],

  careerPath: [
    {
      id: "t1",
      title: "Easy Career Changes That Pay Well",
      meta: "CAREER CHANGE • 10 min",
      href: toHref("Easy Career Changes That Pay Well"),
      image: u("photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3"),
    },
    {
      id: "t2",
      title: "What to Do If You Hate Your Job",
      meta: "CAREER CHANGE • 7 min",
      href: toHref("What to Do If You Hate Your Job"),
      image: u("photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3"),
    },
    {
      id: "t4",
      title: "Tech Jobs That You Don’t Think Are Tech Jobs",
      meta: "CAREER PATH • 8 min",
      href: toHref("Tech Jobs That You Don’t Think Are Tech Jobs"),
      image: u("photo-1492724724894-7464c27d0ceb?ixlib=rb-4.0.3"),
    },    {
      id: "t3",
      title: "9 Jobs That Make $80K a Year (or More!)",
      meta: "CAREER PATH • 6 min",
      href: toHref("9 Jobs That Make $80K a Year (or More!)"),
      image: u("photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"),
    },
    {
      id: "t5",
      title: "Choosing Tech Over the Trades: Why It's the Right Idea",
      meta: "CAREER PATH • 7 min",
      href: toHref("Choosing Tech Over the Trades: Why It's the Right Idea"),
      image: u("photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3"),
    },
    {
      id: "t6",
      title: "11 Signs It's Time to Change Careers",
      meta: "CAREER PATH • 8 min",
      href: toHref("11 Signs It's Time to Change Careers"),
      image: u("photo-1552664730-d307ca884978?ixlib=rb-4.0.3"),
    },
    {
      id: "t7",
      title: "Career Plateau: 7 Signs You're Stuck and How to Break Free",
      meta: "CAREER PATH • 9 min",
      href: toHref("Career Plateau: 7 Signs You're Stuck and How to Break Free"),
      image: u("photo-1552664730-d307ca884978?ixlib=rb-4.0.3"),
    },
    {
      id: "t8",
      title: "How to Change Careers at 50",
      meta: "CAREER PATH • 7 min",
      href: toHref("How to Change Careers at 50"),
      image: u("photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"),
    },
    {
      id: "t9",
      title: "Should I Quit My Job: Signs It's Time (And Red Flags to Never Ignore)",
      meta: "CAREER PATH • 8 min",
      href: toHref("Should I Quit My Job: Signs It's Time (And Red Flags to Never Ignore)"),
      image: u("photo-1552664730-d307ca884978?ixlib=rb-4.0.3"),
    },
    {
      id: "t10",
      title: "10 Tech Jobs for Ex-Teachers",
      meta: "CAREER PATH • 7 min",
      href: toHref("10 Tech Jobs for Ex-Teachers"),
      image: u("photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3"),
    },
    {
      id: "t11",
      title: "What to Do When a Career in Entertainment Loses its Shine",
      meta: "CAREER PATH • 6 min",
      href: toHref("What to Do When a Career in Entertainment Loses its Shine"),
      image: u("photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3"),
    },
    {
      id: "t12",
      title: "What to Do if You've Hit a Professional Ceiling",
      meta: "CAREER PATH • 7 min",
      href: toHref("What to Do if You've Hit a Professional Ceiling"),
      image: u("photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3"),
    },
  ],
};

// Helper to reuse existing engineering cards where available
const pickEngineeringItem = (
  title: string,
  date: string,
  imagePath: string,
  category: string = "SOFTWARE ENGINEERING"
): LearnItem => {
  const existing = learnData.engineering.find((item) => item.title === title);
  if (existing) return existing;

  return {
    id: `eng-${slugify(title)}`,
    title,
    meta: `${category.toUpperCase()} • ${date}`,
    href: toHref(title),
    image: u(imagePath),
  };
};

// Engineering & Data "See all" pagination data (Page 1 - All items)
const engineeringPage1: LearnItem[] = [
  pickEngineeringItem(
    "The Best Programming Languages to Learn in 2025",
    "Dec 9, 2025",
    "photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "What Skills Do You Need to Become a Software Engineer in 2025",
    "Nov 25, 2025",
    "photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "What Degree Do You Need to Become a Software Engineer",
    "Nov 17, 2025",
    "photo-1508780709619-79562169bc64?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Everything You Need to Know About Entry-Level Data Scientist Salaries",
    "Oct 24, 2025",
    "photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "How to Become a Full-Stack Developer",
    "Oct 23, 2025",
    "photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Is Data Science a Good Career Choice in 2025?",
    "Oct 10, 2025",
    "photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "How to Become a Data Engineer: Your Complete Career Guide for 2025",
    "Sep 18, 2025",
    "photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "How Hard Is Software Engineering?",
    "Nov 6, 2025",
    "photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "The Entry-Level Software Engineer Salary You Can Earn",
    "Oct 24, 2025",
    "photo-1545239351-1141bd82e8a6?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "The 9 Best Programming Languages to Learn in 2026",
    "Dec 9, 2025",
    "photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3"
  ),
];

const engineeringPage2Provided: LearnItem[] = [
  pickEngineeringItem(
    "How Hard is It to Learn HTML? Let's Break The Myths",
    "Dec 5, 2025",
    "photo-1556761175-4b46a572b786?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Full-Stack Developer vs. Software Engineer: Unraveling the Differences",
    "Jan 15, 2024",
    "photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Web Developer vs. Software Developer: Demystifying Two Great Tech Careers",
    "Dec 29, 2023",
    "photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Your Ultimate Guide to Breaking into the Game Development Industry",
    "Nov 10, 2023",
    "photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "The How and Why of Stunning CSS Art (with Examples)",
    "Aug 17, 2023",
    "photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Medical Coding for Nurses",
    "Jul 11, 2023",
    "photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Java vs JavaScript: What's the Difference and Which Language Should You Learn?",
    "Jun 19, 2023",
    "photo-1489749798305-4fea3ba63d60?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Tools of the Trade -- Do You Need the \"Best\" Laptop to Succeed in Programming?",
    "Jun 2, 2023",
    "photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "How Long Does It Take to Learn Coding from Scratch?",
    "May 24, 2023",
    "photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3"
  ),
  pickEngineeringItem(
    "Becoming a React Engineer",
    "May 17, 2023",
    "photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3"
  ),
];

// Add any existing engineering items not explicitly listed to the end
const engineeringExtras = learnData.engineering.filter(
  (item) =>
    ![...engineeringPage1, ...engineeringPage2Provided].some(
      (p) => p.title === item.title
    )
);

const engineeringAll = [
  ...engineeringPage1,
  ...engineeringPage2Provided,
  ...engineeringExtras,
];

export const engineeringPages: LearnItem[][] = [engineeringAll];

// Helper to reuse existing QA cards where available
const pickQAItem = (
  title: string,
  date: string,
  imagePath: string,
  category: string = "QUALITY ASSURANCE"
): LearnItem => {
  const existing = learnData.qualityAssurance.find((item) => item.title === title);
  if (existing) return existing;

  return {
    id: `qa-${slugify(title)}`,
    title,
    meta: `${category.toUpperCase()} • ${date}`,
    href: toHref(title),
    image: u(imagePath),
  };
};

// Quality Assurance "See all" pagination data (Page 1 + Page 2)
const qaPage1: LearnItem[] = [
  pickQAItem(
    "The Entry-Level Quality Assurance Salaries That Bootcamp Grads Earn",
    "May 20, 2024",
    "photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3"
  ),
  pickQAItem(
    "The Quality Assurance Engineer Skills You Need in 2025",
    "Feb 29, 2024",
    "photo-1556761175-4b46a572b786?ixlib=rb-4.0.3"
  ),
  pickQAItem(
    "Is Quality Assurance a Good Career?",
    "Feb 9, 2024",
    "photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3"
  ),
  pickQAItem(
    "How to Become a QA Engineer in 2025",
    "2025",
    "photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
  ),
];

// Add any existing QA items not explicitly listed
const qaExtras = learnData.qualityAssurance.filter(
  (item) => !qaPage1.some((p) => p.title === item.title)
);

export const qaPages: LearnItem[][] = [qaPage1, qaExtras];

// Career Advice pagination data
const careerAdvicePage1: LearnItem[] = learnData.careerAdvice.concat([
  {
    id: "b5",
    title: "Why UX/UI Design is the Career for Artists",
    meta: "UX / UI DESIGN • 8 min",
    href: toHref("Why UX/UI Design is the Career for Artists"),
    image: u("photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"),
  },
  {
    id: "n3",
    title: "The Best Remote Jobs for Stay-at-Home Moms",
    meta: "CAREER ADVICE • 6 min",
    href: toHref("The Best Remote Jobs for Stay-at-Home Moms"),
    image: u("photo-1461342249744-29a57cc8a561?ixlib=rb-4.0.3"),
  },
  {
    id: "n5",
    title: "How to Recover from Burnout",
    meta: "CAREER ADVICE • 7 min",
    href: toHref("How to Recover from Burnout"),
    image: u("photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3"),
  },
  {
    id: "n6",
    title: "How to Overcome Imposter Syndrome in Your Career",
    meta: "CAREER CHANGE • 6 min",
    href: toHref("How to Overcome Imposter Syndrome in Your Career"),
    image: u("photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3"),
  },
]);

export const careerAdvicePages: LearnItem[][] = [careerAdvicePage1];

// Career Path pagination data
const careerPathPage1: LearnItem[] = learnData.careerPath.concat([
  {
    id: "t3",
    title: "9 Jobs That Make $80K a Year (or More!)",
    meta: "CAREER PATH • 6 min",
    href: toHref("9 Jobs That Make $80K a Year (or More!)"),
    image: u("photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3"),
  },
  {
    id: "t5",
    title: "What to Do if You've Hit a Professional Ceiling",
    meta: "INSIDE THE BOOTCAMP • 9 min",
    href: toHref("What to Do if You've Hit a Professional Ceiling"),
    image: u("photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3"),
  },
  {
    id: "t6",
    title: "What to Do When a Career in Entertainment Loses its Shine",
    meta: "RESOURCES • 5 min",
    href: toHref("What to Do When a Career in Entertainment Loses its Shine"),
    image: u("photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"),
  },
  {
    id: "t7",
    title: "Should I Quit My Job: Signs It's Time (And Red Flags to Never Ignore)",
    meta: "CAREER PATH • 10 min",
    href: toHref("Should I Quit My Job: Signs It's Time (And Red Flags to Never Ignore)"),
    image: u("photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3"),
  },
  {
    id: "t8",
    title: "10 Tech Jobs for Ex-Teachers",
    meta: "CAREER PATH • 8 min",
    href: toHref("10 Tech Jobs for Ex-Teachers"),
    image: u("photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"),
  },
  {
    id: "t9",
    title: "How to Change Careers at 50",
    meta: "CAREER CHANGE • 9 min",
    href: toHref("How to Change Careers at 50"),
    image: u("photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"),
  },
  {
    id: "t10",
    title: "Career Plateau: 7 Signs You're Stuck and How to Break Free",
    meta: "CAREER PATH • 7 min",
    href: toHref("Career Plateau: 7 Signs You're Stuck and How to Break Free"),
    image: u("photo-1518770660439-4636190af475?ixlib=rb-4.0.3"),
  },
  {
    id: "t11",
    title: "11 Signs It's Time to Change Careers",
    meta: "CAREER CHANGE • 6 min",
    href: toHref("11 Signs It's Time to Change Careers"),
    image: u("photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3"),
  },
  {
    id: "t12",
    title: "Choosing Tech Over the Trades: Why It's the Right Idea",
    meta: "CAREER ADVICE • 8 min",
    href: toHref("Choosing Tech Over the Trades: Why It's the Right Idea"),
    image: u("photo-1505685296765-3a2736de412f?ixlib=rb-4.0.3"),
  },
  {
    id: "t13",
    title: "Dignity in the Workplace: Ditch Your Bad Job, Even if It Pays Well",
    meta: "CAREER ADVICE • 7 min",
    href: toHref("Dignity in the Workplace: Ditch Your Bad Job, Even if It Pays Well"),
    image: u("photo-1484788984921-03950022c9ef?ixlib=rb-4.0.3"),
  },
]);

export const careerPathPages: LearnItem[][] = [careerPathPage1];

// Archive page configs for dynamic routing

export const archiveConfigs: Record<string, unknown> = {
  "engineering-and-data": {
    title: "Engineering & Data",
    description:
      "Long-form guides, salary insights, and career roadmaps to break into software engineering, full-stack development, and data roles.",
    basePath: "/learn/engineering-and-data",
    pages: engineeringPages,
  },
  "quality-assurance": {
    title: "Quality Assurance",
    description:
      "Everything you need to know about pursuing a career in QA testing, from landing your first role to advancing as a QA engineer.",
    basePath: "/learn/quality-assurance",
    pages: qaPages,
  },
  "career-advice": {
    title: "Career Advice",
    description:
      "Expert advice on navigating your tech career, from dealing with burnout and imposter syndrome to finding remote opportunities.",
    basePath: "/learn/career-advice",
    pages: careerAdvicePages,
  },
  "career-path": {
    title: "Career Path & Resources",
    description:
      "Explore career transitions, salary insights, and resources to help you find the right path in tech.",
    basePath: "/learn/career-path",
    pages: careerPathPages,
  },
};
