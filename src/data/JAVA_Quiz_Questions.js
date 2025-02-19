export const JAVA_Fundamentals_Quiz_Questions = [
  {
    id: 1,
    question: "What is the correct way to declare a main method in Java?",
    options: [
      { optionId: 1, optionText: "public static void main(String[] args)" },
      { optionId: 2, optionText: "public void main(String args[])" },
      { optionId: 3, optionText: "static void main(String args)" },
      { optionId: 4, optionText: "void main(String[] args)" },
    ],
    correctAnswer: 1,
    explanation:
      "The main method in Java must be public, static, void, and accept an array of Strings as its parameter.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/getStarted/application/",
  },
  {
    id: 2,
    question: "Which of the following is not a primitive data type in Java?",
    options: [
      { optionId: 1, optionText: "int" },
      { optionId: 2, optionText: "boolean" },
      { optionId: 3, optionText: "String" },
      { optionId: 4, optionText: "double" },
    ],
    correctAnswer: 3,
    explanation:
      "String is a class in Java, not a primitive data type. The other options are all primitive types.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",
  },
  {
    id: 3,
    question: 'What is the result of 5 + 3 + "2" in Java?',
    options: [
      { optionId: 1, optionText: "10" },
      { optionId: 2, optionText: "532" },
      { optionId: 3, optionText: "82" },
      { optionId: 4, optionText: "55" },
    ],
    correctAnswer: 3,
    explanation:
      'Java evaluates from left to right. It first adds 5 and 3, resulting in 8, then concatenates "2" as a string.',
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/data/strings.html",
  },
  {
    id: 4,
    question: "Which keyword is used to inherit a class in Java?",
    options: [
      { optionId: 1, optionText: "extends" },
      { optionId: 2, optionText: "implements" },
      { optionId: 3, optionText: "inherits" },
      { optionId: 4, optionText: "super" },
    ],
    correctAnswer: 1,
    explanation: "The 'extends' keyword is used to inherit a class in Java.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html",
  },
  {
    id: 5,
    question: "What is the default value of a boolean variable in Java?",
    options: [
      { optionId: 1, optionText: "true" },
      { optionId: 2, optionText: "false" },
      { optionId: 3, optionText: "null" },
      { optionId: 4, optionText: "0" },
    ],
    correctAnswer: 2,
    explanation: "The default value of a boolean variable in Java is false.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",
  },
  {
    id: 6,
    question: "Which of the following is not a valid access modifier in Java?",
    options: [
      { optionId: 1, optionText: "public" },
      { optionId: 2, optionText: "private" },
      { optionId: 3, optionText: "protected" },
      { optionId: 4, optionText: "friend" },
    ],
    correctAnswer: 4,
    explanation:
      "Java does not have a 'friend' access modifier. The valid access modifiers are public, private, protected, and default (no modifier).",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html",
  },
  {
    id: 7,
    question: "What is the correct way to create an array in Java?",
    options: [
      { optionId: 1, optionText: "int[] arr = new int[5];" },
      { optionId: 2, optionText: "int arr[] = new int[];" },
      { optionId: 3, optionText: "int array[5] = new int[];" },
      { optionId: 4, optionText: "array int[] = new int[5];" },
    ],
    correctAnswer: 1,
    explanation:
      "This is the correct syntax to create an array of integers with a size of 5 in Java.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html",
  },
  {
    id: 8,
    question: "Which statement is true about Java?",
    options: [
      { optionId: 1, optionText: "Java is a purely object-oriented language" },
      {
        optionId: 2,
        optionText: "Java supports multiple inheritance for classes",
      },
      { optionId: 3, optionText: "Java is platform-dependent" },
      {
        optionId: 4,
        optionText: "Java supports both primitive data types and objects",
      },
    ],
    correctAnswer: 4,
    explanation:
      "Java is not purely object-oriented as it supports primitive types. It doesn't support multiple inheritance for classes, and it's platform-independent.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",
  },
  {
    id: 9,
    question: 'What is the output of System.out.println(1 + 2 + "3" + 4 + 5);?',
    options: [
      { optionId: 1, optionText: "3345" },
      { optionId: 2, optionText: "3345" },
      { optionId: 3, optionText: "15" },
      { optionId: 4, optionText: "6345" },
    ],
    correctAnswer: 1,
    explanation:
      'Java evaluates from left to right. 1+2 is 3, then "3" is concatenated, making it "33", then 4 and 5 are concatenated as strings.',
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/data/strings.html",
  },
  {
    id: 10,
    question:
      "Which of the following is used to explicitly throw an exception?",
    options: [
      { optionId: 1, optionText: "throw" },
      { optionId: 2, optionText: "throws" },
      { optionId: 3, optionText: "thrown" },
      { optionId: 4, optionText: "catch" },
    ],
    correctAnswer: 1,
    explanation:
      "The 'throw' keyword is used to explicitly throw an exception in Java.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/essential/exceptions/throwing.html",
  },
  {
    id: 11,
    question: "What is the correct way to declare a constant in Java?",
    options: [
      { optionId: 1, optionText: "final int MAX_VALUE = 100;" },
      { optionId: 2, optionText: "const int MAX_VALUE = 100;" },
      { optionId: 3, optionText: "static int MAX_VALUE = 100;" },
      { optionId: 4, optionText: "int final MAX_VALUE = 100;" },
    ],
    correctAnswer: 1,
    explanation: "In Java, constants are declared using the 'final' keyword.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html",
  },
  {
    id: 12,
    question: "Which of the following is not a valid loop in Java?",
    options: [
      { optionId: 1, optionText: "for loop" },
      { optionId: 2, optionText: "while loop" },
      { optionId: 3, optionText: "do-while loop" },
      { optionId: 4, optionText: "repeat-until loop" },
    ],
    correctAnswer: 4,
    explanation:
      "Java does not have a repeat-until loop. It has for, while, and do-while loops.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html",
  },
  {
    id: 13,
    question:
      "What is the correct way to create an instance of a class named 'MyClass'?",
    options: [
      { optionId: 1, optionText: "MyClass obj = new MyClass();" },
      { optionId: 2, optionText: "new MyClass obj;" },
      { optionId: 3, optionText: "MyClass obj = MyClass();" },
      { optionId: 4, optionText: "obj = new MyClass;" },
    ],
    correctAnswer: 1,
    explanation:
      "This is the correct syntax to create an instance of a class in Java using the 'new' keyword.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html",
  },
  {
    id: 14,
    question: "Which statement is used to exit a loop in Java?",
    options: [
      { optionId: 1, optionText: "break" },
      { optionId: 2, optionText: "exit" },
      { optionId: 3, optionText: "continue" },
      { optionId: 4, optionText: "return" },
    ],
    correctAnswer: 1,
    explanation: "The 'break' statement is used to exit a loop in Java.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html",
  },
  {
    id: 15,
    question: "What is the default value of an int variable in Java?",
    options: [
      { optionId: 1, optionText: "0" },
      { optionId: 2, optionText: "1" },
      { optionId: 3, optionText: "null" },
      { optionId: 4, optionText: "undefined" },
    ],
    correctAnswer: 1,
    explanation: "The default value of an int variable in Java is 0.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",
  },
];

export const JAVA_Intermediate_Quiz_Questions = [
  {
    id: 1,
    question:
      "What is the purpose of the 'final' keyword when applied to a method?",
    options: [
      { optionId: 1, optionText: "It makes the method private" },
      {
        optionId: 2,
        optionText: "It prevents the method from being overridden",
      },
      { optionId: 3, optionText: "It makes the method static" },
      { optionId: 4, optionText: "It forces the method to throw an exception" },
    ],
    correctAnswer: 2,
    explanation:
      "When applied to a method, the 'final' keyword prevents the method from being overridden in subclasses.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/IandI/final.html",
  },
  {
    id: 2,
    question:
      "Which collection type should be used when you need to maintain insertion order and allow duplicates?",
    options: [
      { optionId: 1, optionText: "ArrayList" },
      { optionId: 2, optionText: "HashSet" },
      { optionId: 3, optionText: "TreeSet" },
      { optionId: 4, optionText: "LinkedHashSet" },
    ],
    correctAnswer: 1,
    explanation:
      "ArrayList maintains insertion order and allows duplicate elements.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html",
  },
  {
    id: 3,
    question: "What is the purpose of the 'synchronized' keyword in Java?",
    options: [
      { optionId: 1, optionText: "To create a new thread" },
      { optionId: 2, optionText: "To improve performance" },
      {
        optionId: 3,
        optionText:
          "To prevent thread interference and memory consistency errors",
      },
      { optionId: 4, optionText: "To declare a variable as constant" },
    ],
    correctAnswer: 3,
    explanation:
      "The 'synchronized' keyword is used to create synchronized methods or blocks, which help in preventing thread interference and memory consistency errors in multithreaded programs.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html",
  },
  {
    id: 4,
    question:
      "Which interface should a class implement to be used as a key in a HashMap?",
    options: [
      { optionId: 1, optionText: "Comparable" },
      { optionId: 2, optionText: "Cloneable" },
      { optionId: 3, optionText: "Serializable" },
      { optionId: 4, optionText: "Hashable" },
    ],
    correctAnswer: 1,
    explanation:
      "While not strictly necessary, implementing the Comparable interface (and overriding equals() and hashCode()) is a good practice for objects used as keys in a HashMap to ensure proper behavior.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html",
  },
  {
    id: 5,
    question: "What is the purpose of the 'transient' keyword in Java?",
    options: [
      { optionId: 1, optionText: "To make a variable thread-safe" },
      {
        optionId: 2,
        optionText: "To prevent a variable from being serialized",
      },
      { optionId: 3, optionText: "To make a variable constant" },
      {
        optionId: 4,
        optionText: "To allow a variable to be accessed from other packages",
      },
    ],
    correctAnswer: 2,
    explanation:
      "The 'transient' keyword is used to indicate that a variable should not be serialized when the object containing it is serialized.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html",
  },
  {
    id: 6,
    question:
      "Which of the following is true about the 'try-with-resources' statement?",
    options: [
      { optionId: 1, optionText: "It's used for exception handling only" },
      {
        optionId: 2,
        optionText:
          "It automatically closes resources that implement AutoCloseable",
      },
      { optionId: 3, optionText: "It's a feature introduced in Java 5" },
      { optionId: 4, optionText: "It can only be used with file handling" },
    ],
    correctAnswer: 2,
    explanation:
      "The try-with-resources statement ensures that each resource is closed at the end of the statement. Any object that implements java.lang.AutoCloseable can be used as a resource.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html",
  },
  {
    id: 7,
    question: "What is the purpose of the 'volatile' keyword in Java?",
    options: [
      { optionId: 1, optionText: "To make a variable constant" },
      { optionId: 2, optionText: "To make a variable thread-safe" },
      {
        optionId: 3,
        optionText: "To prevent a variable from being garbage collected",
      },
      {
        optionId: 4,
        optionText:
          "To store the variable in main memory for visibility to all threads",
      },
    ],
    correctAnswer: 4,
    explanation:
      "The 'volatile' keyword ensures that the variable is always read from and written to main memory, making its value visible to all threads.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/essential/concurrency/atomic.html",
  },
  {
    id: 8,
    question: "Which of the following is not a functional interface in Java 8?",
    options: [
      { optionId: 1, optionText: "Predicate" },
      { optionId: 2, optionText: "Consumer" },
      { optionId: 3, optionText: "Supplier" },
      { optionId: 4, optionText: "Collector" },
    ],
    correctAnswer: 4,
    explanation:
      "Collector is not a functional interface. Predicate, Consumer, and Supplier are functional interfaces introduced in Java 8.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html",
  },
  {
    id: 9,
    question: "What is the purpose of the 'default' method in Java interfaces?",
    options: [
      { optionId: 1, optionText: "To define a constant" },
      {
        optionId: 2,
        optionText: "To provide a default implementation for a method",
      },
      { optionId: 3, optionText: "To make the interface abstract" },
      { optionId: 4, optionText: "To declare a private method" },
    ],
    correctAnswer: 2,
    explanation:
      "Default methods in interfaces allow the addition of new methods to interfaces without breaking the existing implementation of these interfaces.",
    referenceLink:
      "https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html",
  },
];

export const JAVA_Advanced_Quiz_Questions = [
  {
    id: 1,
    question: "What is the purpose of the 'ForkJoinPool' in Java?",
    options: [
      { optionId: 1, optionText: "To manage database connections" },
      { optionId: 2, optionText: "To implement the producer-consumer pattern" },
      {
        optionId: 3,
        optionText:
          "To efficiently execute recursive tasks using multiple threads",
      },
      {
        optionId: 4,
        optionText: "To handle HTTP requests in a web application",
      },
    ],
    correctAnswer: 3,
    explanation:
      "ForkJoinPool is a special thread pool implementation designed to efficiently execute recursive tasks using multiple processor cores.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ForkJoinPool.html",
  },
  {
    id: 2,
    question: "Which of the following is not a feature introduced in Java 9?",
    options: [
      { optionId: 1, optionText: "Module System" },
      { optionId: 2, optionText: "JShell" },
      { optionId: 3, optionText: "Private methods in interfaces" },
      { optionId: 4, optionText: "Stream API" },
    ],
    correctAnswer: 4,
    explanation:
      "The Stream API was introduced in Java 8, not Java 9. The other options (Module System, JShell, and private methods in interfaces) were introduced in Java 9.",
    referenceLink: "https://docs.oracle.com/javase/9/whatsnew/toc.htm",
  },
  {
    id: 3,
    question: "What is the purpose of the 'CompletableFuture' class in Java?",
    options: [
      {
        optionId: 1,
        optionText:
          "To represent a future result of an asynchronous computation",
      },
      { optionId: 2, optionText: "To implement a complete binary tree" },
      { optionId: 3, optionText: "To handle file compression" },
      { optionId: 4, optionText: "To manage database transactions" },
    ],
    correctAnswer: 1,
    explanation:
      "CompletableFuture is used for asynchronous programming in Java. It can be explicitly completed (setting its value and status), and can be used as a CompletionStage, supporting dependent functions and actions.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CompletableFuture.html",
  },
  {
    id: 4,
    question:
      "Which design pattern is used when you want to decouple an abstraction from its implementation so that the two can vary independently?",
    options: [
      { optionId: 1, optionText: "Factory Method" },
      { optionId: 2, optionText: "Bridge" },
      { optionId: 3, optionText: "Adapter" },
      { optionId: 4, optionText: "Decorator" },
    ],
    correctAnswer: 2,
    explanation:
      "The Bridge pattern is used to separate an abstraction from its implementation so that both can be modified independently without affecting each other.",
    referenceLink: "https://refactoring.guru/design-patterns/bridge",
  },
  {
    id: 5,
    question: "What is the purpose of the 'Unsafe' class in Java?",
    options: [
      { optionId: 1, optionText: "To perform low-level, unsafe operations" },
      { optionId: 2, optionText: "To handle unchecked exceptions" },
      { optionId: 3, optionText: "To create thread-safe code" },
      { optionId: 4, optionText: "To implement security features" },
    ],
    correctAnswer: 1,
    explanation:
      "The Unsafe class provides methods for performing low-level, unsafe operations. This includes direct memory access and manipulation, which can be dangerous if used incorrectly.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/sun/misc/Unsafe.html",
  },
  {
    id: 6,
    question:
      "Which of the following is true about Java's G1 (Garbage First) Garbage Collector?",
    options: [
      { optionId: 1, optionText: "It's designed for small heaps" },
      {
        optionId: 2,
        optionText: "It aims to provide high throughput with minimal pauses",
      },
      {
        optionId: 3,
        optionText: "It's the default garbage collector in Java 8",
      },
      { optionId: 4, optionText: "It doesn't support concurrent collection" },
    ],
    correctAnswer: 2,
    explanation:
      "G1 is a server-style garbage collector, targeted for multi-processor machines with large memories. It aims to provide high throughput while maintaining low pause times.",
    referenceLink:
      "https://docs.oracle.com/javase/9/gctuning/garbage-first-garbage-collector.htm",
  },
  {
    id: 7,
    question:
      "What is the purpose of the 'VarHandle' class introduced in Java 9?",
    options: [
      { optionId: 1, optionText: "To declare variables with inferred types" },
      {
        optionId: 2,
        optionText: "To handle variations in method implementations",
      },
      {
        optionId: 3,
        optionText: "To provide fine-grained access to variable handles",
      },
      { optionId: 4, optionText: "To manage variable-length argument lists" },
    ],
    correctAnswer: 3,
    explanation:
      "VarHandle provides a way to perform atomic and memory-ordered operations on objects, arrays, and variables, similar to the functionality of sun.misc.Unsafe, but in a more controlled manner.",
    referenceLink:
      "https://docs.oracle.com/javase/9/docs/api/java/lang/invoke/VarHandle.html",
  },
  {
    id: 8,
    question:
      "Which of the following is not a type of reference in Java's Reference Objects framework?",
    options: [
      { optionId: 1, optionText: "Strong Reference" },
      { optionId: 2, optionText: "Soft Reference" },
      { optionId: 3, optionText: "Weak Reference" },
      { optionId: 4, optionText: "Phantom Reference" },
    ],
    correctAnswer: 1,
    explanation:
      "Strong References are regular object references and are not part of the Reference Objects framework. The framework includes Soft, Weak, and Phantom references.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/lang/ref/package-summary.html",
  },
  {
    id: 9,
    question: "What is the purpose of the 'invokedynamic' instruction in Java?",
    options: [
      { optionId: 1, optionText: "To invoke dynamic SQL queries" },
      {
        optionId: 2,
        optionText:
          "To support dynamic method invocation for languages implemented on the JVM",
      },
      { optionId: 3, optionText: "To dynamically allocate memory" },
      { optionId: 4, optionText: "To invoke native methods dynamically" },
    ],
    correctAnswer: 2,
    explanation:
      "The invokedynamic instruction provides language implementers the flexibility to determine the linkage between a call site and a method implementation at runtime, allowing for more efficient implementation of dynamic languages on the JVM.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/technotes/guides/vm/multiple-language-support.html",
  },
  {
    id: 10,
    question: "Which of the following is true about Java's Project Loom?",
    options: [
      { optionId: 1, optionText: "It's a new build tool for Java" },
      { optionId: 2, optionText: "It introduces value types to Java" },
      {
        optionId: 3,
        optionText:
          "It aims to introduce lightweight concurrency constructs to Java",
      },
      { optionId: 4, optionText: "It's a new garbage collection algorithm" },
    ],
    correctAnswer: 3,
    explanation:
      "Project Loom aims to introduce lightweight user-mode threads (fibers) and continuations to Java, making it easier to write, debug, and maintain concurrent applications.",
    referenceLink: "https://openjdk.java.net/projects/loom/",
  },
  {
    id: 11,
    question: "What is the purpose of the 'Nashorn' engine in Java?",
    options: [
      {
        optionId: 1,
        optionText: "To execute JavaScript code within Java applications",
      },
      { optionId: 2, optionText: "To optimize database queries" },
      { optionId: 3, optionText: "To handle network protocols" },
      { optionId: 4, optionText: "To generate bytecode at runtime" },
    ],
    correctAnswer: 1,
    explanation:
      "Nashorn is a JavaScript engine developed by Oracle for the Java platform. It allows developers to embed JavaScript code within Java applications.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/technotes/guides/scripting/nashorn/",
  },
  {
    id: 12,
    question:
      "Which of the following is a key feature of Java's Project Valhalla?",
    options: [
      { optionId: 1, optionText: "Introducing new concurrency models" },
      { optionId: 2, optionText: "Adding support for value types" },
      { optionId: 3, optionText: "Improving the performance of the JVM" },
      { optionId: 4, optionText: "Enhancing the Java Collections Framework" },
    ],
    correctAnswer: 2,
    explanation:
      "Project Valhalla aims to introduce value types to Java, which would allow for more efficient handling of small, immutable objects.",
    referenceLink: "https://openjdk.java.net/projects/valhalla/",
  },
  {
    id: 13,
    question: "What is the purpose of Java's SecurityManager?",
    options: [
      { optionId: 1, optionText: "To encrypt sensitive data" },
      { optionId: 2, optionText: "To manage user authentication" },
      { optionId: 3, optionText: "To control access to sensitive operations" },
      {
        optionId: 4,
        optionText: "To detect and prevent SQL injection attacks",
      },
    ],
    correctAnswer: 3,
    explanation:
      "The SecurityManager in Java is used to define a security policy for an application, controlling access to sensitive operations like file I/O, network access, and system property access.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/lang/SecurityManager.html",
  },
  {
    id: 14,
    question: "Which of the following is not a type of Java ClassLoader?",
    options: [
      { optionId: 1, optionText: "Bootstrap ClassLoader" },
      { optionId: 2, optionText: "Extension ClassLoader" },
      { optionId: 3, optionText: "Application ClassLoader" },
      { optionId: 4, optionText: "Dynamic ClassLoader" },
    ],
    correctAnswer: 4,
    explanation:
      "The three types of built-in ClassLoaders in Java are Bootstrap, Extension (Platform in Java 9+), and Application ClassLoader. 'Dynamic ClassLoader' is not a standard type.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html",
  },
  {
    id: 15,
    question: "What is the purpose of Java's MethodHandle API?",
    options: [
      { optionId: 1, optionText: "To handle HTTP methods in web applications" },
      {
        optionId: 2,
        optionText:
          "To provide a way to lookup, invoke, and customize methods dynamically",
      },
      { optionId: 3, optionText: "To optimize method calls at compile time" },
      { optionId: 4, optionText: "To handle method overloading" },
    ],
    correctAnswer: 2,
    explanation:
      "The MethodHandle API provides a way to find, adapt, and invoke methods, constructors, and fields in a dynamic and flexible way, similar to reflection but with better performance.",
    referenceLink:
      "https://docs.oracle.com/javase/8/docs/api/java/lang/invoke/MethodHandle.html",
  },
];
