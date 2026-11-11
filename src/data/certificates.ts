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
  fileUrl: string;
  fileType: "pdf" | "image";
  skillsLearned: string[];
  description: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "nptel-java",
    title: "Programming in Java",
    issuer: "NPTEL - IIT Kharagpur (Ministry of Education)",
    category: "nptel",
    date: "Jul - Oct 2026",
    score: "69% (Elite)",
    badge: "Elite Certificate",
    credits: "4 Credits Recommended",
    credentialId: "NPTEL26CS153S1252600961",
    fileUrl: "/certificates/Programming In Java.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Java 21 & JVM Internal Architecture",
      "Multithreading & Concurrency Control",
      "Socket Programming & Raw Byte Streams",
      "Java Collections Framework & Generics",
      "Robust OOP Exception Architectures",
      "Bluetooth ESC/POS Thermal Protocol Foundations"
    ],
    description: "12-week comprehensive examination certified with Elite distinction by IIT Kharagpur (69%). Covers multithreaded concurrency, socket I/O streams, JVM bytecode mechanics, and collections — the exact systems foundation powering JewelBill's direct 240ms Bluetooth ESC/POS raw socket printing engine."
  },
  {
    id: "nptel-oops",
    title: "Fundamentals of Object Oriented Programming",
    issuer: "NPTEL - IIT Kharagpur (Ministry of Education)",
    category: "nptel",
    date: "Jan - Apr 2026",
    score: "75% (Elite + Silver)",
    badge: "Elite + Silver Certificate",
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
    description: "12-week course on OOP fundamentals, operator overloading, virtual tables, inheritance hierarchies, and memory allocation certified by IIT Kharagpur."
  },
  {
    id: "nptel-ml",
    title: "Introduction to Machine Learning",
    issuer: "NPTEL - IIT Kharagpur",
    category: "nptel",
    date: "Jul - Oct 2026",
    score: "56% (Certified)",
    badge: "AI/ML Core",
    credits: "4 Credits Recommended",
    credentialId: "NPTEL26CS133S552600332",
    fileUrl: "/certificates/Introduction To Machine Learning.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Supervised & Unsupervised Learning",
      "Linear & Logistic Regression",
      "Decision Trees & Random Forests",
      "Neural Networks & Gradient Descent",
      "Dimensionality Reduction (PCA)"
    ],
    description: "12-week course covering regression models, gradient descent optimization, classification trees, neural networks, and dimensionality reduction certified by IIT Kharagpur."
  },
  {
    id: "nptel-dsa-python",
    title: "Programming, Data Structures and Algorithms Using Python",
    issuer: "NPTEL - Chennai Mathematical Institute (CMI)",
    category: "nptel",
    date: "Jan - Mar 2026",
    score: "52% (Certified)",
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
    description: "8-week curriculum on asymptotic analysis, search trees, graph traversals, memoization, and sorting algorithms certified by CMI."
  },
  {
    id: "nptel-dbms",
    title: "Database Management System",
    issuer: "NPTEL - IIT Kharagpur",
    category: "nptel",
    date: "Jul - Sep 2026",
    score: "55% (Certified)",
    badge: "Database Architecture",
    credits: "3 Credits Recommended",
    credentialId: "NPTEL26CS117S352800154",
    fileUrl: "/certificates/Database Management System.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Relational Algebra & Tuple Calculus",
      "Schema Normalization (1NF to BCNF)",
      "ACID Transactions & Concurrency Control",
      "B+ Trees & Storage Indexing",
      "SQL Query Optimization"
    ],
    description: "8-week course covering schema normalization, ACID transaction isolation, B+ tree indexing, and SQL execution planning certified by IIT Kharagpur."
  },
  {
    id: "nptel-discrete-math",
    title: "Discrete Mathematics",
    issuer: "NPTEL - IIT Ropar (Ministry of Education)",
    category: "nptel",
    date: "Jul - Oct 2026",
    score: "87% (Elite + Silver)",
    badge: "Elite Silver",
    credits: "4 Credits Recommended",
    credentialId: "NPTEL26CS137S252600760",
    fileUrl: "/certificates/Discrete Mathematics.pdf",
    fileType: "pdf",
    skillsLearned: [
      "Propositional & Predicate Logic",
      "Graph Theory & Planarity",
      "Combinatorics & Pigeonhole Principle",
      "Recurrence Relations & Generating Functions",
      "Set Theory & Boolean Algebra"
    ],
    description: "12-week course on proof techniques, Eulerian and Hamiltonian graphs, combinatorics, recurrence relations, and Boolean algebra certified with Elite Silver distinction by IIT Ropar."
  },
  {
    id: "nptel-c-programming",
    title: "Problem Solving Through Programming In C",
    issuer: "NPTEL - IIT Kharagpur",
    category: "nptel",
    date: "Jan - Apr 2026",
    score: "51% (Certified)",
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
    description: "12-week course on C memory management, pointer arithmetic, struct alignment, bitwise operations, and file I/O certified by IIT Kharagpur."
  },
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
    description: "Timed assessment covering arrays, strings, basic data structures, and edge-case handling on HackerRank."
  },
  {
    id: "udemy-100-days-python",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "Udemy - Dr. Angela Yu",
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
    description: "64-hour coursework in Python covering OOP, web scraping with BeautifulSoup and Selenium, REST APIs, Pandas, Tkinter desktop GUIs, and Flask."
  }
];
