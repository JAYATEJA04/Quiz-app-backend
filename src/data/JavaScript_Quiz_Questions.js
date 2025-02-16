export const JS_Fundamentals_Quiz_Questions = [
  {
    id: 1,
    question: "What is the output of typeof null?",
    options: [
      { optionId: 1, optionText: "null" },
      { optionId: 2, optionText: "undefined" },
      { optionId: 3, optionText: "object" },
      { optionId: 4, optionText: "number" },
    ],
    correctAnswer: 3,
    explanation:
      "In JavaScript, typeof null returns 'object'. This is a known language quirk that has persisted for historical reasons.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
  },
  {
    id: 2,
    question:
      "Which of the following is a correct way to declare a variable in modern JavaScript?",
    options: [
      { optionId: 1, optionText: "var x = 5;" },
      { optionId: 2, optionText: "let x = 5;" },
      { optionId: 3, optionText: "const x = 5;" },
      { optionId: 4, optionText: "All of the above" },
    ],
    correctAnswer: 4,
    explanation:
      "JavaScript supports three ways to declare variables: var (function-scoped), let (block-scoped), and const (block-scoped constant).",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations",
  },
  {
    id: 3,
    question: "What is the result of '5' + 2 in JavaScript?",
    options: [
      { optionId: 1, optionText: "7" },
      { optionId: 2, optionText: "52" },
      { optionId: 3, optionText: "NaN" },
      { optionId: 4, optionText: "undefined" },
    ],
    correctAnswer: 2,
    explanation:
      "When using the + operator with a string and a number, JavaScript converts the number to a string and performs concatenation.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
  },
  {
    id: 4,
    question: "Which statement correctly creates an empty array?",
    options: [
      { optionId: 1, optionText: "let arr = []" },
      { optionId: 2, optionText: "let arr = new Array" },
      { optionId: 3, optionText: "let arr = Array()" },
      { optionId: 4, optionText: "All of the above" },
    ],
    correctAnswer: 4,
    explanation:
      "Arrays in JavaScript can be created using literal notation [] or the Array constructor.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },
  {
    id: 5,
    question: "What is the scope of a variable declared with 'let'?",
    options: [
      { optionId: 1, optionText: "Function scope" },
      { optionId: 2, optionText: "Block scope" },
      { optionId: 3, optionText: "Global scope" },
      { optionId: 4, optionText: "Module scope" },
    ],
    correctAnswer: 2,
    explanation:
      "Variables declared with 'let' have block scope, meaning they are only accessible within the block they are declared in.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
  },
  {
    id: 6,
    question: "Which operator is used for strict equality comparison?",
    options: [
      { optionId: 1, optionText: "==" },
      { optionId: 2, optionText: "===" },
      { optionId: 3, optionText: "=" },
      { optionId: 4, optionText: "!=" },
    ],
    correctAnswer: 2,
    explanation:
      "The === operator performs strict equality comparison without type coercion.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality",
  },
  {
    id: 7,
    question: "What is the result of Boolean('')?",
    options: [
      { optionId: 1, optionText: "true" },
      { optionId: 2, optionText: "false" },
      { optionId: 3, optionText: "undefined" },
      { optionId: 4, optionText: "null" },
    ],
    correctAnswer: 2,
    explanation: "An empty string is considered a falsy value in JavaScript.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
  },
  {
    id: 8,
    question: "Which method is used to add elements to the end of an array?",
    options: [
      { optionId: 1, optionText: "push()" },
      { optionId: 2, optionText: "pop()" },
      { optionId: 3, optionText: "shift()" },
      { optionId: 4, optionText: "unshift()" },
    ],
    correctAnswer: 1,
    explanation:
      "The push() method adds one or more elements to the end of an array and returns the new length.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
  },
  {
    id: 9,
    question:
      "What is the correct way to write a single-line comment in JavaScript?",
    options: [
      { optionId: 1, optionText: "/* comment */" },
      { optionId: 2, optionText: "// comment" },
      { optionId: 3, optionText: "# comment" },
      { optionId: 4, optionText: "<!-- comment -->" },
    ],
    correctAnswer: 2,
    explanation: "Single-line comments in JavaScript start with //.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#comments",
  },
  {
    id: 10,
    question: "What is the result of typeof undefined?",
    options: [
      { optionId: 1, optionText: "undefined" },
      { optionId: 2, optionText: "object" },
      { optionId: 3, optionText: "string" },
      { optionId: 4, optionText: "null" },
    ],
    correctAnswer: 1,
    explanation:
      "typeof undefined returns 'undefined', which is a primitive type in JavaScript.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof",
  },
  {
    id: 11,
    question: "Which loop is best suited for iterating over array elements?",
    options: [
      { optionId: 1, optionText: "for loop" },
      { optionId: 2, optionText: "while loop" },
      { optionId: 3, optionText: "for...of loop" },
      { optionId: 4, optionText: "do...while loop" },
    ],
    correctAnswer: 3,
    explanation:
      "for...of loop is designed specifically for iterating over iterable objects like arrays.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",
  },
  {
    id: 12,
    question: "What is the result of 3 + '3'?",
    options: [
      { optionId: 1, optionText: "6" },
      { optionId: 2, optionText: "33" },
      { optionId: 3, optionText: "NaN" },
      { optionId: 4, optionText: "undefined" },
    ],
    correctAnswer: 2,
    explanation:
      "When adding a number and string, JavaScript converts the number to a string and performs concatenation.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
  },
  {
    id: 13,
    question: "Which method is used to remove the last element from an array?",
    options: [
      { optionId: 1, optionText: "shift()" },
      { optionId: 2, optionText: "unshift()" },
      { optionId: 3, optionText: "pop()" },
      { optionId: 4, optionText: "push()" },
    ],
    correctAnswer: 3,
    explanation:
      "The pop() method removes the last element from an array and returns that element.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
  },
  {
    id: 14,
    question: "What is the default value of an uninitialized variable?",
    options: [
      { optionId: 1, optionText: "null" },
      { optionId: 2, optionText: "undefined" },
      { optionId: 3, optionText: "0" },
      { optionId: 4, optionText: "''" },
    ],
    correctAnswer: 2,
    explanation:
      "Variables that are declared but not initialized have the value undefined.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
  },
  {
    id: 15,
    question: "Which operator is used for logical AND?",
    options: [
      { optionId: 1, optionText: "&" },
      { optionId: 2, optionText: "&&" },
      { optionId: 3, optionText: "AND" },
      { optionId: 4, optionText: "|" },
    ],
    correctAnswer: 2,
    explanation:
      "The && operator performs logical AND operation between two operands.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND",
  },
];

export const JS_Intermediate_Quiz_Questions = [
  {
    id: 1,
    question: "What is the difference between localStorage and sessionStorage?",
    options: [
      { optionId: 1, optionText: "localStorage is larger in size" },
      {
        optionId: 2,
        optionText: "sessionStorage persists after browser close",
      },
      { optionId: 3, optionText: "localStorage persists after browser close" },
      { optionId: 4, optionText: "They are exactly the same" },
    ],
    correctAnswer: 3,
    explanation:
      "While both store data in the browser, localStorage data persists even after the browser is closed, while sessionStorage data is cleared when the session ends.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
  },
  {
    id: 2,
    question: "What is the purpose of the MutationObserver API?",
    options: [
      { optionId: 1, optionText: "To observe changes in DOM elements" },
      { optionId: 2, optionText: "To detect JavaScript mutations" },
      { optionId: 3, optionText: "To track variable changes" },
      { optionId: 4, optionText: "To monitor network requests" },
    ],
    correctAnswer: 1,
    explanation:
      "MutationObserver provides a way to watch for changes being made to the DOM tree, such as attributes, text content, or child elements.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver",
  },
  {
    id: 3,
    question:
      "What is the difference between Promise.all() and Promise.race()?",
    options: [
      {
        optionId: 1,
        optionText: "Promise.all() returns first resolved promise",
      },
      { optionId: 2, optionText: "Promise.race() waits for all promises" },
      {
        optionId: 3,
        optionText: "Promise.race() returns first settled promise",
      },
      { optionId: 4, optionText: "They are the same" },
    ],
    correctAnswer: 3,
    explanation:
      "Promise.race() returns the first promise that settles (resolves or rejects), while Promise.all() waits for all promises to resolve.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",
  },
  {
    id: 4,
    question: "What is event capturing?",
    options: [
      { optionId: 1, optionText: "Events propagating from parent to target" },
      { optionId: 2, optionText: "Events propagating from target to parent" },
      { optionId: 3, optionText: "Events staying at target" },
      { optionId: 4, optionText: "Events moving between siblings" },
    ],
    correctAnswer: 1,
    explanation:
      "Event capturing is a phase where the event travels from the root element down to the target element, opposite of bubbling.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture",
  },
  {
    id: 5,
    question: "What is the purpose of using the 'debugger' statement?",
    options: [
      { optionId: 1, optionText: "To pause code execution in debuggers" },
      { optionId: 2, optionText: "To remove bugs automatically" },
      { optionId: 3, optionText: "To log errors to console" },
      { optionId: 4, optionText: "To prevent code execution" },
    ],
    correctAnswer: 1,
    explanation:
      "The debugger statement pauses code execution if developer tools are open, allowing for debugging.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger",
  },
  {
    id: 6,
    question: "What is the purpose of using the 'try...catch...finally' block?",
    options: [
      { optionId: 1, optionText: "To handle runtime errors" },
      { optionId: 2, optionText: "To improve code performance" },
      { optionId: 3, optionText: "To define new variables" },
      { optionId: 4, optionText: "To create loops" },
    ],
    correctAnswer: 1,
    explanation:
      "try...catch...finally allows you to handle errors gracefully and ensure certain code runs regardless of errors.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",
  },
  {
    id: 7,
    question: "What is the purpose of the CustomEvent constructor?",
    options: [
      { optionId: 1, optionText: "To create custom DOM events" },
      { optionId: 2, optionText: "To modify existing events" },
      { optionId: 3, optionText: "To remove event listeners" },
      { optionId: 4, optionText: "To prevent event bubbling" },
    ],
    correctAnswer: 1,
    explanation:
      "CustomEvent allows you to create custom events that can carry additional data and be dispatched on DOM elements.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent",
  },
  {
    id: 8,
    question:
      "What is the difference between 'defer' and 'async' script attributes?",
    options: [
      { optionId: 1, optionText: "No difference" },
      { optionId: 2, optionText: "defer maintains order, async doesn't" },
      { optionId: 3, optionText: "async is faster" },
      { optionId: 4, optionText: "defer is deprecated" },
    ],
    correctAnswer: 2,
    explanation:
      "defer scripts execute in order after HTML is parsed, while async scripts execute as soon as they're downloaded.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script",
  },
  {
    id: 9,
    question: "What is the purpose of using WebSockets?",
    options: [
      { optionId: 1, optionText: "For real-time bidirectional communication" },
      { optionId: 2, optionText: "For storing data locally" },
      { optionId: 3, optionText: "For handling form submissions" },
      { optionId: 4, optionText: "For making HTTP requests" },
    ],
    correctAnswer: 1,
    explanation:
      "WebSockets provide a persistent connection between client and server for real-time data exchange.",
    referenceLink: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
  },
  {
    id: 10,
    question: "What is the purpose of the 'new.target' property?",
    options: [
      { optionId: 1, optionText: "To detect if function was called with new" },
      { optionId: 2, optionText: "To create new objects" },
      { optionId: 3, optionText: "To set constructor targets" },
      { optionId: 4, optionText: "To define class properties" },
    ],
    correctAnswer: 1,
    explanation:
      "new.target lets you detect whether a function or constructor was called using the new operator.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target",
  },
  {
    id: 11,
    question: "What is the purpose of using the 'import.meta' object?",
    options: [
      { optionId: 1, optionText: "To access module's metadata" },
      { optionId: 2, optionText: "To import modules dynamically" },
      { optionId: 3, optionText: "To modify module behavior" },
      { optionId: 4, optionText: "To export module data" },
    ],
    correctAnswer: 1,
    explanation:
      "import.meta provides metadata about the current module, such as its URL.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta",
  },
  {
    id: 12,
    question:
      "What is the advantage of using requestAnimationFrame over setInterval?",
    options: [
      { optionId: 1, optionText: "Better animation performance" },
      { optionId: 2, optionText: "Easier to implement" },
      { optionId: 3, optionText: "Works with all browsers" },
      { optionId: 4, optionText: "More precise timing" },
    ],
    correctAnswer: 1,
    explanation:
      "requestAnimationFrame synchronizes with the browser's refresh rate and pauses in inactive tabs.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame",
  },
  {
    id: 13,
    question: "What is the purpose of using the URL API?",
    options: [
      { optionId: 1, optionText: "To parse and manipulate URLs" },
      { optionId: 2, optionText: "To make HTTP requests" },
      { optionId: 3, optionText: "To handle routing" },
      { optionId: 4, optionText: "To validate web addresses" },
    ],
    correctAnswer: 1,
    explanation:
      "The URL API provides methods for parsing, constructing, normalizing, and encoding URLs.",
    referenceLink: "https://developer.mozilla.org/en-US/docs/Web/API/URL",
  },
  {
    id: 14,
    question: "What is the purpose of using the FormData API?",
    options: [
      { optionId: 1, optionText: "To construct form data sets" },
      { optionId: 2, optionText: "To validate form inputs" },
      { optionId: 3, optionText: "To style form elements" },
      { optionId: 4, optionText: "To handle form submission" },
    ],
    correctAnswer: 1,
    explanation:
      "FormData provides a way to easily construct a set of key/value pairs representing form fields and values.",
    referenceLink: "https://developer.mozilla.org/en-US/docs/Web/API/FormData",
  },
  {
    id: 15,
    question: "What is the purpose of using the IntersectionObserver API?",
    options: [
      { optionId: 1, optionText: "To detect element visibility" },
      { optionId: 2, optionText: "To observe DOM mutations" },
      { optionId: 3, optionText: "To track mouse movements" },
      { optionId: 4, optionText: "To handle scroll events" },
    ],
    correctAnswer: 1,
    explanation:
      "IntersectionObserver provides a way to asynchronously observe changes in the intersection of a target element with its parent or viewport.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver",
  },
];

export const JS_Advance_Quiz_Questions = [
  {
    id: 1,
    question:
      "What is the output of the following code?\n\nObject.prototype.toString.call(Object.prototype.__proto__)",
    options: [
      { optionId: 1, optionText: "[object Object]" },
      { optionId: 2, optionText: "[object Null]" },
      { optionId: 3, optionText: "[object Function]" },
      { optionId: 4, optionText: "TypeError" },
    ],
    correctAnswer: 2,
    explanation:
      "Object.prototype is the end of the prototype chain. Its __proto__ is null, and when toString is called on null, it returns '[object Null]'.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto",
  },
  {
    id: 2,
    question:
      "In the context of JavaScript engines, what is 'hidden class optimization'?",
    options: [
      { optionId: 1, optionText: "A way to encrypt private class properties" },
      {
        optionId: 2,
        optionText: "An internal mechanism to optimize object property access",
      },
      {
        optionId: 3,
        optionText: "A special class that cannot be instantiated",
      },
      {
        optionId: 4,
        optionText: "A way to hide class methods from external access",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Hidden classes are an optimization technique used by V8 and other engines to improve property access performance by creating internal layouts for objects with the same structure.",
    referenceLink: "https://v8.dev/blog/fast-properties",
  },
  {
    id: 3,
    question: "What is the primary purpose of the Proxy's 'has' trap?",
    options: [
      { optionId: 1, optionText: "To intercept property lookup operations" },
      { optionId: 2, optionText: "To intercept 'in' operator usage" },
      { optionId: 3, optionText: "To check if a property exists" },
      { optionId: 4, optionText: "To validate property assignments" },
    ],
    correctAnswer: 2,
    explanation:
      "The 'has' trap intercepts the 'in' operator, allowing custom logic when checking for property existence in an object.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has",
  },
  {
    id: 4,
    question: "What happens when you use SharedArrayBuffer with Web Workers?",
    options: [
      { optionId: 1, optionText: "Data is copied between workers" },
      { optionId: 2, optionText: "Memory is shared between workers" },
      { optionId: 3, optionText: "Workers cannot access the buffer" },
      { optionId: 4, optionText: "It throws a security error" },
    ],
    correctAnswer: 2,
    explanation:
      "SharedArrayBuffer allows multiple Web Workers to share the same memory space, enabling true concurrent access to data.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer",
  },
  {
    id: 5,
    question: "What is the purpose of the 'Intl.Segmenter' API?",
    options: [
      { optionId: 1, optionText: "To split strings into arrays" },
      { optionId: 2, optionText: "To segment text into linguistic units" },
      { optionId: 3, optionText: "To parse JSON data" },
      { optionId: 4, optionText: "To divide arrays into chunks" },
    ],
    correctAnswer: 2,
    explanation:
      "Intl.Segmenter enables language-sensitive text segmentation, allowing proper breaking of text into words, sentences, or other units based on locale.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter",
  },
  {
    id: 6,
    question: "What is tail call optimization in JavaScript?",
    options: [
      { optionId: 1, optionText: "A way to optimize loops" },
      {
        optionId: 2,
        optionText: "An optimization for recursive function calls",
      },
      { optionId: 3, optionText: "A method to reduce memory usage" },
      {
        optionId: 4,
        optionText: "A technique for optimizing async operations",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Tail call optimization allows recursive functions to execute in constant stack space, preventing stack overflow in proper tail calls.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
  },
  {
    id: 7,
    question: "What is the purpose of the 'FinalizationRegistry' object?",
    options: [
      { optionId: 1, optionText: "To manage garbage collection" },
      { optionId: 2, optionText: "To finalize class definitions" },
      { optionId: 3, optionText: "To close database connections" },
      { optionId: 4, optionText: "To terminate Web Workers" },
    ],
    correctAnswer: 1,
    explanation:
      "FinalizationRegistry lets you request a callback when an object is garbage collected, useful for resource cleanup.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry",
  },
  {
    id: 8,
    question: "What is the significance of the 'Temporal' API?",
    options: [
      { optionId: 1, optionText: "For basic date operations" },
      { optionId: 2, optionText: "For managing timeouts" },
      { optionId: 3, optionText: "For modern date/time calculations" },
      { optionId: 4, optionText: "For scheduling tasks" },
    ],
    correctAnswer: 3,
    explanation:
      "Temporal is a modern API for working with dates, times, and timestamps, providing better accuracy and functionality than the Date object.",
    referenceLink: "https://tc39.es/proposal-temporal/docs/",
  },
  {
    id: 9,
    question: "What is the purpose of using a WeakRef?",
    options: [
      { optionId: 1, optionText: "To create weak passwords" },
      { optionId: 2, optionText: "To hold a weak reference to an object" },
      { optionId: 3, optionText: "To reference private properties" },
      { optionId: 4, optionText: "To create temporary variables" },
    ],
    correctAnswer: 2,
    explanation:
      "WeakRef allows holding a weak reference to an object, which doesn't prevent the object from being garbage collected.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef",
  },
  {
    id: 10,
    question: "What is the purpose of the 'Atomics' object in JavaScript?",
    options: [
      {
        optionId: 1,
        optionText: "To perform atomic operations on shared memory",
      },
      { optionId: 2, optionText: "To create small, independent functions" },
      { optionId: 3, optionText: "To manage DOM updates" },
      { optionId: 4, optionText: "To handle micro-tasks" },
    ],
    correctAnswer: 1,
    explanation:
      "Atomics provides operations that atomically read and write shared memory, used with SharedArrayBuffer.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics",
  },
  {
    id: 11,
    question: "What is the purpose of the 'queueMicrotask' function?",
    options: [
      { optionId: 1, optionText: "To queue a task in the microtask queue" },
      { optionId: 2, optionText: "To create a new Web Worker" },
      { optionId: 3, optionText: "To schedule macrotasks" },
      { optionId: 4, optionText: "To manage event loop timing" },
    ],
    correctAnswer: 1,
    explanation:
      "queueMicrotask schedules a microtask to be executed before the next macrotask, useful for ensuring consistent ordering of operations.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask",
  },
  {
    id: 12,
    question: "What is the purpose of using TypedArrays in JavaScript?",
    options: [
      { optionId: 1, optionText: "To enforce type checking" },
      { optionId: 2, optionText: "To work with binary data efficiently" },
      { optionId: 3, optionText: "To create arrays with type hints" },
      { optionId: 4, optionText: "To optimize array operations" },
    ],
    correctAnswer: 2,
    explanation:
      "TypedArrays provide a mechanism for accessing raw binary data buffers, useful for working with WebGL, file processing, and network protocols.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays",
  },
  {
    id: 13,
    question: "What is the purpose of the 'globalThis' property?",
    options: [
      { optionId: 1, optionText: "To access global scope consistently" },
      { optionId: 2, optionText: "To create global variables" },
      { optionId: 3, optionText: "To share data between modules" },
      { optionId: 4, optionText: "To define global constants" },
    ],
    correctAnswer: 1,
    explanation:
      "globalThis provides a standard way to access the global object across different JavaScript environments (browser, Node.js, WebWorkers).",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis",
  },
  {
    id: 14,
    question: "What is the purpose of using the 'AbortController' interface?",
    options: [
      { optionId: 1, optionText: "To stop program execution" },
      { optionId: 2, optionText: "To cancel async operations" },
      { optionId: 3, optionText: "To handle runtime errors" },
      { optionId: 4, optionText: "To terminate Web Workers" },
    ],
    correctAnswer: 2,
    explanation:
      "AbortController allows you to abort one or more Web requests as and when desired, useful for canceling fetch requests and other async operations.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/API/AbortController",
  },
  {
    id: 15,
    question: "What is the significance of the 'Reflect' API?",
    options: [
      { optionId: 1, optionText: "To create mirrors of objects" },
      { optionId: 2, optionText: "To perform metaprogramming operations" },
      { optionId: 3, optionText: "To reflect DOM changes" },
      { optionId: 4, optionText: "To handle HTTP responses" },
    ],
    correctAnswer: 2,
    explanation:
      "Reflect provides methods for interceptable JavaScript operations, useful for metaprogramming and implementing proxies.",
    referenceLink:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect",
  },
];
