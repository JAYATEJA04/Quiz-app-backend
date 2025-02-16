export const ReactJS_Fundamentals_Quiz_Questions = [
  {
    id: 1,
    question:
      "What is the correct way to create a functional component in React?",
    options: [
      {
        optionId: 1,
        optionText: "function MyComponent() { return <div>Hello</div>; }",
      },
      {
        optionId: 2,
        optionText:
          "class MyComponent extends React.Component { render() { return <div>Hello</div>; } }",
      },
      {
        optionId: 3,
        optionText: "const MyComponent = () => { <div>Hello</div> }",
      },
      {
        optionId: 4,
        optionText: "var MyComponent = function() { return <div>Hello</div>; }",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Functional components in React are JavaScript functions that return JSX. The first option correctly defines a functional component.",
    referenceLink: "https://react.dev/learn/your-first-component",
  },
  {
    id: 2,
    question:
      "Which of the following is the correct syntax for using JavaScript expressions in JSX?",
    options: [
      { optionId: 1, optionText: "{expression}" },
      { optionId: 2, optionText: "{{expression}}" },
      { optionId: 3, optionText: "<%expression%>" },
      { optionId: 4, optionText: "${expression}" },
    ],
    correctAnswer: 1,
    explanation:
      "In JSX, you can embed any JavaScript expression by wrapping it in curly braces {}.",
    referenceLink:
      "https://react.dev/learn/javascript-in-jsx-with-curly-braces",
  },
  {
    id: 3,
    question: 'How do you pass a prop called "name" to a component?',
    options: [
      { optionId: 1, optionText: '<Component name="John" />' },
      { optionId: 2, optionText: '<Component props.name="John" />' },
      { optionId: 3, optionText: '<Component "name"="John" />' },
      { optionId: 4, optionText: '<Component {name: "John"} />' },
    ],
    correctAnswer: 1,
    explanation:
      "Props are passed to components as attributes in JSX, similar to HTML attributes.",
    referenceLink: "https://react.dev/learn/passing-props-to-a-component",
  },
  {
    id: 4,
    question: "What is the correct way to render a list of items in React?",
    options: [
      { optionId: 1, optionText: "Using a for loop inside JSX" },
      { optionId: 2, optionText: "Using the map() function" },
      { optionId: 3, optionText: "Using a while loop inside JSX" },
      { optionId: 4, optionText: "Using the forEach() function" },
    ],
    correctAnswer: 2,
    explanation:
      "The map() function is commonly used in React to transform an array of data into an array of JSX elements.",
    referenceLink: "https://react.dev/learn/rendering-lists",
  },
  {
    id: 5,
    question: "How do you conditionally render a component in React?",
    options: [
      { optionId: 1, optionText: "Using if-else statements in JSX" },
      { optionId: 2, optionText: "Using the ternary operator" },
      { optionId: 3, optionText: "Using logical && operator" },
      { optionId: 4, optionText: "Both b and c are correct" },
    ],
    correctAnswer: 4,
    explanation:
      "Conditional rendering in React can be achieved using the ternary operator for if-else conditions, or the logical && operator for if-only conditions.",
    referenceLink: "https://react.dev/learn/conditional-rendering",
  },
  {
    id: 6,
    question: "What is the purpose of the useState hook?",
    options: [
      { optionId: 1, optionText: "To create a new component" },
      { optionId: 2, optionText: "To manage state in functional components" },
      { optionId: 3, optionText: "To handle side effects" },
      { optionId: 4, optionText: "To optimize rendering performance" },
    ],
    correctAnswer: 2,
    explanation:
      "The useState hook allows functional components to have state variables, previously only possible in class components.",
    referenceLink: "https://react.dev/reference/react/useState",
  },
  {
    id: 7,
    question: "Which of the following is NOT a rule of JSX?",
    options: [
      { optionId: 1, optionText: "JSX tags can self-close" },
      {
        optionId: 2,
        optionText: "JSX must return multiple elements without a wrapper",
      },
      { optionId: 3, optionText: "JSX uses camelCase for attribute names" },
      {
        optionId: 4,
        optionText: "JSX allows embedding expressions in curly braces",
      },
    ],
    correctAnswer: 2,
    explanation:
      "JSX requires a single root element. Multiple elements must be wrapped in a parent element or fragment.",
    referenceLink: "https://react.dev/learn/writing-markup-with-jsx",
  },
  {
    id: 8,
    question: "How do you handle a click event in React?",
    options: [
      {
        optionId: 1,
        optionText: "<button onclick={handleClick}>Click me</button>",
      },
      {
        optionId: 2,
        optionText: "<button onClick={handleClick}>Click me</button>",
      },
      {
        optionId: 3,
        optionText: "<button on-click={handleClick}>Click me</button>",
      },
      {
        optionId: 4,
        optionText: '<button onClick="handleClick()">Click me</button>',
      },
    ],
    correctAnswer: 2,
    explanation:
      "React uses camelCase for event names (onClick) and passes a function as the event handler, not a string.",
    referenceLink: "https://react.dev/learn/responding-to-events",
  },
  {
    id: 9,
    question: "What is the correct way to update state in React?",
    options: [
      { optionId: 1, optionText: "this.state.count = this.state.count + 1" },
      { optionId: 2, optionText: "setState({ count: state.count + 1 })" },
      { optionId: 3, optionText: "setCount(count + 1)" },
      {
        optionId: 4,
        optionText: "Both b and c are correct, depending on the component type",
      },
    ],
    correctAnswer: 4,
    explanation:
      "Class components use setState(), while functional components use the state updater function returned by useState().",
    referenceLink: "https://react.dev/learn/state-a-components-memory",
  },
  {
    id: 10,
    question: "Which of the following is true about state updates in React?",
    options: [
      { optionId: 1, optionText: "They are always synchronous" },
      { optionId: 2, optionText: "They are always asynchronous" },
      {
        optionId: 3,
        optionText: "They can be either synchronous or asynchronous",
      },
      {
        optionId: 4,
        optionText: "They are only asynchronous in class components",
      },
    ],
    correctAnswer: 3,
    explanation:
      "State updates can be either synchronous or asynchronous depending on the context and the specific update operation.",
    referenceLink: "https://react.dev/learn/queueing-a-series-of-state-updates",
  },
  {
    id: 11,
    question:
      "What is the purpose of the key prop when rendering lists in React?",
    options: [
      { optionId: 1, optionText: "To style list items" },
      { optionId: 2, optionText: "To filter list items" },
      {
        optionId: 3,
        optionText:
          "To help React identify which items have changed, been added, or been removed",
      },
      { optionId: 4, optionText: "To sort list items" },
    ],
    correctAnswer: 3,
    explanation:
      "Keys help React identify which items in a list have changed, been added, or been removed, and play a crucial role in handling dynamic lists efficiently.",
    referenceLink:
      "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",
  },
  {
    id: 12,
    question: "How can you prevent a component from rendering in React?",
    options: [
      { optionId: 1, optionText: "Return null from the render method" },
      {
        optionId: 2,
        optionText: "Use the shouldComponentUpdate lifecycle method",
      },
      { optionId: 3, optionText: "Use the React.memo higher-order component" },
      { optionId: 4, optionText: "All of the above" },
    ],
    correctAnswer: 4,
    explanation:
      "A component can prevent rendering by returning null, using shouldComponentUpdate, or using React.memo for functional components.",
    referenceLink:
      "https://react.dev/reference/react/Component#conditionally-returning-null",
  },
  {
    id: 13,
    question:
      "What is the correct way to bind a method to a component instance in a class component?",
    options: [
      {
        optionId: 1,
        optionText: "this.handleClick.bind(this) in the constructor",
      },
      { optionId: 2, optionText: "Using an arrow function in the class field" },
      {
        optionId: 3,
        optionText: "Wrapping the method call in an arrow function in the JSX",
      },
      { optionId: 4, optionText: "All of the above are correct" },
    ],
    correctAnswer: 4,
    explanation:
      "Methods can be bound in the constructor, as class fields using arrow functions, or inline in the JSX using arrow functions.",
    referenceLink: "https://react.dev/learn/passing-props-to-a-component",
  },
  {
    id: 14,
    question:
      "Which of the following is NOT a valid way to define a React component?",
    options: [
      { optionId: 1, optionText: "Function declaration" },
      { optionId: 2, optionText: "Arrow function" },
      { optionId: 3, optionText: "Class extending React.Component" },
      { optionId: 4, optionText: "Object literal" },
    ],
    correctAnswer: 4,
    explanation:
      "React components can be defined using function declarations, arrow functions, or classes, but not as object literals.",
    referenceLink: "https://react.dev/learn/your-first-component",
  },
  {
    id: 15,
    question: "What is the purpose of the React.Fragment component?",
    options: [
      { optionId: 1, optionText: "To create a new DOM node" },
      {
        optionId: 2,
        optionText:
          "To group multiple elements without adding an extra DOM node",
      },
      { optionId: 3, optionText: "To memoize a component" },
      { optionId: 4, optionText: "To create a reference to a DOM node" },
    ],
    correctAnswer: 2,
    explanation:
      "React.Fragment allows you to group multiple elements without adding an extra DOM node to the rendered HTML.",
    referenceLink: "https://react.dev/reference/react/Fragment",
  },
];

export const ReactJS_Intermediate_Quiz_Questions = [
  {
    id: 1,
    question: "What is the purpose of the useReducer hook?",
    options: [
      {
        optionId: 1,
        optionText: "To manage complex state logic in components",
      },
      { optionId: 2, optionText: "To optimize component rendering" },
      { optionId: 3, optionText: "To handle side effects" },
      { optionId: 4, optionText: "To create custom hooks" },
    ],
    correctAnswer: 1,
    explanation:
      "useReducer is used for managing more complex state logic in React components, especially when the next state depends on the previous one.",
    referenceLink: "https://react.dev/reference/react/useReducer",
  },
  {
    id: 2,
    question:
      "How can you pass data deeply into a component tree without explicitly passing props at every level?",
    options: [
      { optionId: 1, optionText: "Using the useContext hook" },
      { optionId: 2, optionText: "Using the useReducer hook" },
      { optionId: 3, optionText: "Using the useMemo hook" },
      { optionId: 4, optionText: "Using the useCallback hook" },
    ],
    correctAnswer: 1,
    explanation:
      "The useContext hook allows you to subscribe to React context without introducing nesting, enabling you to pass data deeply into the component tree.",
    referenceLink: "https://react.dev/reference/react/useContext",
  },
  {
    id: 3,
    question: "What is the primary use case for the useRef hook?",
    options: [
      {
        optionId: 1,
        optionText: "To store mutable values that don't cause re-renders",
      },
      {
        optionId: 2,
        optionText: "To optimize performance of functional components",
      },
      { optionId: 3, optionText: "To create controlled form inputs" },
      { optionId: 4, optionText: "To manage component state" },
    ],
    correctAnswer: 1,
    explanation:
      "useRef is used to store mutable values that persist across re-renders without causing additional renders when they change.",
    referenceLink: "https://react.dev/reference/react/useRef",
  },
  {
    id: 4,
    question:
      "Which hook would you use to perform side effects in a functional component?",
    options: [
      { optionId: 1, optionText: "useState" },
      { optionId: 2, optionText: "useEffect" },
      { optionId: 3, optionText: "useContext" },
      { optionId: 4, optionText: "useReducer" },
    ],
    correctAnswer: 2,
    explanation:
      "The useEffect hook is used to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
    referenceLink: "https://react.dev/reference/react/useEffect",
  },
  {
    id: 5,
    question:
      "What is the purpose of the dependency array in the useEffect hook?",
    options: [
      { optionId: 1, optionText: "To specify when the effect should run" },
      { optionId: 2, optionText: "To optimize the effect's performance" },
      { optionId: 3, optionText: "To declare variables used in the effect" },
      { optionId: 4, optionText: "Both a and b are correct" },
    ],
    correctAnswer: 4,
    explanation:
      "The dependency array in useEffect specifies when the effect should run and helps optimize performance by avoiding unnecessary effect executions.",
    referenceLink:
      "https://react.dev/reference/react/useEffect#specifying-reactive-dependencies",
  },
  {
    id: 6,
    question:
      "How can you preserve state when a component is unmounted and remounted?",
    options: [
      { optionId: 1, optionText: "Using the useMemo hook" },
      { optionId: 2, optionText: "Using the useCallback hook" },
      { optionId: 3, optionText: "Using a key prop" },
      { optionId: 4, optionText: "Using the useRef hook" },
    ],
    correctAnswer: 3,
    explanation:
      "The key prop can be used to control component instances. Changing the key will unmount the old instance and mount a new one, effectively resetting its state.",
    referenceLink: "https://react.dev/learn/preserving-and-resetting-state",
  },
  {
    id: 7,
    question: "What is the primary purpose of the useContext hook?",
    options: [
      { optionId: 1, optionText: "To create a new context" },
      { optionId: 2, optionText: "To consume a context value" },
      { optionId: 3, optionText: "To provide a context value" },
      { optionId: 4, optionText: "To update a context value" },
    ],
    correctAnswer: 2,
    explanation:
      "The primary purpose of useContext is to consume (read) the current value of a context in a functional component.",
    referenceLink: "https://react.dev/reference/react/useContext",
  },
  {
    id: 8,
    question:
      "Which of the following is NOT a valid way to optimize React component performance?",
    options: [
      { optionId: 1, optionText: "Using React.memo" },
      { optionId: 2, optionText: "Using the useMemo hook" },
      { optionId: 3, optionText: "Using the useCallback hook" },
      {
        optionId: 4,
        optionText: "Using the useEffect hook with an empty dependency array",
      },
    ],
    correctAnswer: 4,
    explanation:
      "While useEffect with an empty array can optimize certain scenarios, it's not primarily a performance optimization technique like the others listed.",
    referenceLink: "https://react.dev/learn/render-and-commit",
  },
  {
    id: 9,
    question: "What is the purpose of the useLayoutEffect hook?",
    options: [
      { optionId: 1, optionText: "To perform measurements" },
      { optionId: 2, optionText: "To synchronously update the DOM" },
      {
        optionId: 3,
        optionText: "To handle side effects after all DOM mutations",
      },
      { optionId: 4, optionText: "All of the above" },
    ],
    correctAnswer: 4,
    explanation:
      "useLayoutEffect is used for all of these purposes: measurements, synchronous DOM updates, and handling effects after DOM mutations but before browser paint.",
    referenceLink: "https://react.dev/reference/react/useLayoutEffect",
  },
  {
    id: 10,
    question: "How can you implement a custom hook in React?",
    options: [
      { optionId: 1, optionText: "By using the createCustomHook function" },
      {
        optionId: 2,
        optionText: "By creating a function that uses other hooks",
      },
      { optionId: 3, optionText: "By extending the React.Hook class" },
      { optionId: 4, optionText: "By using the useCustomHook function" },
    ],
    correctAnswer: 2,
    explanation:
      'Custom hooks are created by writing a function that uses existing hooks. The function name should start with "use" by convention.',
    referenceLink: "https://react.dev/learn/reusing-logic-with-custom-hooks",
  },
  {
    id: 11,
    question:
      "What is the primary difference between useEffect and useLayoutEffect?",
    options: [
      {
        optionId: 1,
        optionText:
          "useEffect runs after the browser has painted, useLayoutEffect runs synchronously before the browser has painted",
      },
      {
        optionId: 2,
        optionText:
          "useEffect is for class components, useLayoutEffect is for functional components",
      },
      {
        optionId: 3,
        optionText:
          "useEffect is for side effects, useLayoutEffect is for state updates",
      },
      { optionId: 4, optionText: "There is no difference, they are aliases" },
    ],
    correctAnswer: 1,
    explanation:
      "useLayoutEffect runs synchronously immediately after React has performed all DOM mutations, while useEffect runs after the browser has painted.",
    referenceLink: "https://react.dev/reference/react/useLayoutEffect",
  },
  {
    id: 12,
    question: "Which hook would you use to memoize expensive computations?",
    options: [
      { optionId: 1, optionText: "useMemo" },
      { optionId: 2, optionText: "useCallback" },
      { optionId: 3, optionText: "useReducer" },
      { optionId: 4, optionText: "useRef" },
    ],
    correctAnswer: 1,
    explanation:
      "useMemo is used to memoize expensive computations so that they are only recalculated when their dependencies change.",
    referenceLink: "https://react.dev/reference/react/useMemo",
  },
  {
    id: 13,
    question:
      "What is the purpose of the key prop in React's reconciliation process?",
    options: [
      { optionId: 1, optionText: "To uniquely identify elements in a list" },
      { optionId: 2, optionText: "To optimize rendering performance" },
      { optionId: 3, optionText: "To trigger re-renders" },
      { optionId: 4, optionText: "Both a and b are correct" },
    ],
    correctAnswer: 4,
    explanation:
      "The key prop is used to uniquely identify elements in a list and helps React optimize rendering performance by efficiently updating only the changed elements.",
    referenceLink:
      "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",
  },
  {
    id: 14,
    question: "How can you skip effects from running on every render?",
    options: [
      { optionId: 1, optionText: "By using the useCallback hook" },
      {
        optionId: 2,
        optionText: "By providing a dependency array to useEffect",
      },
      { optionId: 3, optionText: "By using the useMemo hook" },
      {
        optionId: 4,
        optionText: "By returning a cleanup function from useEffect",
      },
    ],
    correctAnswer: 2,
    explanation:
      "Providing a dependency array to useEffect allows you to control when the effect runs, skipping it when the dependencies haven't changed.",
    referenceLink:
      "https://react.dev/reference/react/useEffect#specifying-reactive-dependencies",
  },
  {
    id: 15,
    question: "What is the primary use case for the useImperativeHandle hook?",
    options: [
      { optionId: 1, optionText: "To optimize component rendering" },
      { optionId: 2, optionText: "To handle form submissions" },
      {
        optionId: 3,
        optionText: "To customize the instance value exposed when using ref",
      },
      { optionId: 4, optionText: "To manage component state" },
    ],
    correctAnswer: 3,
    explanation:
      "useImperativeHandle customizes the instance value that is exposed to parent components when using ref, allowing fine-grained control over what is exposed.",
    referenceLink: "https://react.dev/reference/react/useImperativeHandle",
  },
];

export const ReactJS_Advance_Quiz_Questions = [
  {
    id: 1,
    question: "What is the purpose of React.lazy?",
    options: [
      { optionId: 1, optionText: "To implement code splitting" },
      { optionId: 2, optionText: "To optimize state updates" },
      { optionId: 3, optionText: "To handle asynchronous rendering" },
      { optionId: 4, optionText: "To implement server-side rendering" },
    ],
    correctAnswer: 1,
    explanation:
      "React.lazy is used for code splitting in React applications. It allows you to dynamically import components, which can significantly improve the performance of your app by reducing the initial bundle size.",
    referenceLink: "https://react.dev/reference/react/lazy",
  },
  {
    id: 2,
    question: "Which of the following is NOT a feature of Server Components?",
    options: [
      {
        optionId: 1,
        optionText: "They can directly access the backend resources",
      },
      { optionId: 2, optionText: "They are rendered on the client" },
      { optionId: 3, optionText: "They can't use state or effects" },
      { optionId: 4, optionText: "They help reduce the bundle size" },
    ],
    correctAnswer: 2,
    explanation:
      "Server Components are rendered on the server, not the client. This is one of their key features that distinguishes them from traditional React components.",
    referenceLink:
      "https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components",
  },
  {
    id: 3,
    question: "What is the primary purpose of the Suspense component?",
    options: [
      { optionId: 1, optionText: "To handle errors in the component tree" },
      { optionId: 2, optionText: "To optimize rendering performance" },
      {
        optionId: 3,
        optionText: "To show a fallback while content is loading",
      },
      { optionId: 4, optionText: "To implement code splitting" },
    ],
    correctAnswer: 3,
    explanation:
      "The primary purpose of Suspense is to display a fallback UI while content is loading. It's commonly used with lazy loading and data fetching.",
    referenceLink: "https://react.dev/reference/react/Suspense",
  },
  {
    id: 4,
    question:
      "What is the main advantage of using concurrent rendering in React?",
    options: [
      {
        optionId: 1,
        optionText:
          "It allows React to interrupt a long-running render to handle a high-priority update",
      },
      {
        optionId: 2,
        optionText: "It automatically optimizes all component renders",
      },
      {
        optionId: 3,
        optionText: "It eliminates the need for state management",
      },
      {
        optionId: 4,
        optionText: "It replaces the need for hooks in functional components",
      },
    ],
    correctAnswer: 1,
    explanation:
      "Concurrent rendering allows React to interrupt rendering to handle more urgent updates, improving the responsiveness of complex applications.",
    referenceLink:
      "https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react",
  },
  {
    id: 5,
    question: "Which hook would you use to defer updating a part of the UI?",
    options: [
      { optionId: 1, optionText: "useDeferredValue" },
      { optionId: 2, optionText: "useTransition" },
      { optionId: 3, optionText: "useMemo" },
      { optionId: 4, optionText: "useLayoutEffect" },
    ],
    correctAnswer: 1,
    explanation:
      "useDeferredValue is used to defer updating a part of the UI. It's useful for optimizing performance by deprioritizing less important updates.",
    referenceLink: "https://react.dev/reference/react/useDeferredValue",
  },
  {
    id: 6,
    question: "What is the purpose of the useInsertionEffect hook?",
    options: [
      { optionId: 1, optionText: "To insert elements into the DOM" },
      {
        optionId: 2,
        optionText: "To perform side effects before any DOM mutations",
      },
      { optionId: 3, optionText: "To optimize CSS-in-JS libraries" },
      { optionId: 4, optionText: "Both b and c are correct" },
    ],
    correctAnswer: 4,
    explanation:
      "useInsertionEffect is designed to perform side effects before any DOM mutations and is specifically intended to optimize CSS-in-JS libraries.",
    referenceLink: "https://react.dev/reference/react/useInsertionEffect",
  },
  {
    id: 7,
    question: "How can you implement an error boundary in React?",
    options: [
      { optionId: 1, optionText: "Using the ErrorBoundary component" },
      {
        optionId: 2,
        optionText: "Using the try-catch statement in render methods",
      },
      {
        optionId: 3,
        optionText:
          "Creating a class component with getDerivedStateFromError or componentDidCatch lifecycle methods",
      },
      { optionId: 4, optionText: "Using the useError hook" },
    ],
    correctAnswer: 3,
    explanation:
      "Error boundaries in React are implemented using class components that define either the getDerivedStateFromError or componentDidCatch lifecycle methods (or both).",
    referenceLink:
      "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
  },
  {
    id: 8,
    question: "What is the primary use case for the useImperativeHandle hook?",
    options: [
      { optionId: 1, optionText: "To optimize component rendering" },
      { optionId: 2, optionText: "To handle form submissions" },
      {
        optionId: 3,
        optionText: "To customize the instance value exposed when using ref",
      },
      { optionId: 4, optionText: "To manage component state" },
    ],
    correctAnswer: 3,
    explanation:
      "useImperativeHandle is used to customize the instance value that is exposed when using ref on a component. It allows you to control what is exposed to parent components.",
    referenceLink: "https://react.dev/reference/react/useImperativeHandle",
  },
  {
    id: 9,
    question:
      "Which of the following is NOT a valid use case for the useMemo hook?",
    options: [
      { optionId: 1, optionText: "Memoizing expensive calculations" },
      { optionId: 2, optionText: "Optimizing re-renders of child components" },
      { optionId: 3, optionText: "Caching API response data" },
      { optionId: 4, optionText: "Memoizing event handler functions" },
    ],
    correctAnswer: 4,
    explanation:
      "Memoizing event handler functions is typically done with useCallback, not useMemo. useMemo is for memoizing values, while useCallback is for memoizing functions.",
    referenceLink: "https://react.dev/reference/react/useMemo",
  },
  {
    id: 10,
    question: "What is the purpose of the startTransition API in React?",
    options: [
      { optionId: 1, optionText: "To mark updates as non-urgent" },
      { optionId: 2, optionText: "To handle component transitions" },
      { optionId: 3, optionText: "To implement animations" },
      { optionId: 4, optionText: "To optimize state updates" },
    ],
    correctAnswer: 1,
    explanation:
      "The startTransition API in React is used to mark updates as non-urgent, allowing React to prioritize more critical updates and maintain responsiveness.",
    referenceLink: "https://react.dev/reference/react/startTransition",
  },
  {
    id: 11,
    question: "How can you implement a portal in React?",
    options: [
      { optionId: 1, optionText: "Using the React.createPortal method" },
      { optionId: 2, optionText: "Using the usePortal hook" },
      { optionId: 3, optionText: "Using the Portal component" },
      { optionId: 4, optionText: "Using the ReactDOM.createPortal method" },
    ],
    correctAnswer: 4,
    explanation:
      "Portals in React are implemented using the ReactDOM.createPortal method. This allows rendering a component into a DOM node that exists outside the hierarchy of the parent component.",
    referenceLink: "https://react.dev/reference/react-dom/createPortal",
  },
  {
    id: 12,
    question: "What is the main difference between useMemo and useCallback?",
    options: [
      {
        optionId: 1,
        optionText: "useMemo is for values, useCallback is for functions",
      },
      {
        optionId: 2,
        optionText: "useMemo is for functions, useCallback is for values",
      },
      {
        optionId: 3,
        optionText: "useMemo is synchronous, useCallback is asynchronous",
      },
      {
        optionId: 4,
        optionText: "There is no difference, they are interchangeable",
      },
    ],
    correctAnswer: 1,
    explanation:
      "The main difference is that useMemo is used to memoize values, while useCallback is used to memoize functions. Both are optimization hooks, but they serve slightly different purposes.",
    referenceLink: "https://react.dev/reference/react/useMemo",
  },
  {
    id: 13,
    question: "Which of the following is true about the useLayoutEffect hook?",
    options: [
      { optionId: 1, optionText: "It runs after all DOM mutations" },
      {
        optionId: 2,
        optionText: "It's recommended for most use cases over useEffect",
      },
      {
        optionId: 3,
        optionText: "It runs synchronously after all DOM mutations",
      },
      { optionId: 4, optionText: "It's only available in class components" },
    ],
    correctAnswer: 3,
    explanation:
      "useLayoutEffect runs synchronously immediately after React has performed all DOM mutations. This can be useful for measuring layout before the browser has a chance to paint.",
    referenceLink: "https://react.dev/reference/react/useLayoutEffect",
  },
  {
    id: 14,
    question: "What is the purpose of the useId hook?",
    options: [
      {
        optionId: 1,
        optionText: "To generate unique IDs for accessibility attributes",
      },
      {
        optionId: 2,
        optionText: "To identify components in the React DevTools",
      },
      { optionId: 3, optionText: "To optimize list rendering" },
      { optionId: 4, optionText: "To generate keys for list items" },
    ],
    correctAnswer: 1,
    explanation:
      "The useId hook is used to generate unique IDs for accessibility attributes or for linking labels with form controls. It's particularly useful for server-rendered content.",
    referenceLink: "https://react.dev/reference/react/useId",
  },
  {
    id: 15,
    question: "Which of the following is NOT a principle of Server Components?",
    options: [
      { optionId: 1, optionText: "Zero bundle size" },
      { optionId: 2, optionText: "Full access to the backend" },
      { optionId: 3, optionText: "Automatic code splitting" },
      { optionId: 4, optionText: "Always render on every request" },
    ],
    correctAnswer: 4,
    explanation:
      "Server Components don't always render on every request. They can be cached and reused across requests, which is one of their performance benefits.",
    referenceLink:
      "https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components",
  },
];
