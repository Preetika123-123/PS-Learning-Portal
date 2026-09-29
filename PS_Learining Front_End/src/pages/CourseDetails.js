import React from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const courseDetails = {
  1: {
    name: "Java Programming",
    level: 5,
    category: "Intermediate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQx9PHel_8LpUnooQ8rtre5LDChoAqyDl3KcMII7WsN89rqKkl3kpjItsz&s=10",

    levels: [
      {
        level: 0,
        name: "Java Programming - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Programming Knowledge",
        topics: [
          "Introduction to Java",
          "Java Features",
          "JDK, JRE and JVM",
          "Variables and Data Types",
          "Operators",
          "Input and Output",
          "Type Casting",
          "Basic Java Programs",
        ],
      },
      {
        level: 1,
        name: "Java Programming - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "Java Programming - Level 0",
        topics: [
          "Conditional Statements",
          "if, if-else and Nested if",
          "Switch Statement",
          "For Loop",
          "While Loop",
          "Do-While Loop",
          "Break and Continue",
          "Arrays",
        ],
      },
      {
        level: 2,
        name: "Java Programming - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "MCQ",
        prerequisite: "Java Programming - Level 1",
        topics: [
          "Methods",
          "Method Parameters",
          "Method Overloading",
          "Classes and Objects",
          "Constructors",
          "this Keyword",
          "Static Keyword",
          "String Handling",
        ],
      },
      {
        level: 3,
        name: "Java Programming - Level 3",
        attempts: 0,
        rewards: 400,
        assessment: "MCQ",
        prerequisite: "Java Programming - Level 2",
        topics: [
          "Object Oriented Programming",
          "Encapsulation",
          "Inheritance",
          "Method Overriding",
          "Polymorphism",
          "Abstraction",
          "Interfaces",
          "Packages",
        ],
      },
      {
        level: 4,
        name: "Java Programming - Level 4",
        attempts: 0,
        rewards: 500,
        assessment: "Manual Grading",
        prerequisite: "Java Programming - Level 3",
        topics: [
          "Exception Handling",
          "Try-Catch-Finally",
          "Custom Exceptions",
          "Collections Framework",
          "ArrayList",
          "LinkedList",
          "HashSet",
          "HashMap",
          "Generics",
        ],
      },
    ],
  },

  2: {
    name: "Advanced Modelling & Simulation",
    level: 2,
    category: "Advanced",
    image:
      "https://ps.bitsathy.ac.in/api/ps_v2/images/courses/Advanced%20Modelling.avif",

    levels: [
      {
        level: 0,
        name: "Advanced Modelling & Simulation - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite:
          "Mechanical Modelling Level - 2B (ADVANCED PART MODELLING)",
        topics: [
          "Introduction to FEA",
          "Mathematical Framework: The FEA Equation",
          "Discretization: Mesh, Elements, Nodes",
          "Types of Elements: 1D, 2D, 3D",
          "Stress, Strain, and Deformation",
          "Hooke's Law, Young's Modulus, Poisson's Ratio",
          "The Stress-Strain Curve: Elastic vs. Plastic",
          "Factor of Safety (FOS)",
          "Material Models: Isotropic, Anisotropic, Orthotropic",
          "Linear vs. Nonlinear Analysis",
          "Preprocessing: Geometry, Materials, Meshing, BCs",
          "ANSYS Workflow",
          "FEA Validity: Mesh Quality, BCs, Judgment",
          "Shape Functions",
          "Degree of Freedom",
        ],
      },
      {
        level: 1,
        name: "Advanced Modelling & Simulation - Level 1",
        attempts: 0,
        rewards: 300,
        assessment: "Manual Grading",
        prerequisite: "Advanced Modelling & Simulation - Level 0",
        topics: [
          "Introduction to Thermal-Structural Analysis",
          "Theoretical Foundations",
          "Material Properties and Their Significance",
          "Element Selection and Modeling Strategy",
          "Boundary Conditions – Theory and Application",
          "Loading Types and Application Methods",
          "Step-by-Step Problem Solving Methodology",
        ],
      },
    ],
  },

  3: {
    name: "Algebra",
    level: 3,
    category: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904",

    levels: [
      {
        level: 0,
        name: "Algebra - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Mathematics",
        topics: [
          "Introduction to Algebra",
          "Variables and Constants",
          "Algebraic Expressions",
          "Like and Unlike Terms",
          "Simplification of Expressions",
          "Addition and Subtraction of Expressions",
          "Multiplication of Expressions",
          "Basic Algebraic Problems",
        ],
      },
      {
        level: 1,
        name: "Algebra - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "Algebra - Level 0",
        topics: [
          "Linear Equations",
          "Solving One Variable Equations",
          "Linear Equations in Two Variables",
          "Simultaneous Equations",
          "Algebraic Identities",
          "Factorization",
          "Quadratic Expressions",
          "Word Problems",
        ],
      },
      {
        level: 2,
        name: "Algebra - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "Manual Grading",
        prerequisite: "Algebra - Level 1",
        topics: [
          "Quadratic Equations",
          "Methods of Solving Quadratic Equations",
          "Polynomials",
          "Polynomial Factorization",
          "Sequences and Series",
          "Functions and Relations",
          "Advanced Algebraic Problems",
          "Algebra Practice Assessment",
        ],
      },
    ],
  },

  4: {
    name: "Analog Electronics - Mock Test",
    level: 6,
    category: "Mock Test",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",

    levels: [
      {
        level: 0,
        name: "Analog Electronics - Mock Test - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Electronics Knowledge",
        topics: [
          "Semiconductor Basics",
          "Intrinsic and Extrinsic Semiconductors",
          "PN Junction",
          "Diode Construction",
          "Diode Characteristics",
          "Forward and Reverse Bias",
          "Zener Diode",
          "LED and Photodiode",
        ],
      },
      {
        level: 1,
        name: "Analog Electronics - Mock Test - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "Analog Electronics - Level 0",
        topics: [
          "Rectifiers",
          "Half Wave Rectifier",
          "Full Wave Rectifier",
          "Bridge Rectifier",
          "Filter Circuits",
          "Clippers",
          "Clampers",
          "Voltage Regulators",
        ],
      },
      {
        level: 2,
        name: "Analog Electronics - Mock Test - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "MCQ",
        prerequisite: "Analog Electronics - Level 1",
        topics: [
          "BJT Fundamentals",
          "BJT Construction and Operation",
          "BJT Configurations",
          "CB, CE and CC Configurations",
          "Transistor Biasing",
          "DC Load Line",
          "Operating Point",
          "BJT as an Amplifier",
        ],
      },
      {
        level: 3,
        name: "Analog Electronics - Mock Test - Level 3",
        attempts: 0,
        rewards: 400,
        assessment: "MCQ",
        prerequisite: "Analog Electronics - Level 2",
        topics: [
          "FET Fundamentals",
          "JFET",
          "MOSFET",
          "MOSFET Characteristics",
          "FET Biasing",
          "FET Amplifiers",
          "Small Signal Amplifiers",
          "Frequency Response of Amplifiers",
        ],
      },
      {
        level: 4,
        name: "Analog Electronics - Mock Test - Level 4",
        attempts: 0,
        rewards: 500,
        assessment: "MCQ",
        prerequisite: "Analog Electronics - Level 3",
        topics: [
          "Operational Amplifier",
          "Ideal Op-Amp Characteristics",
          "Inverting Amplifier",
          "Non-Inverting Amplifier",
          "Summing Amplifier",
          "Differential Amplifier",
          "Integrator",
          "Differentiator",
          "Comparator",
        ],
      },
      {
        level: 5,
        name: "Analog Electronics - Mock Test - Level 5",
        attempts: 0,
        rewards: 600,
        assessment: "Manual Grading",
        prerequisite: "Analog Electronics - Level 4",
        topics: [
          "Feedback Amplifiers",
          "Positive and Negative Feedback",
          "Oscillators",
          "RC and LC Oscillators",
          "Wien Bridge Oscillator",
          "Active Filters",
          "Low Pass Filter",
          "High Pass Filter",
          "Band Pass Filter",
          "Analog Electronics - Final Mock Test",
        ],
      },
    ],
  },

  5: {
    name: "Aptitude",
    level: 6,
    category: "Intermediate",
    image:
      "https://www.theforage.com/blog/wp-content/uploads/2024/10/career-aptitude-test.jpg",

    levels: [
      {
        level: 0,
        name: "Aptitude - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Mathematics",
        topics: [
          "Number System",
          "Basic Arithmetic",
          "Simplification",
          "HCF and LCM",
          "Fractions and Decimals",
          "BODMAS",
          "Basic Calculations",
          "Aptitude Fundamentals",
        ],
      },
      {
        level: 1,
        name: "Aptitude - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "Aptitude - Level 0",
        topics: [
          "Percentage",
          "Profit and Loss",
          "Simple Interest",
          "Compound Interest",
          "Ratio and Proportion",
          "Average",
          "Partnership",
          "Mixtures and Allegations",
        ],
      },
      {
        level: 2,
        name: "Aptitude - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "MCQ",
        prerequisite: "Aptitude - Level 1",
        topics: [
          "Time and Work",
          "Pipes and Cisterns",
          "Time, Speed and Distance",
          "Problems on Trains",
          "Boats and Streams",
          "Problems on Ages",
          "Work and Wages",
          "Clocks",
        ],
      },
      {
        level: 3,
        name: "Aptitude - Level 3",
        attempts: 0,
        rewards: 400,
        assessment: "MCQ",
        prerequisite: "Aptitude - Level 2",
        topics: [
          "Permutations and Combinations",
          "Probability",
          "Algebra",
          "Linear Equations",
          "Quadratic Equations",
          "Progressions",
          "Geometry",
          "Mensuration",
        ],
      },
      {
        level: 4,
        name: "Aptitude - Level 4",
        attempts: 0,
        rewards: 500,
        assessment: "MCQ",
        prerequisite: "Aptitude - Level 3",
        topics: [
          "Data Interpretation",
          "Tables",
          "Bar Charts",
          "Pie Charts",
          "Line Graphs",
          "Data Sufficiency",
          "Logical Reasoning",
          "Analytical Reasoning",
        ],
      },
      {
        level: 5,
        name: "Aptitude - Level 5",
        attempts: 0,
        rewards: 600,
        assessment: "Manual Grading",
        prerequisite: "Aptitude - Level 4",
        topics: [
          "Advanced Quantitative Aptitude",
          "Advanced Data Interpretation",
          "Number Puzzles",
          "Logical Puzzles",
          "Critical Reasoning",
          "Verbal Ability",
          "Mixed Aptitude Problems",
          "Time-Based Aptitude Test",
          "Placement Aptitude Questions",
          "Final Aptitude Mock Test",
        ],
      },
    ],
  },

  6: {
    name: "C Programming",
    level: 4,
    category: "Intermediate",
    image:
      "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/c-programming-language.jpg?w=1600&h=900&fit=crop",

    levels: [
      {
        level: 0,
        name: "C Programming - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Programming Knowledge",
        topics: [
          "Introduction to C Programming",
          "Features of C",
          "Structure of a C Program",
          "Variables and Constants",
          "Data Types",
          "Input and Output",
          "Operators",
          "Type Casting",
        ],
      },
      {
        level: 1,
        name: "C Programming - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "C Programming - Level 0",
        topics: [
          "Conditional Statements",
          "if Statement",
          "if-else Statement",
          "Nested if",
          "Switch Statement",
          "For Loop",
          "While Loop",
          "Do-While Loop",
          "Break and Continue",
        ],
      },
      {
        level: 2,
        name: "C Programming - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "MCQ",
        prerequisite: "C Programming - Level 1",
        topics: [
          "Arrays",
          "One Dimensional Arrays",
          "Two Dimensional Arrays",
          "Strings",
          "String Functions",
          "Functions",
          "Function Parameters",
          "Recursion",
          "Storage Classes",
        ],
      },
      {
        level: 3,
        name: "C Programming - Level 3",
        attempts: 0,
        rewards: 400,
        assessment: "Manual Grading",
        prerequisite: "C Programming - Level 2",
        topics: [
          "Pointers",
          "Pointer Arithmetic",
          "Pointers and Arrays",
          "Structures",
          "Unions",
          "Enumerations",
          "Dynamic Memory Allocation",
          "File Handling",
          "Preprocessor Directives",
          "Final C Programming Assessment",
        ],
      },
    ],
  },

  7: {
    name: "DBMS",
    level: 3,
    category: "Intermediate",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qwoBNFqs_QFfSXbwljMlWn5OyQbBN5SReTYgsDyPZFoar_kDECYKl-3c&s=10",

    levels: [
      {
        level: 0,
        name: "DBMS - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Computer Knowledge",
        topics: [
          "Introduction to DBMS",
          "Database Concepts",
          "DBMS Architecture",
          "Database Models",
          "Relational Database",
          "Tables, Rows and Columns",
          "Keys in DBMS",
          "Primary Key and Foreign Key",
        ],
      },
      {
        level: 1,
        name: "DBMS - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "DBMS - Level 0",
        topics: [
          "Entity Relationship Model",
          "ER Diagrams",
          "Attributes and Relationships",
          "Normalization",
          "First Normal Form",
          "Second Normal Form",
          "Third Normal Form",
          "Functional Dependencies",
        ],
      },
      {
        level: 2,
        name: "DBMS - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "Manual Grading",
        prerequisite: "DBMS - Level 1",
        topics: [
          "SQL Introduction",
          "DDL Commands",
          "DML Commands",
          "DQL Commands",
          "DCL Commands",
          "TCL Commands",
          "Joins",
          "Subqueries",
          "Aggregate Functions",
          "Views and Indexes",
          "Transactions",
          "ACID Properties",
          "Final DBMS Assessment",
        ],
      },
    ],
  },

  8: {
    name: "Python Programming",
    level: 2,
    category: "Beginner",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",

    levels: [
      {
        level: 0,
        name: "Python Programming - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Computer Knowledge",
        topics: [
          "Introduction to Python",
          "Python Features",
          "Variables and Data Types",
          "Operators",
          "Conditional Statements",
          "Loops",
          "Lists",
          "Tuples",
          "Dictionaries",
        ],
      },
      {
        level: 1,
        name: "Python Programming - Level 1",
        attempts: 0,
        rewards: 300,
        assessment: "Manual Grading",
        prerequisite: "Python Programming - Level 0",
        topics: [
          "Functions",
          "Modules and Packages",
          "File Handling",
          "Exception Handling",
          "Object Oriented Programming",
          "Classes and Objects",
          "Inheritance",
          "Python Projects",
        ],
      },
    ],
  },

  9: {
    name: "Web Technology",
    level: 4,
    category: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    levels: [
      {
        level: 0,
        name: "Web Technology - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Computer Knowledge",
        topics: [
          "Introduction to Web Technology",
          "Internet and World Wide Web",
          "Web Browsers and Web Servers",
          "HTML Basics",
          "HTML Elements and Attributes",
          "Headings, Paragraphs and Links",
          "Lists and Tables",
          "Forms and Input Elements",
        ],
      },
    ],
  },

  10: {
    name: "C++ Programming",
    level: 4,
    category: "Intermediate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",

    levels: [
      {
        level: 0,
        name: "C++ Programming - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Programming Knowledge",
        topics: [
          "Introduction to C++",
          "Features of C++",
          "C++ Program Structure",
          "Variables and Constants",
          "Data Types",
          "Input and Output",
          "Operators",
          "Type Casting",
        ],
      },
      {
        level: 1,
        name: "C++ Programming - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "C++ Programming - Level 0",
        topics: [
          "Conditional Statements",
          "if and if-else",
          "Switch Statement",
          "For Loop",
          "While Loop",
          "Do-While Loop",
          "Break and Continue",
          "Arrays",
          "Strings",
        ],
      },
      {
        level: 2,
        name: "C++ Programming - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "MCQ",
        prerequisite: "C++ Programming - Level 1",
        topics: [
          "Functions",
          "Function Overloading",
          "Classes and Objects",
          "Constructors and Destructors",
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Operator Overloading",
        ],
      },
      {
        level: 3,
        name: "C++ Programming - Level 3",
        attempts: 0,
        rewards: 400,
        assessment: "Manual Grading",
        prerequisite: "C++ Programming - Level 2",
        topics: [
          "Abstraction",
          "Virtual Functions",
          "Templates",
          "Exception Handling",
          "STL Introduction",
          "Vectors",
          "Maps and Sets",
          "Iterators",
          "File Handling",
          "Pointers",
          "Dynamic Memory Allocation",
          "Final C++ Programming Assessment",
        ],
      },
    ],
  },

  11: {
    name: "UI/UX Design",
    level: 5,
    category: "Intermediate",
    image:
      "https://saastargo.com/assets/images/ui-ux/mobile-uiux-mockup.jpg",

    levels: [
      {
        level: 0,
        name: "UI/UX Design - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Computer Knowledge",
        topics: [
          "Introduction to UI/UX Design",
          "Difference Between UI and UX",
          "Importance of User Experience",
          "Design Thinking Basics",
          "User-Centered Design",
          "Understanding Users",
          "User Research Basics",
          "Introduction to Design Tools",
        ],
      },
      {
        level: 1,
        name: "UI/UX Design - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "UI/UX Design - Level 0",
        topics: [
          "User Research",
          "User Personas",
          "User Journey Mapping",
          "User Flow",
          "Information Architecture",
          "Wireframing",
          "Low-Fidelity Wireframes",
          "High-Fidelity Wireframes",
        ],
      },
      {
        level: 2,
        name: "UI/UX Design - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "MCQ",
        prerequisite: "UI/UX Design - Level 1",
        topics: [
          "UI Design Principles",
          "Layout and Composition",
          "Color Theory",
          "Typography",
          "Icons and Images",
          "Spacing and Alignment",
          "Design Consistency",
          "Responsive Design",
        ],
      },
      {
        level: 3,
        name: "UI/UX Design - Level 3",
        attempts: 0,
        rewards: 400,
        assessment: "MCQ",
        prerequisite: "UI/UX Design - Level 2",
        topics: [
          "Figma Introduction",
          "Figma Interface",
          "Frames and Components",
          "Auto Layout",
          "Design Systems",
          "Prototyping",
          "Interactive Prototypes",
          "Usability Testing",
        ],
      },
      {
        level: 4,
        name: "UI/UX Design - Level 4",
        attempts: 0,
        rewards: 500,
        assessment: "Manual Grading",
        prerequisite: "UI/UX Design - Level 3",
        topics: [
          "Advanced UI/UX Design",
          "UX Research Methods",
          "Usability Testing",
          "Accessibility in Design",
          "Design System Development",
          "Advanced Figma Prototyping",
          "Case Study Creation",
          "Portfolio Design",
          "UI/UX Project Development",
          "Final UI/UX Design Assessment",
        ],
      },
    ],
  },

  12: {
    name: "Data Structures",
    level: 7,
    category: "Advanced",
    image:
      "https://miro.medium.com/1*J38nYZU7gzu-4lQmtjlSUw.jpeg",

    levels: [
      {
        level: 0,
        name: "Data Structures - Level 0",
        attempts: 0,
        rewards: 100,
        assessment: "MCQ",
        prerequisite: "Basic Programming Knowledge",
        topics: [
          "Introduction to Data Structures",
          "Types of Data Structures",
          "Linear and Non-Linear Data Structures",
          "Arrays",
          "One Dimensional Arrays",
          "Two Dimensional Arrays",
          "Array Operations",
          "Time and Space Complexity",
        ],
      },
      {
        level: 1,
        name: "Data Structures - Level 1",
        attempts: 0,
        rewards: 200,
        assessment: "MCQ",
        prerequisite: "Data Structures - Level 0",
        topics: [
          "Linked Lists",
          "Singly Linked List",
          "Doubly Linked List",
          "Circular Linked List",
          "Linked List Operations",
          "Insertion and Deletion",
          "Searching in Linked Lists",
          "Applications of Linked Lists",
        ],
      },
      {
        level: 2,
        name: "Data Structures - Level 2",
        attempts: 0,
        rewards: 300,
        assessment: "MCQ",
        prerequisite: "Data Structures - Level 1",
        topics: [
          "Stacks",
          "Stack Operations",
          "Stack Implementation using Arrays",
          "Stack Implementation using Linked Lists",
          "Applications of Stacks",
          "Queues",
          "Queue Operations",
          "Circular Queue",
          "Priority Queue",
          "Deque",
        ],
      },
      {
        level: 3,
        name: "Data Structures - Level 3",
        attempts: 0,
        rewards: 400,
        assessment: "MCQ",
        prerequisite: "Data Structures - Level 2",
        topics: [
          "Trees",
          "Binary Trees",
          "Tree Traversal",
          "Preorder Traversal",
          "Inorder Traversal",
          "Postorder Traversal",
          "Binary Search Trees",
          "Insertion and Deletion in BST",
          "Tree Applications",
        ],
      },
      {
        level: 4,
        name: "Data Structures - Level 4",
        attempts: 0,
        rewards: 500,
        assessment: "MCQ",
        prerequisite: "Data Structures - Level 3",
        topics: [
          "Heaps",
          "Min Heap",
          "Max Heap",
          "Heap Operations",
          "Heap Sort",
          "Priority Queues",
          "Hashing",
          "Hash Functions",
          "Collision Resolution",
          "Hash Tables",
        ],
      },
      {
        level: 5,
        name: "Data Structures - Level 5",
        attempts: 0,
        rewards: 600,
        assessment: "MCQ",
        prerequisite: "Data Structures - Level 4",
        topics: [
          "Graphs",
          "Graph Terminology",
          "Graph Representation",
          "Adjacency Matrix",
          "Adjacency List",
          "Breadth First Search",
          "Depth First Search",
          "Graph Traversal",
          "Shortest Path Algorithms",
          "Minimum Spanning Tree",
        ],
      },
      {
        level: 6,
        name: "Data Structures - Level 6",
        attempts: 0,
        rewards: 700,
        assessment: "Manual Grading",
        prerequisite: "Data Structures - Level 5",
        topics: [
          "Advanced Data Structures",
          "AVL Trees",
          "Balanced Binary Trees",
          "Trie Data Structure",
          "Advanced Hashing",
          "Disjoint Set",
          "Union-Find",
          "Advanced Graph Algorithms",
          "Data Structure Optimization",
          "Problem Solving using Data Structures",
          "Final Data Structures Assessment",
        ],
      },
    ],
  },
};


function CourseDetails() {
  const { id } = useParams();

  const course = courseDetails[id];

  if (!course) {
    return (
      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <div className="not-found">
            <h1>Course not found</h1>

            <Link to="/courses">
              ← Back to Courses
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        {/* COURSE HEADER */}
        <div className="course-detail-header">

          <div className="course-detail-left">

            <h1>{course.name}</h1>

            <p>{course.category} Course</p>

            <div className="course-detail-meta">

              <span>
                ▣ Levels: {course.level}
              </span>

              <span>
                ♙ {course.category}
              </span>

            </div>

          </div>

          <img
            src={course.image}
            alt={course.name}
            className="course-detail-image"
          />

        </div>


        {/* LEVELS */}
        <div className="levels-container">

          {course.levels.map((level) => (

            <div
              className="level-card"
              key={level.level}
            >

              <div className="level-header">

                <div className="level-number">
                  {level.level}
                </div>

                <h2>
                  {level.name}
                </h2>

                <div className="attempts">
                  Attempts: {level.attempts}
                </div>

              </div>


              <div className="level-content">

                {/* TOPICS */}
                <div className="topics-section">

                  {level.topics.map((topic, index) => (

                    <div
                      className="topic"
                      key={index}
                    >
                      {index + 1}. {topic}
                    </div>

                  ))}

                </div>


                {/* LEVEL INFORMATION */}
                <div className="level-info">

                  <div className="info-block">

                    <h3>
                      With Rewards
                    </h3>

                    <p className="reward-value">
                      🏅 {level.rewards}
                    </p>

                  </div>


                  <div className="info-block">

                    <h3>
                      Pre Request
                    </h3>

                    <p>
                      1. {level.prerequisite}
                    </p>

                  </div>


                  <div className="info-block">

                    <h3>
                      Assessment Type
                    </h3>

                    <p>
                      {level.assessment}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>
    </div>
  );
}

export default CourseDetails;