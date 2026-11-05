export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  category: "nptel" | "hackerrank" | "udemy";
  date: string;
  score?: string;
  badge?: string;
  credits?: string;
  credentialId?: string;
  credentialUrl?: string;
  fileUrl: string; // path to PDF or image in public/
  fileType: "pdf" | "image";
  skillsLearned: string[];
  description: string;
}

export const CERTIFICATES: Certificate[] = [
  // =========================================================================
  // 1. NPTEL: Fundamentals of Object Oriented Programming (Elite)
  // =========================================================================
  {
    id: "nptel-oops",
    title: "Fundamentals of Object Oriented Programming",
    issuer: "NPTEL · IIT Kharagpur (Ministry of Education)",
    category: "nptel",
    date: "Jan - Apr 2026",
    score: "75% (Elite)",
    badge: "Elite Certificate",
    credits: "4 Credits Recommended",
    credentialId: "NPTEL26CS87S1252401044",
    fileUrl: "/certificates/Fundamentals of Object Oriented Programming.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Object-Oriented Design (OOD)",
      "Polymorphism & Inheritance",
      "Encapsulation & Abstraction",
      "C++ & Modern OOP Patterns",
      "Memory Management & Pointers"
    ],
    description:
      "12-week comprehensive theoretical and applied curriculum on Object-Oriented paradigms, classes, operator overloading, virtual tables, and modular software architecture certified by IIT Kharagpur."
  },

  // =========================================================================
  // 2. NPTEL: Introduction to Machine Learning
  // =========================================================================
  {
    id: "nptel-ml",
    title: "Introduction to Machine Learning",
    issuer: "NPTEL · IIT Kharagpur",
    category: "nptel",
    date: "Jul - Oct",
    score: "Certified (68%)",
    badge: "AI/ML Core",
    credits: "4 Credits Recommended",
    credentialId: "NPTEL-IIT-ML-CORE",
    fileUrl: "/certificates/Introduction To Machine Learning.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Supervised & Unsupervised Learning",
      "Linear & Logistic Regression",
      "Decision Trees & Random Forests",
      "Neural Networks & Gradient Descent",
      "Dimensionality Reduction (PCA)"
    ],
    description:
      "12-week advanced mathematical foundation in statistical learning theory, optimization loss functions, probabilistic graphical models, and algorithmic regression/classification."
  },

  // =========================================================================
  // 3. NPTEL: Programming, Data Structures and Algorithms Using Python
  // =========================================================================
  {
    id: "nptel-dsa-python",
    title: "Programming, Data Structures and Algorithms Using Python",
    issuer: "NPTEL · Chennai Mathematical Institute (CMI)",
    category: "nptel",
    date: "Jan - Mar 2026",
    score: "Certified",
    badge: "Core DSA",
    credits: "3 Credits Recommended",
    credentialId: "NPTEL26CS79S352800281",
    fileUrl: "/certificates/Programming, Data Structures and Algorithms.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Algorithm Complexity (Big-O)",
      "Sorting & Binary Search Trees",
      "Graphs, BFS & DFS Traversals",
      "Dynamic Programming (Memoization)",
      "Python Data Structures & Hash Tables"
    ],
    description:
      "8-week algorithmic rigor covering abstract data types, recursive divide-and-conquer strategies, Dijkstra shortest paths, heaps, and Python computational optimization."
  },

  // =========================================================================
  // 4. NPTEL: Database Management System
  // =========================================================================
  {
    id: "nptel-dbms",
    title: "Database Management System",
    issuer: "NPTEL · IIT Kharagpur",
    category: "nptel",
    date: "Jul - Sep",
    score: "Certified",
    badge: "Database Architecture",
    credits: "3 Credits Recommended",
    credentialId: "NPTEL-IIT-DBMS-CORE",
    fileUrl: "/certificates/Database Management System.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Relational Algebra & Tuple Calculus",
      "Schema Normalization (1NF to BCNF)",
      "ACID Transactions & Concurrency Control",
      "B+ Trees & Storage Indexing",
      "SQL Query Optimization"
    ],
    description:
      "8-week intensive database engineering course focusing on relational models, transaction isolation levels, write-ahead logging (WAL), and query plan execution."
  },

  // =========================================================================
  // 5. NPTEL: Discrete Mathematics
  // =========================================================================
  {
    id: "nptel-discrete-math",
    title: "Discrete Mathematics",
    issuer: "NPTEL · IIT Ropar",
    category: "nptel",
    date: "Jul - Oct",
    score: "Certified",
    badge: "Theoretical Computer Science",
    credits: "4 Credits Recommended",
    credentialId: "NPTEL-IIT-DM-CORE",
    fileUrl: "/certificates/Discrete Mathematics.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Propositional & Predicate Logic",
      "Graph Theory & Planarity",
      "Combinatorics & Pigeonhole Principle",
      "Recurrence Relations & Generating Functions",
      "Set Theory & Boolean Algebra"
    ],
    description:
      "12-week mathematical foundation for computational proof techniques, inductive reasoning, Eulerian/Hamiltonian graph properties, and discrete structures."
  },

  // =========================================================================
  // 6. NPTEL: Problem Solving Through Programming in C
  // =========================================================================
  {
    id: "nptel-c-programming",
    title: "Problem Solving Through Programming In C",
    issuer: "NPTEL · IIT Kharagpur",
    category: "nptel",
    date: "Jan - Apr 2026",
    score: "Certified",
    badge: "Systems Programming",
    credits: "4 Credits Recommended",
    credentialId: "NPTEL26CS53S252401378",
    fileUrl: "/certificates/Problem Solving Through Programming In C.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Pointers & Memory Allocation (malloc/free)",
      "Bitwise Operations & Structs",
      "File I/O & Stream Buffers",
      "Algorithm Step-by-Step Tracing",
      "Low-Level Debugging"
    ],
    description:
      "12-week fundamental programming course diving into hardware-level data representations, array memory layouts, pointer arithmetic, and algorithmic logic in C."
  },

  // =========================================================================
  // 7. HackerRank: Problem Solving (Basic)
  // =========================================================================
  {
    id: "hackerrank-problem-solving",
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    category: "hackerrank",
    date: "Feb 24, 2025",
    badge: "Verified Skill Assessment",
    credentialId: "3D407F729E59",
    credentialUrl: "https://www.hackerrank.com/certificates/3d407f729e59",
    fileUrl: "/assets/certificates/hackerrank_problem_solving.jpg",
    fileType: "image",
    skillsLearned: [
      "Algorithmic Logic",
      "Data Structures",
      "Array & String Manipulations",
      "Edge-case Testing & Optimization"
    ],
    description:
      "Verified certification passing HackerRank's rigorous timed algorithmic assessment covering core data structures, time complexity analysis, and clean algorithmic problem-solving."
  },

  // =========================================================================
  // 8. Udemy: 100 Days of Code: The Complete Python Pro Bootcamp
  // =========================================================================
  {
    id: "udemy-100-days-python",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy · Dr. Angela Yu",
    category: "udemy",
    date: "Aug 13, 2022",
    badge: "64 Total Hours",
    credentialId: "UC-c4665a9d-e104-4c61-bdf1-ae47ad0882cb",
    credentialUrl: "https://ude.my/UC-c4665a9d-e104-4c61-bdf1-ae47ad0882cb",
    fileUrl: "/assets/certificates/udemy_python_100_days.jpg",
    fileType: "image",
    skillsLearned: [
      "Python 3 Advanced OOP",
      "Web Scraping (BeautifulSoup & Selenium)",
      "APIs & Requests Automation",
      "Data Analysis (Pandas & NumPy)",
      "Desktop GUI (Tkinter & PyQt)",
      "Flask Web Development"
    ],
    description:
      "Mastery of end-to-end Python engineering across 100 consecutive days of production challenges, building real-world automation scripts, data scrapers, desktop interfaces, and web applications."
  }
];
