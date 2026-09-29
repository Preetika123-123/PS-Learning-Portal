import { useState } from "react";
import { useParams } from "react-router-dom";

const aptitudeQuestions = [
  {
    id: 1,
    question: "If 20% of a number is 50, what is the number?",
    options: ["200", "250", "300", "150"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 2,
    question: "What is 25% of 240?",
    options: ["50", "60", "70", "80"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 3,
    question: "A train travels 120 km in 2 hours. What is its speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 4,
    question: "The average of 10, 20, 30, 40 and 50 is:",
    options: ["20", "25", "30", "35"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 5,
    question:
      "If the ratio of boys to girls is 3:2 and there are 30 boys, how many girls are there?",
    options: ["15", "20", "25", "10"],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 6,
    question: "What is the HCF of 24 and 36?",
    options: ["6", "8", "12", "18"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 7,
    question:
      "A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?",
    options: ["10%", "15%", "20%", "25%"],
    answer: "C",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 8,
    question:
      "If 5 workers can complete a work in 12 days, how many days will 10 workers take?",
    options: ["3 days", "6 days", "8 days", "10 days"],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 9,
    question: "What is the next number in the series: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 10,
    question:
      "A number is divisible by both 3 and 5. Which of the following can be the number?",
    options: ["20", "25", "30", "35"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
];

const dbmsQuestions = [
  {
    id: 1,
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management System",
      "Database Monitoring System",
      "Data Management Software",
    ],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 2,
    question: "Which of the following is a relational database?",
    options: ["HTML", "MySQL", "CSS", "JavaScript"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 3,
    question: "Which SQL command is used to retrieve data?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 4,
    question: "Which key uniquely identifies a record in a table?",
    options: ["Foreign Key", "Primary Key", "Candidate Key", "Alternate Key"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 5,
    question: "Which SQL command is used to remove a table?",
    options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 6,
    question: "What is the purpose of normalization?",
    options: [
      "Increase data redundancy",
      "Reduce data redundancy",
      "Delete all data",
      "Increase storage",
    ],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 7,
    question: "Which SQL clause is used to filter records?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 8,
    question: "Which command is used to add a new record?",
    options: ["INSERT", "ADD", "CREATE", "UPDATE"],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 9,
    question: "Which SQL clause is used to sort results?",
    options: ["GROUP BY", "ORDER BY", "SORT BY", "WHERE"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 10,
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Language",
      "Structured Question Language",
    ],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
];

/* =========================
   DATA STRUCTURES QUESTIONS
========================= */

const dataStructuresQuestions = [
  {
    id: 1,
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 2,
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 3,
    question: "Which data structure uses nodes and pointers?",
    options: ["Array", "Linked List", "Stack", "Queue"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 4,
    question: "Which data structure is commonly used in recursion?",
    options: ["Queue", "Stack", "Array", "Tree"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 5,
    question: "What is the root node in a tree?",
    options: [
      "Last node",
      "Leaf node",
      "Topmost node",
      "Middle node",
    ],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 6,
    question: "Which traversal follows Root, Left, Right?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 7,
    question: "Which data structure is commonly used for BFS?",
    options: ["Stack", "Queue", "Array", "Tree"],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 8,
    question: "Which data structure is commonly used for DFS?",
    options: ["Queue", "Stack", "Array", "Heap"],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 9,
    question: "Which data structure stores elements in contiguous memory?",
    options: ["Array", "Linked List", "Tree", "Graph"],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 10,
    question: "What is the worst-case time complexity of linear search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
];

/* =========================
   PROGRAMMING QUESTIONS
========================= */

const programmingQuestions = [
  {
    id: 1,
    question: "What is an algorithm?",
    options: [
      "A programming language",
      "A step-by-step procedure to solve a problem",
      "A compiler",
      "A database",
    ],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 2,
    question: "Which symbol is commonly used for assignment?",
    options: ["==", "=", "!=", ">="],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 3,
    question: "Which loop executes while a condition is true?",
    options: ["for", "while", "switch", "if"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 4,
    question: "What is a variable?",
    options: [
      "A keyword",
      "A named memory location",
      "A compiler",
      "An error",
    ],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 5,
    question: "What is debugging?",
    options: [
      "Writing code",
      "Finding and fixing errors",
      "Running a program",
      "Installing software",
    ],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 6,
    question: "What type of error occurs when syntax is incorrect?",
    options: ["Logical Error", "Runtime Error", "Syntax Error", "Network Error"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 7,
    question: "What is a function?",
    options: [
      "A reusable block of code",
      "A variable",
      "A database",
      "An operating system",
    ],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 8,
    question: "Which statement is used for decision making?",
    options: ["for", "if", "while", "return"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 9,
    question: "What does IDE stand for?",
    options: [
      "Integrated Development Environment",
      "Internet Development Engine",
      "Internal Data Environment",
      "Integrated Design Editor",
    ],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 10,
    question: "What is it called when a function calls itself?",
    options: ["Iteration", "Recursion", "Compilation", "Inheritance"],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
];

/* =========================
   C PROGRAMMING QUESTIONS
========================= */

const cProgrammingQuestions = [
  {
    id: 1,
    question: "Who developed the C programming language?",
    options: [
      "James Gosling",
      "Dennis Ritchie",
      "Bjarne Stroustrup",
      "Guido van Rossum",
    ],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 2,
    question: "Which symbol is used to end a statement in C?",
    options: [":", ".", ";", ","],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 3,
    question: "What is the starting point of a C program?",
    options: ["start()", "main()", "begin()", "program()"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 4,
    question: "Which format specifier is used for an integer?",
    options: ["%f", "%c", "%d", "%s"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 5,
    question: "Which symbol is used to access the address of a variable?",
    options: ["*", "&", "#", "@"],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 6,
    question: "Which keyword is used to declare a constant?",
    options: ["static", "const", "fixed", "constant"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 7,
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "nested for"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 8,
    question: "Which header file is required for printf()?",
    options: ["<stdlib.h>", "<string.h>", "<stdio.h>", "<math.h>"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 9,
    question:
      "Which operator accesses a structure member through a pointer?",
    options: [".", "->", "::", "&"],
    answer: "B",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 10,
    question: "What is the first index of an array in C?",
    options: ["0", "1", "-1", "2"],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
];

/* =========================
   PYTHON QUESTIONS
========================= */

const pythonQuestions = [
  {
    id: 1,
    question: "Who created Python?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Guido van Rossum",
      "Bjarne Stroustrup",
    ],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 2,
    question: "Which symbol is used to write a comment in Python?",
    options: ["//", "/*", "#", "--"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 3,
    question: "Which function is used to display output in Python?",
    options: ["display()", "print()", "show()", "output()"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 4,
    question: "Which data type is used for True and False?",
    options: ["int", "str", "bool", "float"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 5,
    question: "Which is an ordered and mutable collection in Python?",
    options: ["Tuple", "List", "Set", "String"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 6,
    question: "Which keyword is used to define a function?",
    options: ["function", "func", "def", "define"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 7,
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 8,
    question: "Which method adds an element to the end of a list?",
    options: ["add()", "insert()", "append()", "push()"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 9,
    question: "Which keyword is used to create a class?",
    options: ["object", "class", "struct", "define"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 10,
    question: "Which function returns the length of a list?",
    options: ["size()", "count()", "len()", "length()"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
];

/* =========================
   WEB TECHNOLOGY QUESTIONS
========================= */

const webTechnologyQuestions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 2,
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 3,
    question: "Which language is used to add interactivity to web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 4,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 5,
    question: "Which HTML tag is used to display an image?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 6,
    question: "Which CSS property changes text color?",
    options: ["font", "text-color", "color", "background"],
    answer: "C",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 7,
    question: "Which symbol is used for an ID selector in CSS?",
    options: [".", "#", "*", "&"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 8,
    question: "Which symbol is used for a class selector in CSS?",
    options: [".", "#", "*", "$"],
    answer: "A",
    difficulty: "Easy",
    type: "MCQ",
  },
  {
    id: 9,
    question:
      "Which JavaScript keyword declares a variable that cannot be reassigned?",
    options: ["let", "var", "const", "fixed"],
    answer: "C",
    difficulty: "Medium",
    type: "MCQ",
  },
  {
    id: 10,
    question:
      "Which HTTP method is commonly used to retrieve data?",
    options: ["POST", "GET", "PUT", "DELETE"],
    answer: "B",
    difficulty: "Easy",
    type: "MCQ",
  },
];

/* =========================
   QUESTION BANK
========================= */

const questionBanks = {
  aptitude: aptitudeQuestions,
  dbms: dbmsQuestions,
  "data-structures": dataStructuresQuestions,
  programming: programmingQuestions,
  "c-programming": cProgrammingQuestions,
  python: pythonQuestions,
  "web-technology": webTechnologyQuestions,
};

/* =========================
   SUBJECT TITLES
========================= */

const subjectTitles = {
  aptitude: "Training Identification Assessment - Aptitude",
  dbms: "Training Identification Assessment - DBMS",
  "data-structures":
    "Training Identification Assessment - Data Structures",
  programming:
    "Training Identification Assessment - Programming",
  "c-programming":
    "Training Identification Assessment - C Programming",
  python: "Training Identification Assessment - Python",
  "web-technology":
    "Training Identification Assessment - Web Technology",
};

/* =========================
   MAIN COMPONENT
========================= */

function AptitudeExam() {
  const { subject } = useParams();

  const questions =
    questionBanks[subject] || aptitudeQuestions;

  const title =
    subjectTitles[subject] ||
    "Training Identification Assessment - Aptitude";

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState({});

  const [completedQuestions, setCompletedQuestions] =
    useState([]);

  const [error, setError] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const question = questions[currentQuestion];

  const selectedAnswer =
    selectedAnswers[question.id];

  /* =========================
     SELECT OPTION
  ========================= */

  const handleOptionSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [question.id]: option,
    });

    setError("");
  };

  /* =========================
     NEXT
  ========================= */

  const handleNext = () => {
    if (!selectedAnswer) {
      setError(
        "Please select an option before continuing."
      );
      return;
    }

    setError("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    }
  };

  /* =========================
     PREVIOUS
  ========================= */

  const handlePrevious = () => {
    setError("");

    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  };

  /* =========================
     COMPLETE
  ========================= */

  const handleComplete = () => {
    if (!selectedAnswer) {
      setError(
        "Please select an option before completing."
      );
      return;
    }

    setError("");

    if (!completedQuestions.includes(question.id)) {
      setCompletedQuestions([
        ...completedQuestions,
        question.id,
      ]);
    }
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setError(
        "Please select an option before submitting."
      );
      return;
    }

    setError("");

    setSubmitted(true);
  };

  /* =========================
     THANK YOU PAGE
  ========================= */

  if (submitted) {
    return (
      <div className="exam-page">

        <div
          className="question-card"
          style={{
            textAlign: "center",
            marginTop: "100px",
            padding: "60px",
          }}
        >

          <h1>Thank You!</h1>

          <p>
            Your assessment has been
            completed successfully.
          </p>

          <p>
            Your responses have been submitted.
          </p>

        </div>

      </div>
    );
  }

  const isLastQuestion =
    currentQuestion === questions.length - 1;

  const isCompleted =
    completedQuestions.includes(question.id);

  /* =========================
     UI
  ========================= */

  return (
    <div className="exam-page">

      {/* HEADER */}

      <div className="exam-header">

        <h1>{title}</h1>

        <div className="exam-progress">
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </div>

      </div>

      {/* CONTAINER */}

      <div className="exam-container">

        <div className="question-card">

          {/* QUESTION TOP */}

          <div className="question-top">

            <div className="question-number">
              Question {currentQuestion + 1}
            </div>

            <div className="question-badges">

              <span
                className={`difficulty ${question.difficulty.toLowerCase()}`}
              >
                {question.difficulty}
              </span>

              <span className="mcq-badge">
                {question.type}
              </span>

            </div>

          </div>

          {/* QUESTION */}

          <h2>{question.question}</h2>

          {/* OPTIONS */}

          <div className="options">

            {question.options.map(
              (option, index) => {

                const letter =
                  String.fromCharCode(
                    65 + index
                  );

                return (
                  <div
                    key={option}
                    className={`option ${
                      selectedAnswer === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleOptionSelect(
                        option
                      )
                    }
                  >

                    <span className="option-letter">
                      {letter}
                    </span>

                    <span>
                      {option}
                    </span>

                  </div>
                );
              }
            )}

          </div>

          {/* ERROR */}

          {error && (
            <p
              style={{
                color: "red",
                marginTop: "15px",
                fontWeight: "500",
              }}
            >
              {error}
            </p>
          )}

          {/* STATUS */}

          <div className="question-status">

            {isCompleted ? (
              <span className="completed">
                ✓ Completed
              </span>
            ) : (
              <span className="pending">
                Next pending
              </span>
            )}

          </div>

          {/* BUTTONS */}

          <div className="exam-buttons">

            <button
              className="previous-btn"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            {!isLastQuestion && (
              <button
                className="next-btn"
                onClick={handleNext}
              >
                Next
              </button>
            )}

            <button
              className="complete-btn"
              onClick={handleComplete}
            >
              Mark as Complete
            </button>

            {isLastQuestion && (
              <button
                className="next-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AptitudeExam;