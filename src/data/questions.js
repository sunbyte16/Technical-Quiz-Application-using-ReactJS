export const questions = [
  // C Programming
  {
    id: 1,
    question: "Which of the following is the correct way to declare a pointer in C?",
    options: ["int ptr;", "int *ptr;", "int &ptr;", "pointer int ptr;"],
    correctAnswer: 1,
    category: "C"
  },
  {
    id: 2,
    question: "What is the size of int data type in C (on most systems)?",
    options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
    correctAnswer: 1,
    category: "C"
  },
  {
    id: 3,
    question: "Which function is used to allocate memory dynamically in C?",
    options: ["alloc()", "malloc()", "calloc()", "Both malloc() and calloc()"],
    correctAnswer: 3,
    category: "C"
  },
  {
    id: 4,
    question: "What does the 'static' keyword do in C?",
    options: ["Makes variable global", "Preserves variable value between function calls", "Makes variable constant", "Allocates memory on heap"],
    correctAnswer: 1,
    category: "C"
  },
  {
    id: 5,
    question: "Which header file is required for printf() function?",
    options: ["<stdlib.h>", "<string.h>", "<stdio.h>", "<math.h>"],
    correctAnswer: 2,
    category: "C"
  },

  // C++ Programming
  {
    id: 6,
    question: "Which of the following is NOT a feature of C++?",
    options: ["Object-oriented programming", "Function overloading", "Automatic garbage collection", "Operator overloading"],
    correctAnswer: 2,
    category: "C++"
  },
  {
    id: 7,
    question: "What is the correct syntax for inheritance in C++?",
    options: ["class Child extends Parent", "class Child : public Parent", "class Child inherits Parent", "class Child -> Parent"],
    correctAnswer: 1,
    category: "C++"
  },
  {
    id: 8,
    question: "Which operator is used for dynamic memory allocation in C++?",
    options: ["malloc", "new", "alloc", "create"],
    correctAnswer: 1,
    category: "C++"
  },
  {
    id: 9,
    question: "What is a virtual function in C++?",
    options: ["A function that doesn't exist", "A function that can be overridden in derived classes", "A function without implementation", "A static function"],
    correctAnswer: 1,
    category: "C++"
  },
  {
    id: 10,
    question: "Which access specifier allows access from anywhere?",
    options: ["private", "protected", "public", "friend"],
    correctAnswer: 2,
    category: "C++"
  },

  // Java Programming
  {
    id: 11,
    question: "Which of the following is NOT a Java keyword?",
    options: ["static", "Boolean", "protected", "void"],
    correctAnswer: 1,
    category: "Java"
  },
  {
    id: 12,
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    correctAnswer: 1,
    category: "Java"
  },
  {
    id: 13,
    question: "Which method is called when an object is created in Java?",
    options: ["main()", "constructor", "init()", "start()"],
    correctAnswer: 1,
    category: "Java"
  },
  {
    id: 14,
    question: "What does JVM stand for?",
    options: ["Java Virtual Machine", "Java Variable Method", "Java Verified Mode", "Java Vector Machine"],
    correctAnswer: 0,
    category: "Java"
  },
  {
    id: 15,
    question: "Which collection class allows duplicate elements?",
    options: ["Set", "HashSet", "ArrayList", "TreeSet"],
    correctAnswer: 2,
    category: "Java"
  },

  // Python Programming
  {
    id: 16,
    question: "Which of the following is used to define a function in Python?",
    options: ["function", "def", "define", "func"],
    correctAnswer: 1,
    category: "Python"
  },
  {
    id: 17,
    question: "What is the correct way to create a list in Python?",
    options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
    correctAnswer: 1,
    category: "Python"
  },
  {
    id: 18,
    question: "Which method is used to add an element to the end of a list?",
    options: ["add()", "append()", "insert()", "push()"],
    correctAnswer: 1,
    category: "Python"
  },
  {
    id: 19,
    question: "What does the 'len()' function return?",
    options: ["Length of an object", "Last element", "First element", "Type of object"],
    correctAnswer: 0,
    category: "Python"
  },
  {
    id: 20,
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "exp", "pow"],
    correctAnswer: 1,
    category: "Python"
  },

  // HTML
  {
    id: 21,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    correctAnswer: 0,
    category: "HTML"
  },
  {
    id: 22,
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<css>", "<script>", "<style>", "<link>"],
    correctAnswer: 2,
    category: "HTML"
  },
  {
    id: 23,
    question: "Which attribute specifies the URL of the page the link goes to?",
    options: ["link", "src", "href", "url"],
    correctAnswer: 2,
    category: "HTML"
  },
  {
    id: 24,
    question: "Which HTML element is used to specify a footer for a document?",
    options: ["<bottom>", "<section>", "<footer>", "<end>"],
    correctAnswer: 2,
    category: "HTML"
  },
  {
    id: 25,
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<lb>", "<break>", "<br>", "<newline>"],
    correctAnswer: 2,
    category: "HTML"
  },

  // CSS
  {
    id: 26,
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctAnswer: 1,
    category: "CSS"
  },
  {
    id: 27,
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "bg-color"],
    correctAnswer: 2,
    category: "CSS"
  },
  {
    id: 28,
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: 2,
    category: "CSS"
  },
  {
    id: 29,
    question: "How do you select an element with id 'demo'?",
    options: [".demo", "#demo", "demo", "*demo"],
    correctAnswer: 1,
    category: "CSS"
  },
  {
    id: 30,
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight", "font"],
    correctAnswer: 0,
    category: "CSS"
  },

  // JavaScript
  {
    id: 31,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1,
    category: "JavaScript"
  },
  {
    id: 32,
    question: "Which of the following is a JavaScript data type?",
    options: ["undefined", "number", "boolean", "All of the above"],
    correctAnswer: 3,
    category: "JavaScript"
  },
  {
    id: 33,
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
    correctAnswer: 1,
    category: "JavaScript"
  },
  {
    id: 34,
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "add()", "append()", "insert()"],
    correctAnswer: 0,
    category: "JavaScript"
  },
  {
    id: 35,
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
    correctAnswer: 1,
    category: "JavaScript"
  },

  // ReactJS
  {
    id: 36,
    question: "What is ReactJS?",
    options: ["A database", "A JavaScript library for building user interfaces", "A web server", "A CSS framework"],
    correctAnswer: 1,
    category: "ReactJS"
  },
  {
    id: 37,
    question: "Which method is used to create components in React?",
    options: ["React.createComponent()", "React.createElement()", "createComponent()", "Both A and B"],
    correctAnswer: 1,
    category: "ReactJS"
  },
  {
    id: 38,
    question: "What is JSX?",
    options: ["A JavaScript extension", "A template engine", "A syntax extension for JavaScript", "A CSS preprocessor"],
    correctAnswer: 2,
    category: "ReactJS"
  },
  {
    id: 39,
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1,
    category: "ReactJS"
  },
  {
    id: 40,
    question: "What is the virtual DOM?",
    options: ["A copy of the real DOM kept in memory", "A new version of HTML", "A JavaScript framework", "A CSS technique"],
    correctAnswer: 0,
    category: "ReactJS"
  },

  // DBMS
  {
    id: 41,
    question: "What does DBMS stand for?",
    options: ["Database Management System", "Data Backup Management System", "Digital Business Management System", "Database Monitoring System"],
    correctAnswer: 0,
    category: "DBMS"
  },
  {
    id: 42,
    question: "Which of the following is NOT a type of database relationship?",
    options: ["One-to-One", "One-to-Many", "Many-to-Many", "All-to-All"],
    correctAnswer: 3,
    category: "DBMS"
  },
  {
    id: 43,
    question: "What is a primary key?",
    options: ["A key that opens the database", "A unique identifier for a record", "The first key in a table", "A password for database access"],
    correctAnswer: 1,
    category: "DBMS"
  },
  {
    id: 44,
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["GET", "SELECT", "RETRIEVE", "FETCH"],
    correctAnswer: 1,
    category: "DBMS"
  },
  {
    id: 45,
    question: "What is normalization in DBMS?",
    options: ["Making data normal", "Organizing data to reduce redundancy", "Backing up data", "Encrypting data"],
    correctAnswer: 1,
    category: "DBMS"
  },

  // OOPs
  {
    id: 46,
    question: "What does OOP stand for?",
    options: ["Object-Oriented Programming", "Open-Oriented Programming", "Objective-Oriented Programming", "Operational-Oriented Programming"],
    correctAnswer: 0,
    category: "OOPs"
  },
  {
    id: 47,
    question: "Which of the following is NOT a pillar of OOP?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
    correctAnswer: 3,
    category: "OOPs"
  },
  {
    id: 48,
    question: "What is encapsulation?",
    options: ["Hiding implementation details", "Creating multiple classes", "Inheriting properties", "Overloading methods"],
    correctAnswer: 0,
    category: "OOPs"
  },
  {
    id: 49,
    question: "What is inheritance?",
    options: ["Creating new objects", "Acquiring properties from parent class", "Hiding data", "Method overloading"],
    correctAnswer: 1,
    category: "OOPs"
  },
  {
    id: 50,
    question: "What is polymorphism?",
    options: ["Having multiple forms", "Single inheritance", "Data hiding", "Object creation"],
    correctAnswer: 0,
    category: "OOPs"
  },

  // Data Structures
  {
    id: 51,
    question: "Which data structure follows LIFO principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    category: "Data Structures"
  },
  {
    id: 52,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    category: "Data Structures"
  },
  {
    id: 53,
    question: "Which data structure is used for BFS traversal?",
    options: ["Stack", "Queue", "Array", "Tree"],
    correctAnswer: 1,
    category: "Data Structures"
  },
  {
    id: 54,
    question: "What is a hash table?",
    options: ["A sorted array", "A data structure that maps keys to values", "A type of tree", "A linear data structure"],
    correctAnswer: 1,
    category: "Data Structures"
  },
  {
    id: 55,
    question: "Which sorting algorithm has the best average time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
    correctAnswer: 2,
    category: "Data Structures"
  }
];